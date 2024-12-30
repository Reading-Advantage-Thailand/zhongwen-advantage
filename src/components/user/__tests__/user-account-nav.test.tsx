import { render, screen } from '@testing-library/react'
import { UserAccountNav } from '../user-account-nav'
import { useAuth } from '@/hooks/use-auth'
import { mockUser } from '@/lib/test-utils'

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

  it('should render navigation menu items in Chinese', () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      loading: false
    })

    render(<UserAccountNav />)
    
    // Click the avatar to open the dropdown
    const avatar = screen.getByTestId('user-avatar')
    avatar.click()
    
    // Now check for menu items
    expect(screen.getByText(/个人资料/i)).toBeInTheDocument()
    expect(screen.getByText(/设置/i)).toBeInTheDocument() 
    expect(screen.getByText(/登出/i)).toBeInTheDocument()
  })
})
