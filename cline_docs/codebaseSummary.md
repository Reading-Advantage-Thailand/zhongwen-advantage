# Codebase Summary

## Project Structure (Imported from Reading Advantage)

### Root Layout Structure

```
/
├── app/                    # Next.js 14 App Router
│   ├── [locale]/          # Internationalization support
│   ├── (admin)/           # Administrative interface
│   ├── (auth)/            # Authentication pages
│   ├── (index)/           # Public-facing pages
│   ├── (student)/         # Student features
│   ├── (system)/          # System administration
│   └── (teacher)/         # Teacher features
│
├── components/            # React Components
│   ├── article/          # Imported with Chinese text support
│   ├── audio/            # Enhanced for Chinese pronunciation
│   ├── navigation/       # Direct import - Completed
│   │   ├── main-nav.tsx    # Updated with auth UI
│   │   ├── mobile-nav.tsx  # Updated with auth UI
│   │   ├── sidebar-nav.tsx
│   │   └── index.ts
│   ├── ui/              # shadcn components
│   │   ├── avatar.tsx   # Used for user profile display
│   │   ├── button.tsx   # Implemented
│   │   └── dropdown-menu.tsx # Used for user menu
│   ├── user/            # Direct import (Pending)
│   ├── dashboard/       # Modified for Chinese learning metrics
│   ├── exercise/        # Adapted for Chinese exercises
│   ├── question/        # Modified for Chinese input
│   ├── character/       # New Chinese-specific components
│   │   ├── stroke-order/
│   │   ├── radical-breakdown/
│   │   └── practice/
│   └── pronunciation/   # New pronunciation components
│       ├── tone-practice/
│       ├── pinyin-display/
│       └── audio-recording/
│
├── lib/                 # Utility functions and configurations
│   ├── firebase.ts     # Firebase initialization
│   └── utils.ts        # Utility functions
│
├── hooks/              # Custom React hooks
│   └── use-auth.ts    # Firebase authentication hook
│
├── api/                  # API Routes
│   └── v1/
│       ├── auth/        # Authentication endpoints
│       ├── activity/    # User activity tracking
│       ├── articles/    # Article management
│       ├── assistant/   # AI assistance features
│       ├── classroom/   # Classroom management
│       ├── level-test/  # Reading level assessment
│       ├── licenses/    # License management
│       ├── passage/     # Reading passage management
│       ├── system/      # System dashboard data
│       └── users/       # User management
```

## Development Guidelines

### Task Management System

#### Task Creation and Structure

- Tasks are created using the create-task-issue.ts script
- Each task follows a standardized template (Issue #5) that includes:
  - Components to import/modify
  - Detailed task breakdown
  - Technical considerations
  - Documentation requirements

#### Task Workflow

1. Starting a Task

   - Visit the GitHub issue
   - Switch to the task-specific branch
   - Review technical considerations
   - Update project board status

2. During Development

   - Follow task breakdown sequence
   - Update currentTask.md progress
   - Make atomic commits with clear messages
   - Document technical decisions

3. Task Completion
   - Verify all tasks complete
   - Update documentation
   - Complete testing
   - Update project board
   - Create pull request

#### Documentation Updates

- currentTask.md: Tracks current task progress
- projectRoadmap.md: Overall project progress
- techStack.md: Technical decisions and dependencies
- codebaseSummary.md: System architecture and changes

### Import Process

1. Copy original component/route structure
2. Analyze Chinese language requirements
3. Modify for Chinese support
4. Test functionality
5. Document changes

### Code Organization

- Follow Reading Advantage's route group structure
- Maintain clear separation of concerns
- Document all modifications
- Keep Chinese-specific features organized

### Testing Strategy

- Unit tests for imported components
- Integration tests for Chinese features
- Route testing
- API endpoint testing
- Performance testing

## Data Flow Patterns

### Standard Flow

```
Client Component -> Client Service -> API -> Controller -> Service -> Model
```

### Chinese-Specific Flow

```
Chinese Text Input -> Character Processing -> Pinyin Generation ->
Audio Synthesis -> User Interface
```

## External Dependencies

### Core Dependencies

- next-intl for internationalization
- shadcn/ui for components
- Prisma for database (pending)
- Firebase for authentication (implemented)
- NextAuth.js for session management (pending)

### Chinese Language Dependencies (Pending)

- HanziWriter for stroke animations
- chinese-tokenizer for text processing
- pinyin-utils for pronunciation

## Recent Changes

### Components

1. Navigation Components (Updated)

   - Enhanced main-nav.tsx with authentication UI
   - Enhanced mobile-nav.tsx with authentication UI
   - Added user avatar and dropdown menu
   - Added login/signup buttons for unauthenticated users

2. Authentication

   - Implemented Firebase initialization
   - Created useAuth hook for authentication state
   - Added sign-out functionality

3. UI Components
   - Added Avatar component for user profile display
   - Added Dropdown Menu for user actions
   - Enhanced Button component with new variants

### Configuration Updates

1. Firebase Setup

   - Added Firebase configuration
   - Initialized Firebase app
   - Set up authentication services

2. Environment Variables
   - Added Firebase configuration variables
   - Secured sensitive information

## Future Considerations

### Scalability

- Character database optimization
- Route handling for increased content
- Cache strategy for character data
- Audio storage optimization

### Maintenance

- Regular synchronization with Reading Advantage updates
- Chinese content management
- Character database updates
- Route optimization
- Performance monitoring

### Authentication Enhancements

- Add additional authentication providers
- Implement role-based access control
- Add user profile management
- Add account settings
