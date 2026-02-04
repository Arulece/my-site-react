# Pre-Commit Hook Configuration

## Overview

This project uses **Husky** to automatically run linting and tests before every git commit. This ensures code quality standards are maintained across the team and prevents commits with broken code.

## How It Works

When you run `git commit`, the pre-commit hook automatically:

1. **Runs ESLint** to check code quality
2. **Runs Jest tests** to verify functionality
3. **Blocks the commit** if either check fails
4. **Allows the commit** if all checks pass

## Installation

The pre-commit hook is automatically installed when you run:

```bash
npm install
```

This triggers the `prepare` script which runs `husky install`, setting up all git hooks.

## What Happens During Commit

### ✅ Successful Commit (All Checks Pass)

```
$ git commit -m "Add new feature"

🔍 Running pre-commit checks...

📋 Running ESLint...
✓ Linting passed!

🧪 Running tests...
✓ Tests passed!

✅ All checks passed! Proceeding with commit...
[main abc1234] Add new feature
```

### ❌ Failed Commit (Linting Fails)

```
$ git commit -m "Add new feature"

🔍 Running pre-commit checks...

📋 Running ESLint...
/src/components/Button.jsx
  12:5  error  Unexpected var  no-var

❌ Linting failed! Please fix the errors above.
💡 Tip: Run 'npm run lint:fix' to auto-fix formatting issues.
```

### ❌ Failed Commit (Tests Fail)

```
$ git commit -m "Add new feature"

🔍 Running pre-commit checks...

📋 Running ESLint...
✓ Linting passed!

🧪 Running tests...
FAIL src/components/Button.test.jsx
  ● Button Component › renders button correctly

    expect(received).toBeInTheDocument()

❌ Tests failed! Please fix the failing tests.
💡 Tip: Run 'npm test' to see detailed error messages.
```

## Quick Fixes

### Fix Linting Errors

Auto-fix most linting issues:

```bash
npm run lint:fix
```

Then commit again:

```bash
git commit -m "Add new feature"
```

### Fix Test Failures

Run tests in watch mode to debug:

```bash
npm test:watch
```

Fix the issues, then commit again:

```bash
git commit -m "Add new feature"
```

### Force Commit (Skip Hooks - Not Recommended!)

If you absolutely must bypass the pre-commit hook:

```bash
git commit --no-verify -m "Emergency fix"
```

⚠️ **Use with caution** - this bypasses quality checks!

## Configuration Files

### `.husky/pre-commit`

The main hook script that runs linting and tests. Located in the `.husky/` directory.

**Key features:**
- Colored output for easy readability
- Clear error messages with helpful tips
- Exits with proper status codes

### `package.json`

Contains two new entries:

**1. `prepare` script:**
```json
"prepare": "husky install"
```
Automatically runs when developers install dependencies.

**2. `lint-staged` configuration:**
```json
"lint-staged": {
  "src/**/*.{js,jsx}": "eslint",
  "src/**/*.{js,jsx,scss,css,md,json}": "prettier --write"
}
```
Configures which files are checked (optional, currently not used by default pre-commit).

## Environment Compatibility

The pre-commit hook works consistently across:

- ✅ **macOS** (Intel and Apple Silicon)
- ✅ **Linux** (Ubuntu, Debian, etc.)
- ✅ **Windows** (via Git Bash or WSL)
- ✅ **CI/CD Pipelines** (GitHub Actions, GitLab CI, etc.)

### Platform-Specific Notes

**Windows Users:**
- Use Git Bash or WSL for best compatibility
- Husky works natively with both

**CI/CD Pipelines:**
- Hooks run automatically on cloned repos
- `npm install` triggers `husky install`

## Troubleshooting

### Hook Not Running?

**Problem:** Pre-commit hook doesn't execute

**Solution:**
1. Verify Husky is installed: `npm list husky`
2. Check hook is executable: `ls -la .husky/pre-commit`
3. Reinstall Husky: `npm install && npm run prepare`

### Hook Runs But Tests Are Slow

**Problem:** Commit waits long for full test suite

