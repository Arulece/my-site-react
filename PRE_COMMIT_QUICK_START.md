# Pre-Commit Hook - Developer Guide

## Quick Start

The pre-commit hook is **already installed** when you run `npm install`. No additional setup needed!

## What Happens When You Commit?

```bash
$ git commit -m "Add new feature"

🔍 Running pre-commit checks...

📋 Running ESLint...
✓ Linting passed!

🧪 Running tests...
✓ Tests passed!

✅ All checks passed! Proceeding with commit...
[main abc1234] Add new feature
```

## If Checks Fail

### Linting Failed?
```bash
npm run lint:fix
git add .
git commit -m "Add new feature"
```

### Tests Failed?
```bash
npm test:watch    # Run tests in watch mode
# Fix the failing tests in your editor
git add .
git commit -m "Add new feature"
```

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm test` | Run all tests |
| `npm test:watch` | Run tests in watch mode |
| `npm test:coverage` | View test coverage |

## Emergency Override (Use Sparingly!)

Skip the hook only when necessary:

```bash
git commit --no-verify -m "Emergency hotfix"
```

⚠️ **Note**: This bypasses quality checks. Use only for true emergencies!

## Documentation

For detailed information, see [PRE_COMMIT_HOOK.md](PRE_COMMIT_HOOK.md)
