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
│   │   ├── main-nav.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── sidebar-nav.tsx
│   │   └── index.ts
│   ├── ui/              # shadcn components
│   │   └── button.tsx   # Implemented
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
- Firebase for authentication (pending)
- NextAuth.js for session management (pending)

### Chinese Language Dependencies (Pending)

- HanziWriter for stroke animations
- chinese-tokenizer for text processing
- pinyin-utils for pronunciation

## API Structure (Following Reading Advantage)

### Authentication

- `/api/auth/[...nextauth]`

### V1 API Endpoints

- Activity tracking
- Article management
- Classroom operations
- Level assessment
- License management
- User management
- System dashboard

### New Chinese-Specific Endpoints

- Character data
- Pronunciation guides
- Stroke order information
- Traditional/Simplified conversion

## Database Schema

### Core Tables (Adapted from Reading Advantage)

- Users (enhanced for Chinese learning)
- Articles (modified for Chinese content)
- Questions (adapted for Chinese)
- Progress (modified for character tracking)

### New Chinese-Specific Tables

- Characters
- Radicals
- Pronunciation
- Character Progress

## Recent Changes

### Components

1. Navigation Components (Completed)

   - Imported and adapted main-nav.tsx
   - Imported and adapted mobile-nav.tsx
   - Imported and adapted sidebar-nav.tsx
   - Created navigation index for easy imports

2. UI Components

   - Added Button component using shadcn/ui
   - Set up with proper styling and variants

3. Landing Page
   - Implemented responsive hero section
   - Added features showcase
   - Added statistics display
   - Added learning path section
   - Added call-to-action sections

### Configuration Updates

1. Styling

   - Updated globals.css with shadcn theme variables
   - Added Tailwind configuration for shadcn components
   - Set up dark mode support

2. TypeScript
   - Updated tsconfig.json with proper path aliases
   - Added necessary type definitions

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