**Solution:**
- Run full tests before committing: `npm test`
- Or skip hook if you're just committing documentation (not recommended)
- Tests are important for code quality!

### Permission Denied Error

**Problem:** `.husky/pre-commit: Permission denied`

**Solution:**
```bash
chmod +x .husky/pre-commit
```

### Hook Works Locally but Not in CI/CD

**Problem:** Tests pass locally but fail in pipeline

**Solution:**
1. Check Node version matches: `node --version`
2. Clear cache: `npm ci` instead of `npm install`
3. Check environment variables are set

## Project Scripts Used by Hook

The pre-commit hook uses these existing project scripts:

| Command | Script | Purpose |
|---------|--------|---------|
| Linting | `npm run lint` | ESLint code quality check |
| Testing | `npm test` | Jest test suite |

### Additional Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run test:watch` | Run tests in watch mode |
| `npm test:coverage` | Generate coverage report |
| `npm run format` | Format code with Prettier |

## Team Workflow

### For Team Members

1. **Fresh Clone:**
   ```bash
   git clone <repo>
   npm install  # Automatically sets up hooks
   ```

2. **Making Changes:**
   ```bash
   npm start    # Start dev server
   npm test     # Run tests before committing
   git add .
   git commit -m "Your message"  # Hook runs automatically
   ```

3. **If Commit Fails:**
   ```bash
   npm run lint:fix  # Fix linting issues
   npm test          # Fix test failures
   git add .
   git commit -m "Your message"  # Try again
   ```

### For Repository Maintainers

The hook configuration is managed through:

- `.husky/pre-commit` - Hook script
- `package.json` - `prepare` script and `lint-staged` config

To modify the hook behavior, edit `.husky/pre-commit`.

## Advanced Configuration

### Disable Hooks Temporarily

For emergency hotfixes only:

```bash
# Skip all hooks for this commit
git commit --no-verify -m "Emergency fix"

# Or set environment variable
HUSKY=0 git commit -m "Emergency fix"
```

### Run Hook Manually

To test the hook without committing:

```bash
./.husky/pre-commit
```

### Customize Checked File Types

Edit `lint-staged` in `package.json` to add more file types:

```json
"lint-staged": {
  "src/**/*.{js,jsx}": "eslint",
  "src/**/*.{ts,tsx}": "eslint",  // Add TypeScript
  "src/**/*.{scss}": "stylelint",  // Add CSS linting
  "src/**/*.{js,jsx,scss,css,md,json}": "prettier --write"
}
```

## Frequently Asked Questions

**Q: Can I run tests asynchronously?**
A: The current hook runs linting, then tests sequentially. For parallelization, modify `.husky/pre-commit` to run both simultaneously.

**Q: What if I have legitimate uncommitted changes?**
A: The hook only checks staged files. Only stage what you want to commit.

**Q: Does the hook run on pull requests?**
A: No, hooks only run locally. Use CI/CD pipeline (GitHub Actions) for additional checks.

**Q: Can I use different rules per directory?**
A: Yes, ESLint supports `.eslintrc` files in subdirectories for directory-specific rules.

**Q: How do I debug hook failures?**
A: Run the hook manually with `bash -x .husky/pre-commit` for verbose output.

## Best Practices

✅ **DO:**
- Run `npm test` before committing
- Use `npm run lint:fix` to auto-fix issues
- Keep commits focused and atomic
- Review hook output carefully

❌ **DON'T:**
- Use `--no-verify` routinely
- Ignore linting or test failures
- Commit incomplete features just to pass the hook
- Disable the hook permanently

## See Also

- [ESLint Configuration](../eslint.config.js)
- [Jest Configuration](../jest.config.cjs)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Lint-staged Documentation](https://github.com/lint-staged/lint-staged)

## Summary

The pre-commit hook ensures:

✅ Code quality with ESLint
✅ Functionality with Jest tests
✅ Consistent code style
✅ Prevents broken code from being committed
✅ Maintains team standards
✅ Works across all environments

Your commits are now protected by automated quality checks!
