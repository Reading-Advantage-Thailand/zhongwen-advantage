const { execSync } = require('child_process');

// Function to check if GitHub CLI is installed
function checkGitHubCLI(): boolean {
  try {
    execSync('gh --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Function to create a GitHub issue
async function createTaskIssue(title: string, body: string) {
  if (!checkGitHubCLI()) {
    console.error('GitHub CLI is not installed. Please install it first:');
    console.error('https://cli.github.com/');
    process.exit(1);
  }

  // Add standard workflow reminders to the issue body
  const standardWorkflow = `

# Workflow Checklist

## Starting the Task
- [ ] Review issue details thoroughly
- [ ] Switch to task branch: \`${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}\`
- [ ] Review technical considerations
- [ ] Update project board status

## During Development
- [ ] Follow task breakdown sequence
- [ ] Update currentTask.md progress
- [ ] Document technical decisions
- [ ] Make atomic commits with clear messages

## Completion
- [ ] Verify all tasks complete
- [ ] Documentation updated
- [ ] Testing completed
- [ ] Project board updated
- [ ] Pull request created`;

  const fullBody = body + standardWorkflow;

  try {
    // Create the issue using GitHub CLI
    const command = `gh issue create --title "${title}" --body "${fullBody}"`;
    const result = execSync(command, { encoding: 'utf8' });
    
    // Extract issue number from the created issue URL
    const issueUrl = result.trim();
    const issueNumber = issueUrl.split('/').pop();

    // Create a new branch for the task
    const branchName = `task/${issueNumber}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    execSync(`git checkout -b ${branchName}`);

    console.log(`✓ Created issue: ${issueUrl}`);
    console.log(`✓ Created and switched to branch: ${branchName}`);
    console.log(`\nTo add this issue to the project board:`);
    console.log(`1. Open ${issueUrl}`);
    console.log(`2. Click on "Projects"`);
    console.log(`3. Select "Reading Advantage Thailand #3"\n`);
    
    // Update currentTask.md with issue information
    const taskUpdate = `# Current Task: ${title}\n\nIssue: ${issueUrl}\nProject Board: https://github.com/orgs/Reading-Advantage-Thailand/projects/3\n\n## Objectives\n\n${body}\n\n## Implementation Notes\n\n- Branch: ${branchName}\n- Created: ${new Date().toISOString()}\n\n## Progress\n\n- [ ] Task started\n- [ ] Implementation in progress\n- [ ] Testing completed\n- [ ] Documentation updated\n- [ ] Ready for review\n\n## Technical Considerations\n\n(Add technical considerations as they arise)\n\n## Related Documentation\n\n- [Project Roadmap](./projectRoadmap.md)\n- [Tech Stack](./techStack.md)\n- [Codebase Summary](./codebaseSummary.md)\n`;
    
    execSync(`echo '${taskUpdate}' > cline_docs/currentTask.md`);
    
    return issueUrl;
  } catch (error) {
    console.error('Error creating issue:', error);
    process.exit(1);
  }
}

// If script is run directly
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: ts-node create-task-issue.ts "Issue Title" "Issue Body"');
    process.exit(1);
  }

  const [title, body] = args;
  createTaskIssue(title, body);
}

module.exports = { createTaskIssue };
