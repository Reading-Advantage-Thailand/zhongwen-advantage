import { render, screen } from '@testing-library/react'
import { UserAvatar } from '../user-avatar'
import { mockUser } from '@/lib/test-utils'

describe('UserAvatar', () => {
  it('should render user avatar with image when provided', () => {
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
  })

  it('should render fallback with first character of name', () => {
    render(
      <UserAvatar
        user={{
          ...mockUser,
          photoURL: null,
          displayName: '李明'
        }}
      />
    )

    const fallback = screen.getByText('李')
    expect(fallback).toBeInTheDocument()
  })

  it('should render default fallback when no name provided', () => {
    render(
      <UserAvatar
        user={{
          ...mockUser,
          photoURL: null,
          displayName: null
        }}
      />
    )

    const fallback = screen.getByText('用')
    expect(fallback).toBeInTheDocument()
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
