# Database Schema Documentation

## Core Models (Imported from Reading Advantage)

### Authentication & User Management

```prisma
model User {
  id                   String    @id @default(cuid())
  name                 String?
  email                String    @unique
  emailVerified        DateTime?
  image                String?
  role                 Role      @default(GUEST)
  xp                   Int       @default(0)
  level               Int       @default(1)
  hskLevel            String?   @default("") // Changed from cefrLevel to hskLevel
  isCompletedLevelTest Boolean?  @default(false)

  // Character learning progress
  knownCharacters     CharacterProgress[]
  knownRadicals       RadicalProgress[]

  trial     Boolean  @default(true)
  trialEnd  DateTime @default(now())
  license   License? @relation(fields: [licenseId], references: [id])
  licenseId String?

  createdAt     DateTime        @default(now())
  updatedAt     DateTime        @updatedAt
  accounts      Account[]
  Authenticator Authenticator[]
  sessions      Session[]
  activityLogs  ActivityLog[]
}

// Keep existing Account, Session, VerificationToken, Authenticator, License models unchanged
```

### Content Models

```prisma
model Article {
  id              String   @id @default(cuid())
  title           String
  titlePinyin     String   // Added for Chinese pronunciation
  summary         String
  summaryPinyin   String   // Added for Chinese pronunciation
  passage         String
  passagePinyin   String   // Added for Chinese pronunciation
  content         String   // JSON content including character data
  authorId        String
  hskLevel        Int      // Changed from CEFR to HSK level
  characterCount  Int      // Added for text complexity measurement
  newCharacters   String[] // Array of new characters introduced
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  multipleChoiceQuestions MultipleChoiceQuestion[]
  shortAnswerQuestions    ShortAnswerQuestion[]
  longAnswerQuestions     LongAnswerQuestion[]
}

// Keep existing question models with Chinese support
model MultipleChoiceQuestion {
  id        String   @id @default(cuid())
  question  String
  questionPinyin String // Added for Chinese pronunciation
  options   String[]
  optionsPinyin String[] // Added for Chinese pronunciation
  answer    String
  articleId String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  article Article @relation(fields: [articleId], references: [id])
}

// Similar pinyin additions for ShortAnswerQuestion and LongAnswerQuestion models
```

## New Chinese-Specific Models

### Character System

```prisma
model Character {
  id            String   @id @default(cuid())
  character     String   @unique
  pinyin        String[]  // Array for multiple pronunciations
  definitions   String[]  // Array of English definitions
  hskLevel      Int
  strokeCount   Int
  strokeOrder   String   // JSON array of stroke data
  radical       Radical  @relation(fields: [radicalId], references: [id])
  radicalId     String
  components    String[] // Array of component characters
  examples      String[] // Example words using this character
  mnemonics     String?  // Memory aids
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  // Relations
  userProgress  CharacterProgress[]
  articles      Article[]
}

model Radical {
  id          String      @id @default(cuid())
  radical     String      @unique
  meaning     String
  strokeCount Int
  characters  Character[]
  userProgress RadicalProgress[]
}

model CharacterProgress {
  id          String    @id @default(cuid())
  userId      String
  characterId String
  strength    Int       @default(0) // Learning strength 0-100
  lastReviewed DateTime @default(now())
  reviewCount Int       @default(0)
  mistakes    Int       @default(0)

  user      User      @relation(fields: [userId], references: [id])
  character Character @relation(fields: [characterId], references: [id])

  @@unique([userId, characterId])
}

model RadicalProgress {
  id        String    @id @default(cuid())
  userId    String
  radicalId String
  strength  Int       @default(0)
  learned   Boolean   @default(false)

  user    User    @relation(fields: [userId], references: [id])
  radical Radical @relation(fields: [radicalId], references: [id])

  @@unique([userId, radicalId])
}
```

### Activity Tracking

```prisma
enum ActivityLogAction {
  ANSWER_LANGUAGE_TEST
  LEARN_CHARACTER      // New
  REVIEW_CHARACTER     // New
  COMPLETE_ARTICLE     // New
  PRACTICE_WRITING     // New
  PRACTICE_PRONUNCIATION // New
}

model ActivityLog {
  id          String            @id @default(cuid())
  userId      String
  action      ActivityLogAction
  xp          Int              // gained xp
  level       Int
  characterId String?          // Optional relation to Character
  articleId   String?          // Optional relation to Article
  timestamp   DateTime         @default(now())

  user      User      @relation(fields: [userId], references: [id])
  character Character? @relation(fields: [characterId], references: [id])
  article   Article?  @relation(fields: [articleId], references: [id])
}
```

### HSK Level System

```prisma
enum HSKLevel {
  HSK1
  HSK2
  HSK3
  HSK4
  HSK5
  HSK6
  HSK7_9
}

model HSKTest {
  id        String    @id @default(cuid())
  level     HSKLevel
  points    Int
  questions HSKTestQuestion[]
}

model HSKTestQuestion {
  id        String   @id @default(cuid())
  question  String
  questionPinyin String
  options   String[]
  optionsPinyin String[]
  answer    String
  testId    String

  test HSKTest @relation(fields: [testId], references: [id])
}
```

## Schema Migration Notes

1. **Data Types**

   - All text fields support UTF-8 for Chinese characters
   - Arrays used for multiple pronunciations and definitions
   - JSON fields for complex data structures (stroke order, content)

2. **Indexing Strategy**

   - Character lookups optimized with unique indexes
   - User progress tracking indexed for efficient queries
   - Full-text search capabilities for Chinese content

3. **Relations**

   - Maintained existing auth relations
   - Added character-specific progress tracking
   - Linked articles with character data

4. **Performance Considerations**
   - Denormalized pinyin for faster queries
   - Cached character data in content
   - Optimized progress tracking queries
