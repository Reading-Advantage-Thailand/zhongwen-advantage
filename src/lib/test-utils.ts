import { User } from 'firebase/auth'

// Create a partial mock that satisfies the User type
export const mockUser = {
  uid: 'test-uid',
  email: 'test@example.com',
  displayName: '张三',
  photoURL: 'https://example.com/photo.jpg',
  emailVerified: false,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: '',
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => '',
  getIdTokenResult: async () => ({} as any),
  reload: async () => {},
  toJSON: () => ({}),
} as User
