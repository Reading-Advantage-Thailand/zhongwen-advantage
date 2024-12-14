# Zhongwen Advantage Project Roadmap

## Primary Goal

Maximize direct import of Reading Advantage's proven codebase, modifying components only where necessary for Chinese language support.

## Import Strategy

### 1. Direct Imports (No Modification Needed)

- [x] Navigation Components _(Completed - moved to Completed Tasks)_

- [ ] User Components

  - [ ] Import user-signin-form.tsx (Issue #2)
  - [ ] Import user-signup-form.tsx (Issue #2)
  - [ ] Import user-reset-pass-form.tsx (Issue #2)
  - [ ] Import user-account-nav.tsx (Issue #3)
  - [ ] Import user-avatar.tsx (Issue #3)
  - [ ] Import change-username-form.tsx (Issue #3)
  - [ ] Import user-role-management.tsx (Issue #4)

- [ ] System Components

  - [ ] Import active-users.tsx
  - [ ] Import license-usage.tsx
  - [ ] Import system-sidebar-nav.tsx
  - [ ] Import schools-dashboard.tsx

- [ ] Teacher Components
  - [ ] Import archive-class.tsx
  - [ ] Import assign-dialog.tsx
  - [ ] Import class-roster.tsx
  - [ ] Import create-new-class.tsx
  - [ ] Import delete-class.tsx
  - [ ] Import edit-class.tsx
  - [ ] Import my-classes.tsx
  - [ ] Import reports.tsx

### 2. Imports Requiring Chinese Adaptation

- [ ] Article Components

  - [ ] Import & adapt article-actions.tsx for Chinese text
  - [ ] Import & adapt article-card.tsx for character display
  - [ ] Import & adapt article-content.tsx for Chinese rendering
  - [ ] Import & adapt article-footer.tsx
  - [ ] Import & adapt article-records-table.tsx
  - [ ] Import & adapt article-showcase-card.tsx
  - [ ] Import & adapt article-summary.tsx

- [ ] Exercise Components
  - [ ] Import & adapt cloze-test.tsx for Chinese
  - [ ] Import & adapt matching.tsx for characters
  - [ ] Import & adapt order-words.tsx for Chinese
  - [ ] Import & adapt dnd components for Chinese text

### 3. Function Imports

- [ ] Direct Function Imports

  - [ ] Import fetchData utility
  - [ ] Import authentication system
  - [ ] Import session management
  - [ ] Import classroom management
  - [ ] Import file operations
  - [ ] Import tour configuration

- [ ] Functions Needing Adaptation
  - [ ] Import & adapt level calculation for Chinese
  - [ ] Import & adapt text analysis for Chinese
  - [ ] Import & adapt progress tracking for characters

### 4. Page Structure Import

- [ ] Direct Route Group Imports

  - [ ] Import (admin) group structure
  - [ ] Import (auth) group
  - [ ] Import (system) group
  - [ ] Import base layout structure

- [ ] Route Groups Needing Adaptation
  - [ ] Import & adapt (student) group for Chinese content
  - [ ] Import & adapt (teacher) group for Chinese features
  - [ ] Import & adapt [locale] handling for Chinese

### 5. API Route Imports

- [ ] Direct API Imports

  - [ ] Import authentication endpoints
  - [ ] Import user management routes
  - [ ] Import license management
  - [ ] Import classroom management
  - [ ] Import activity tracking

- [ ] API Routes Needing Adaptation
  - [ ] Import & adapt article endpoints for Chinese
  - [ ] Import & adapt exercise endpoints
  - [ ] Import & adapt progress tracking

### 6. New Chinese-Specific Features

- [ ] Character Components

  - [ ] Create stroke order system
  - [ ] Add character breakdown
  - [ ] Implement radical learning

- [ ] Pronunciation Features
  - [ ] Add pinyin support
  - [ ] Create tone practice
  - [ ] Implement audio recording

## Completion Criteria

1. Direct Imports

- [ ] All directly importable components transferred
- [ ] All directly importable functions working
- [ ] All directly importable routes functional

2. Adapted Imports

- [ ] All adapted components working with Chinese
- [ ] All adapted functions handling Chinese text
- [ ] All adapted routes supporting Chinese content

3. New Features

- [ ] Chinese-specific features integrated
- [ ] All systems working together
- [ ] Performance requirements met

## Completed Tasks

### UI Setup and Components

- [x] Set up shadcn/ui
  - Configured Tailwind for shadcn components
  - Added necessary CSS variables
  - Implemented Button component
  - Set up proper TypeScript configurations

### Landing Page Implementation

- [x] Create responsive landing page
  - Hero section with logo
  - Features showcase
  - Statistics display
  - Learning path section
  - Call-to-action sections

### Navigation Components

- [x] Import main-navbar.tsx (renamed to main-nav.tsx)
- [x] Import mobile-navbar.tsx (renamed to mobile-nav.tsx)
- [x] Import sidebar-nav.tsx
- [x] Create navigation index for easy imports
- [x] Set up required dependencies:
  - Icons component with Chinese-specific logo
  - Site configuration
  - Utility functions
  - TypeScript types

### Task Management System

- [x] Create task template and workflow guide (Issue #5)
- [x] Set up issue creation script
- [x] Document task management process
- [x] Create initial user management tasks:
  - Authentication Components (Issue #2)
  - Profile Components (Issue #3)
  - Role Management (Issue #4)
