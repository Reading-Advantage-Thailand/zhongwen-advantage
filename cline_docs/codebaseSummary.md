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
│   ├── navigation/       # Direct import
│   ├── user/            # Direct import
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

### Core Dependencies (From Reading Advantage)

- next-intl for internationalization
- shadcn/ui for components
- Prisma for database
- Firebase for authentication
- NextAuth.js for session management

### Chinese Language Dependencies

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

## Development Guidelines

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
