# Zhongwen Advantage

Zhongwen Advantage is a specialized adaptation of the Reading Advantage platform, designed specifically for Chinese language learning. The project leverages Reading Advantage's proven codebase while introducing essential features for Chinese language instruction and practice.

## Project Overview

This platform extends Reading Advantage's successful educational framework to create a comprehensive Chinese learning environment. It maintains the core functionality of the original system while introducing specialized features for character learning, pronunciation practice, and Chinese text processing.

## Core Features

- **Character Learning System**

  - Stroke order visualization
  - Character breakdown analysis
  - Radical learning components
  - Traditional/Simplified character support

- **Pronunciation Tools**

  - Pinyin display and practice
  - Tone recognition and practice
  - Audio recording capabilities
  - Speech analysis tools

- **Adapted Reading Features**

  - Chinese text rendering optimization
  - Character-based progress tracking
  - Chinese-specific exercise types
  - Adaptive difficulty assessment

- **Educational Management**
  - Classroom management system
  - Student progress tracking
  - Assignment creation and grading
  - Performance analytics

## Technical Architecture

### Frontend

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui component library
- Framer Motion for animations
- Specialized Chinese text processing libraries

### Backend

- PostgreSQL database with Unicode support
- Prisma ORM
- Firebase Authentication
- Google Cloud Run
- Cloud Storage for media assets

### Chinese Language Processing

- HanziWriter for stroke animations
- chinese-tokenizer for text segmentation
- hanzi-writer-data for character data
- pinyin-utils for pronunciation
- Custom font loading optimization
- Canvas-based character writing system

### Infrastructure

- CDN configuration for Chinese fonts
- Character data caching
- Audio processing optimization
- Full-text search adaptation for Chinese

## Project Structure

```
/
├── app/                    # Next.js 14 App Router
│   ├── [locale]/          # Internationalization
│   ├── (admin)/           # Administrative interface
│   ├── (auth)/            # Authentication
│   ├── (student)/         # Student features
│   └── (teacher)/         # Teacher features
│
├── components/
│   ├── article/           # Chinese text support
│   ├── audio/             # Pronunciation features
│   ├── character/         # Chinese-specific components
│   └── pronunciation/     # Tone and pinyin practice
│
└── api/                   # API Routes
    └── v1/
        ├── auth/          # Authentication
        ├── classroom/     # Class management
        └── character/     # Character-specific endpoints
```

## Security and Performance

- Robust authentication system
- Role-based access control
- Input sanitization for Chinese text
- XSS prevention
- Performance optimization for character rendering
- Audio processing latency management
- Efficient caching strategies

## Monitoring and Analytics

- Character learning progress tracking
- Pronunciation accuracy metrics
- Reading comprehension analytics
- System performance monitoring
- Font loading and rendering metrics
- Error tracking for Chinese-specific features

---

Part of the Reading Advantage Thailand organization
