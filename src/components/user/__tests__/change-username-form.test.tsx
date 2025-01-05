import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChangeUsernameForm } from '../change-username-form'
import { mockUser } from '@/lib/test-utils'
import { act } from 'react-dom/test-utils'

const mockUpdateProfile = jest.fn()
jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  updateProfile: (...args: any[]) => mockUpdateProfile(...args)
}))

describe('ChangeUsernameForm', () => {
  beforeEach(() => {
    mockUpdateProfile.mockClear()
  })

  it('renders form with current username and proper labels', () => {
    render(<ChangeUsernameForm user={mockUser} />)
    
    expect(screen.getByRole('textbox', { name: /用户名/i })).toHaveValue('张三')
    expect(screen.getByRole('button', { name: /更新/i })).toBeInTheDocument()
  })

  it('validates Chinese character input', async () => {
    render(<ChangeUsernameForm user={mockUser} />)
    
    const input = screen.getByRole('textbox', { name: /用户名/i })
    await userEvent.clear(input)
    await userEvent.type(input, '李明明')
    
    expect(input).toHaveValue('李明明')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('handles mixed language input', async () => {
    render(<ChangeUsernameForm user={mockUser} />)
    
    const input = screen.getByRole('textbox', { name: /用户名/i })
    await userEvent.clear(input)
    await userEvent.type(input, 'John李明')
    
    expect(input).toHaveValue('John李明')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('displays error for empty username', async () => {
    render(<ChangeUsernameForm user={mockUser} />)
    
    const input = screen.getByRole('textbox', { name: /用户名/i })
    await userEvent.clear(input)
    await userEvent.tab() // Trigger blur and validation
    
    const errorMessage = await screen.findByRole('alert')
    expect(errorMessage).toHaveTextContent('用户名不能为空')
  })

  it('successfully updates username', async () => {
    render(<ChangeUsernameForm user={mockUser} />)
    
    const input = screen.getByRole('textbox', { name: /用户名/i })
    const submitButton = screen.getByRole('button', { name: /更新/i })
    
    await userEvent.clear(input)
    await userEvent.type(input, '王小明')
    await userEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockUpdateProfile).toHaveBeenCalledWith(
        mockUser,
        { displayName: '王小明' }
      )
    })
  })

  it('shows loading state during submission', async () => {
    mockUpdateProfile.mockImplementationOnce(() => new Promise(resolve => setTimeout(resolve, 100)))
    
    render(<ChangeUsernameForm user={mockUser} />)
    
    const input = screen.getByRole('textbox', { name: /用户名/i })
    const submitButton = screen.getByRole('button', { name: /更新/i })
    
    await userEvent.clear(input)
    await userEvent.type(input, '王小明')
    await userEvent.click(submitButton)
    
    expect(submitButton).toBeDisabled()
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
