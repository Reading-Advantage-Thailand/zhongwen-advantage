# Zhongwen Advantage Project Roadmap

## Primary Goal

Maximize direct import of Reading Advantage's proven codebase, modifying components only where necessary for Chinese language support.

## Detailed Step-by-Step Plan for Imports & Adaptations

1. **Identify the Import Target**

   1. Determine whether the target is a **component**, **function**, or **page/route** from the Reading Advantage codebase.
   2. Confirm if the target will need **direct import** (no modifications required) or **Chinese-specific adaptation** (e.g., text rendering, input handling).

2. **Create or Update Task Documentation**

   1. **Create a new issue** (via `./scripts/create-task-issue.ts`) using the appropriate template (**import**, **feature**, or **bug**).
   2. **Document the objectives** of the import (e.g., “Import user-signin-form component”).
   3. **Link the issue** to relevant sections in `projectRoadmap.md` or `currentTask.md`, noting if this relates to a milestone, adaptation, or direct import.

3. **Set Up Test-Driven Development (TDD)**

   1. **Write initial test scaffolding** in your test directories (`__tests__` or `test/` under `./src`).
   2. If the component or function does not yet exist in the target codebase, create a test file (e.g., `user-signin-form.test.tsx`) containing **placeholder tests** that **initially fail**.
   3. **List out critical test scenarios**:
      - **For Direct Imports**: Focus on verifying the existing functionality works in the new environment (props, rendering, states).
      - **For Chinese Adaptations**: Include tests for character rendering, pinyin generation, or any feature that might affect the standard logic.

4. **Import Phase**

   1. **Copy Source Files**:
      - Move the file(s) from `./ra-source/web/[components|utils|hooks|app]` to the corresponding folder in `./src/[components|lib|hooks|app]`.
      - Maintain the original file structure as much as possible (e.g., keep subfolder hierarchy consistent).
   2. **Update Imports & References**:
      - Replace any references to `@/ra-source/...` or RA-specific config with the Zhongwen Advantage equivalents (`@/src/...`).
      - Validate that all required dependencies exist in `package.json`; if not, add them and update `techStack.md` as needed.

5. **Initial Test Execution**

   1. **Run Tests**: Execute the test suite (e.g., `yarn test` or `npm run test`).
   2. **Review Failures**: Expect failing tests where additional Chinese-specific logic or environment differences appear.
   3. **Fix Basic Issues**: Resolve immediate syntax errors or reference mismatches revealed by failing tests.

6. **Adaptation Phase (If Required)**

   1. **Chinese Localization & Features**:
      - Integrate libraries like `chinese-tokenizer`, `pinyin-utils`, or custom solutions listed in `techStack.md`.
      - Adjust UI to handle Chinese text fields, character display, or custom input validations.
   2. **Refactor & Enhance**:
      - Update function logic to accommodate character-based processing.
      - Incorporate additional props or states for Chinese rendering (e.g., pinyin toggles, stroke order data).
   3. **Test-Specific Adaptations**:
      - Include tests for Chinese text input (e.g., verifying correct segmentation).
      - Validate accessibility for Chinese content (e.g., ARIA labels for non-Latin characters).

7. **Secondary Test Execution**

   1. **Re-run Tests**: Once adaptation is done, confirm the previously failing tests pass.
   2. **Add Edge-Case Tests**:
      - Large paragraphs of Chinese text.
      - Mixed Chinese and English input.
      - Uncommon or archaic Chinese characters.
   3. **Performance Check**: If relevant, run performance tests to ensure that character rendering or new dependencies do not degrade performance.

8. **Documentation & Integration**

   1. **Update `projectRoadmap.md`**: Mark tasks as complete or note any changes in scope or technology.
   2. **Revise `currentTask.md`**: Reflect the final status of the import/adaptation.
   3. **Adjust `codebaseSummary.md`**: Note any new file paths, dependencies, or structural changes introduced.
   4. **Commit & Push**: Follow commit guidelines (atomic commits, reference the issue). Open a Pull Request for review.

9. **Code Review & Finalization**

   1. **Review**: Use peer/LLM review to spot missed edge cases or optimization issues.
   2. **Address Feedback**: Make required revisions, ensuring tests remain green.
   3. **Merge & Close**: Merge the PR into the main branch, close the GitHub issue, and **update `projectRoadmap.md`** with the completion details.

10. **Deployment & Monitoring**
11. **Staging Deployment**: Deploy to a staging environment (on Google Cloud Run) to verify Chinese fonts, layout, and resource usage.
12. **Production Deployment**: Once validated, push to production.
13. **Post-Deployment Checks**: Monitor performance, gather user feedback, and update metrics (e.g., test coverage, load time).

---

### Example Workflow Summary

1. **Create Issue** via `create-task-issue.ts`: _“Import & Adapt: article-content.tsx for Chinese”_
2. **Set up TDD** by writing failing tests for Chinese text rendering.
3. **Import** the RA article-content.tsx into `./src/components/article/article-content.tsx`.
4. **Run Tests** to confirm initial failures.
5. **Adapt** the code with `chinese-tokenizer`, add pinyin toggles, and handle strokes if needed.
6. **Refine Tests** until they pass successfully.
7. **Document** changes in the roadmap, codebase summary, and current task.
8. **Open PR** for review.
9. **Merge** and mark the issue as resolved.
10. **Deploy** and monitor performance in production.

### 1. Direct Imports (No Modification Needed)

- [x] Navigation Components _(Completed - moved to Completed Tasks)_

- [ ] User Components

  - [x] Import user-signin-form.tsx (Issue #2)
  - [x] Import user-signup-form.tsx (Issue #2)
  - [x] Import user-reset-pass-form.tsx (Issue #2)
  - [x] Import user-account-nav.tsx (Issue #3)
  - [x] Import user-avatar.tsx (Issue #3)
  - [ ] Import change-username-form.tsx (Issue #3)
      - Source: ra-source/web/components/user/change-username-form.tsx
      - Status: In Progress - Adding validation
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

### Internationalization System

- [x] Import i18n configuration and setup
  - Imported locale-config.ts with multi-language support (en, th, cn, tw, vi)
  - Set up next-international middleware
  - Copied all translation files
  - Configured locale detection and routing
  - Added role-based redirects
  - Integrated with authentication system
  - Implemented main page translations
  - Set up [locale] directory structure
  - Added translation keys for feature lists
  - Configured language preference persistence

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
