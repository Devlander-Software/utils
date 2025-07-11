# Conventional Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automatic changelog generation. Follow these guidelines to ensure your commits are properly captured in the changelog.

## Commit Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

| Type | Description | Changelog Section |
|------|-------------|-------------------|
| `feat` | New features | ✅ Features |
| `fix` | Bug fixes | ✅ Bug Fixes |
| `docs` | Documentation changes | ✅ Documentation |
| `style` | Code style changes (formatting, etc.) | ❌ Not included |
| `refactor` | Code refactoring | ❌ Not included |
| `test` | Test changes | ❌ Not included |
| `chore` | Maintenance tasks | ❌ Not included |
| `perf` | Performance improvements | ✅ Performance |
| `ci` | CI/CD changes | ❌ Not included |
| `build` | Build system changes | ❌ Not included |

## Examples

### ✅ Good Examples

```bash
# New feature
git commit -m "feat: add new utility function for data validation"

# Feature with scope
git commit -m "feat(validation): add email validation utility"

# Bug fix
git commit -m "fix: resolve issue with array deduplication"

# Documentation
git commit -m "docs: update README with new examples"

# Performance improvement
git commit -m "perf: optimize object merge function"
```

### ❌ Bad Examples

```bash
# Missing type
git commit -m "new updates"

# Extra parentheses
git commit -m "(fix): update something"

# Wrong format
git commit -m "fix - update something"

# No description
git commit -m "feat:"
```

## Current Issues in This Repository

The following commits are **NOT** being captured in the changelog due to malformed conventional commits:

```bash
# These commits are MISSING from changelog:
6ef0048 (fix): update publish github action to point at start-publish script
76eee64 (fix): update publish github action to point at start-publish script
1c05a58 (fix): use default theme for docs
38da2df (fix): update github test github actiion

# This commit is MISSING from changelog:
bbfeb0c new updates
```

## How to Fix Existing Commits

### Option 1: Amend Recent Commits (if not pushed)

```bash
# Fix the most recent commit
git commit --amend -m "chore: new updates"

# Fix previous commits (interactive rebase)
git rebase -i HEAD~5
# Then change commit messages to proper format
```

### Option 2: Create New Commits (if already pushed)

```bash
# Create new commits with proper conventional format
git commit -m "fix: update publish github action to point at start-publish script"
git commit -m "fix: use default theme for docs"
git commit -m "fix: update github test github action"
git commit -m "chore: new updates"
```

## Using Commitizen (Recommended)

This project has Commitizen configured. Use it for consistent commits:

```bash
# Instead of git commit, use:
yarn commit

# This will prompt you for:
# 1. Type of change
# 2. Scope (optional)
# 3. Description
# 4. Body (optional)
# 5. Breaking changes (optional)
# 6. Issues affected (optional)
```

## Testing Your Commits

To see what would be captured in the changelog:

```bash
# Generate changelog preview
yarn changelog

# Or dry run
npx conventional-changelog --dry-run --preset conventionalcommits
```

## Best Practices

1. **Always use conventional commit format**
2. **Use Commitizen for consistency**
3. **Be descriptive in commit messages**
4. **Use scopes for related changes**
5. **Test changelog generation before releases**

## Current Changelog Status

- ✅ **Working**: Proper conventional commits are captured
- ❌ **Missing**: Malformed commits are ignored
- ✅ **Automatic**: Changelog generates on release
- ✅ **Complete**: All commit types are supported 