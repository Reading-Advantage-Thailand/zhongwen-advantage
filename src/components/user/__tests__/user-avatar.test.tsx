import { render, screen } from '@testing-library/react'
import { UserAvatar } from '../user-avatar'
import { mockUser } from '@/lib/test-utils'

describe('UserAvatar', () => {
  it('should render user avatar with image and proper accessibility attributes', () => {
    render(
      <UserAvatar
        user={{
          ...mockUser,
          photoURL: 'https://example.com/avatar.jpg',
          displayName: '张伟'
        }}
      />
    )

    const avatar = screen.getByRole('img', { name: '张伟' })
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('aria-label', '张伟')
  })

  it('should render fallback with first character of Chinese name', () => {
    render(
      <UserAvatar
        user={{
          ...mockUser,
          photoURL: null,
          displayName: '李明'
        }}
      />
    )

    const avatar = screen.getByRole('img', { name: '李明' })
    const fallback = screen.getByText('李')
    expect(avatar).toBeInTheDocument()
    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveAttribute('aria-hidden', 'true')
  })

  it('should render default fallback with proper accessibility when no name provided', () => {
    render(
      <UserAvatar
        user={{
          ...mockUser,
          photoURL: null,
          displayName: null
        }}
      />
    )

    const avatar = screen.getByRole('img', { name: '用户头像' })
    const fallback = screen.getByText('用')
    expect(avatar).toBeInTheDocument()
    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveAttribute('aria-hidden', 'true')
  })

  it('should handle different sizes', () => {
    const { rerender } = render(
      <UserAvatar
        user={mockUser}
        size="lg"
      />
    )

    expect(screen.getByTestId('user-avatar')).toHaveClass('h-12 w-12')

    rerender(
      <UserAvatar
        user={mockUser}
        size="sm"
      />
    )

    expect(screen.getByTestId('user-avatar')).toHaveClass('h-8 w-8')
  })
})
