# Technology Stack Documentation

## Import Process Technologies

### Version Control & Migration

- Git for tracking imported components
- GitHub for repository management
- Migration scripts for database schema adaptation

### Code Analysis

- TypeScript for type checking during adaptation
- ESLint for code style consistency
- Jest for testing imported components

## Core Technologies (From Reading Advantage)

### Frontend Framework

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui component library
- Framer Motion for animations

### Backend

- PostgreSQL database
- Prisma ORM
- Firebase Authentication
- Google Cloud Run
- Cloud Storage for media

### Development Tools

- GitHub Actions for CI/CD
- ESLint & Prettier
- Testing frameworks

## Additional Technologies for Chinese Support

### Character Processing

- HanziWriter for stroke animations
- chinese-tokenizer for text segmentation
- hanzi-writer-data for character data
- pinyin-utils for pronunciation

### Text Rendering

- Custom font loading for Chinese characters
- WebFont optimization
- Canvas for character writing

### Audio Processing

- Web Speech API for TTS
- Audio recording capabilities
- Tone analysis tools

## Infrastructure Decisions

### Database Modifications

- Unicode support configuration
- Indexing for Chinese character fields
- Full-text search adaptation

### API Adaptations

- Character conversion endpoints
- Pronunciation generation
- Stroke order data serving

### Performance Considerations

- CDN configuration for Chinese fonts
- Character data caching
- Audio file optimization

## Security Measures

### Authentication

- Porting Reading Advantage's auth system
- JWT token handling
- Role-based access control

### Data Protection

- Input sanitization for Chinese text
- XSS prevention
- CORS policies

## Monitoring

### Performance Tracking

- Chinese font loading metrics
- Character rendering performance
- Audio processing latency

### Error Tracking

- Character encoding issues
- Font loading failures
- Audio processing errors

## Development Environment

### Required Tools

- Chinese language support in IDE
- Font preview capabilities
- Audio testing tools

### Testing Setup

- Unit tests for imported components
- Integration tests for Chinese features
- Performance testing for character rendering
