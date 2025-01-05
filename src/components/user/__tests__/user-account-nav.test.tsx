import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserAccountNav } from '../user-account-nav'
import { useAuth } from '@/hooks/use-auth'
import { mockUser } from '@/lib/test-utils'
import { getAuth, signOut } from 'firebase/auth'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signOut: jest.fn()
}))

// Mock useAuth hook
jest.mock('@/hooks/use-auth')
const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>

describe('UserAccountNav', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks()
  })

  it('should render user avatar when logged in', () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      loading: false
    })

    render(<UserAccountNav />)
    expect(screen.getByTestId('user-avatar')).toBeInTheDocument()
  })

  it('should render login button when not logged in', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      loading: false
    })

    render(<UserAccountNav />)
    expect(screen.getByText(/登录/i)).toBeInTheDocument()
  })

  it('should show loading state', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      loading: true
    })

    render(<UserAccountNav />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('should render navigation menu items in Chinese', async () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      loading: false
    })

    const user = userEvent.setup()
    render(<UserAccountNav />)
    
    // Click the avatar to open the dropdown
    const trigger = screen.getByRole('button', { name: /用户头像/i })
    await user.click(trigger)
    
    // Now check for menu items
    expect(screen.getByRole('menuitem', { name: /个人资料/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /设置/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /登出/i })).toBeInTheDocument()
  })

  it('should call signOut when logout is clicked', async () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      loading: false
    })

    const mockAuth = {}
    ;(getAuth as jest.Mock).mockReturnValue(mockAuth)
    ;(signOut as jest.Mock).mockResolvedValue(undefined)

    const user = userEvent.setup()
    render(<UserAccountNav />)
    
    // Click the avatar to open the dropdown
    const trigger = screen.getByRole('button', { name: /用户头像/i })
    await user.click(trigger)
    
    // Click the logout button
    const logoutButton = screen.getByRole('menuitem', { name: /登出/i })
    await user.click(logoutButton)

    expect(getAuth).toHaveBeenCalled()
    expect(signOut).toHaveBeenCalledWith(mockAuth)
  })
})
