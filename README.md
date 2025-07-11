

# Devlander JavaScript Utilities Collection



<br/>
<img src="https://github.com/Devlander-Software/utils/raw/main/media/images/javascript-utils-devlander-github-header-photo.png" alt="Devlander Utils Header">


<br/>

<a href="https://bit.ly/devlander-discord-invite">
  <img src="https://img.shields.io/badge/Discord-Devlander-%235865F2" alt="Join Devlander on Discord">
</a>

<br/>



<a href="https://www.npmjs.com/package/@devlander/utils">
  <img src="https://img.shields.io/npm/dm/@devlander/utils.svg" alt="npm downloads">
</a>
<br/>

<a href="https://github.com/orgs/Devlander-Software/discussions">
  <img src="https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue" alt="Join the discussion on Github">
</a>
<br/>

<a href="https://bit.ly/devlander-twitch">
  <img src="https://img.shields.io/twitch/status/devlander" alt="Join Devlander on Twitch">
</a>
<br/>

<a href="https://bit.ly/landonwjohnson-on-twitter">
  <img src="https://img.shields.io/twitter/follow/landonwjohnson.svg?style=social&label=Follow" alt="Follow Landon Johnson On Twitter">
</a>
<br/>

<a href="https://bit.ly/landonwjohnson-on-twitter">
  <img src="https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/018d49ad-1c41-4ee7-9a6b-5387db501fcb.svg" alt="Wakatime stats for utils">
</a>

![Netlify Status](https://api.netlify.com/api/v1/badges/60806e06-d614-4a90-8a77-a39f065d65c2/deploy-status)

<br/>
<br/>

<a href="https://github.com/Devlander-Software/utils/coverage/index.html">
See testing results
</a>

<br/>

Enhance your JavaScript projects with the Devlander JavaScript Utils Collection—a meticulously curated set of utility functions to streamline your coding workflow. Join our vibrant community on Discord, engage in discussions on GitHub, and stay updated with our latest streams on Twitch. Boost your project's efficiency today!

---

## 📚 New to contributing? Start here!

If you're new to open source, npm packages, or TypeScript, **please reference the step-by-step Medium articles linked below**. These guides will walk you through everything from Git basics to advanced package publishing, testing, and code style:

- [What is Git? A Complete Beginner's Guide to Version Control and GitHub](https://medium.com/@techwithlandon/what-is-git-a-complete-beginners-guide-to-version-control-and-github-3327797528a5)
- [npm Packages: What They Are, Where They Came From, and When to Use Them](https://medium.com/devlander/npm-packages-what-they-are-where-they-came-from-and-when-to-use-them-7304c411c1c5)
- [How to Plan and Structure Your npm Package for Success](https://medium.com/devlander/how-to-plan-and-structure-your-npm-package-for-success-956991cb6768)
- [How to Build Your First npm Package: Validators](https://medium.com/@techwithlandon/how-to-build-your-first-npm-package-validators-ad7d72d303d2)
- [How to Add TypeScript to Your npm Package](https://medium.com/devlander/how-to-add-typescript-to-your-npm-package-272d013809b9)
- [Testing and Deploying Your npm Package with Jest and Unit Testing](https://medium.com/@techwithlandon/testing-and-deploying-your-npm-package-with-jest-and-unit-testing-ca4acc0af641)
- [Setting Up ESLint and Prettier for Your npm Package](https://medium.com/@techwithlandon/setting-up-eslint-and-prettier-for-your-npm-package-9e5e549f7b3e)

**These articles are highly recommended for all contributors!**

---

## About This Project

The Devlander JavaScript Utils Collection is an evolving library of JavaScript utilities developed by Landon Johnson. These utilities address everyday coding tasks, reducing the need for repetitive code and enhancing productivity. Open to community input for naming and improvements, this project aims to be a go-to resource for developers.

## Utilities Overview

### JSON Utilities

- **`isDeepEqual(obj1, obj2)`**: Deeply compares two objects for equality.
- **`isJson(value)`**: Validates if a value is a legitimate JSON string or object.
- **`mergeObjects(oldObj, newObj)`**: Merges two nested objects into one.

### Filter Utilities

- **`hasItemByLetterAndFilter(array, key, value)`**: Filters various objects based on a specified letter and additional filter criteria.

### Conversion Utilities

- **`abbreviateNumber(value)`**: Abbreviates numbers with appropriate suffixes (k, m, b, t) for readability.

### Timeout Utilities

- **`waitFor(value, timeUnits?: ms | s, logDuration?: boolean)`**: Delays the execution of a function by a specified time.

## Quick Start and Documentation

Dive into our utility functions with ease. Each utility is documented with parameters, return values, and usage examples to get you started quickly. Whether you're merging objects, checking JSON validity, or filtering data, our collection is designed to enhance your development process with minimal effort.

- **Installation**: `npm install @devlander/utils`
- **Usage**: Import utilities as needed in your project. Example usage is provided for each function to illustrate its application.

## Changelog

For a full list of changes, check the [CHANGELOG.md](./CHANGELOG.md) file.

## Engage and Contribute

We welcome contributions, feedback, and suggestions! Join our discussions on GitHub, or connect with us on Discord and Twitter. Your input helps us improve the Devlander JavaScript Utils Collection for the developer community.

**Before contributing, please read the Medium articles above for step-by-step guidance on Git, npm, TypeScript, testing, and code style.**

### [Become a Sponsor!](https://bit.ly/sponsor-landonjohnson-github/)

## 🧪 Cross-Platform Testing

This package includes comprehensive cross-platform testing to ensure compatibility across different environments:

### Automated Testing

- **Unit Tests**: Run with `yarn test`
- **Cross-Platform Tests**: Run with `yarn test:examples`
- **Full Pre-Publish Check**: Run with `yarn prepublishOnly`

### Example Apps

The `/examples` directory contains minimal test apps for each platform:

- **React** (`examples/react/`) - Vite-based React app
- **Next.js** (`examples/nextjs/`) - Next.js app with TypeScript
- **React Native** (`examples/react-native/`) - Expo app
- **Node.js** (`examples/node/`) - Node.js with TypeScript

### How It Works

1. **Build & Pack**: Creates a tarball (exactly like npm would deliver)
2. **Install**: Installs the tarball into each example app
3. **Test**: Runs tests in each environment to verify imports work
4. **Validate**: Ensures your package works in real-world scenarios

This guarantees that your package can be installed and used successfully in React, Next.js, React Native, and Node.js projects.

## 🚀 Release Process

This project uses an automated release process with GitHub Actions. Here's how it works:

### Automatic Release Workflow

1. **Create a new version**: Use one of the release commands:
   ```bash
   # Standard release (with version checking)
   yarn release:patch:check  # 1.0.1 → 1.0.2
   yarn release:minor:check  # 1.0.1 → 1.1.0  
   yarn release:major:check  # 1.0.1 → 2.0.0
   
   # Quick release (no version checking)
   yarn release:patch  # 1.0.1 → 1.0.2
   yarn release:minor  # 1.0.1 → 1.1.0
   yarn release:major  # 1.0.1 → 2.0.0
   ```

2. **What happens automatically**:
   - ✅ Version is incremented in `package.json`
   - ✅ **Version check**: Verifies the version doesn't already exist on npm
   - ✅ Git tag is created and pushed
   - ✅ GitHub Action triggers on tag push
   - ✅ **Smart publishing**: Only publishes if version is new
   - ✅ Changelog is generated from conventional commits
   - ✅ Package is published to npm (if new version)
   - ✅ GitHub release is created with changelog notes

### Manual Release (Alternative)

If you prefer manual control:
```bash
# Generate changelog and create release
yarn release
```

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automatic changelog generation:

- `feat:` - New features
- `fix:` - Bug fixes  
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Maintenance tasks

### How Version Detection Works

The release process uses **dual-layer version checking**:

1. **Local Check** (before pushing tag):
   ```bash
   npm view @devlander/utils@1.0.2 version
   ```
   - If version exists → Stops and shows warning
   - If version is new → Proceeds with tag push

2. **GitHub Action Check** (after tag push):
   - Extracts version from git tag (`v1.0.2` → `1.0.2`)
   - Checks npm registry for existing version
   - Only publishes if version is new
   - Creates GitHub release regardless

### Current Status

- **Latest npm version**: `1.0.0` (published 3 days ago)
- **Current package version**: `1.0.1` (ready for next release)
- **GitHub Actions**: ✅ Configured and working
- **Auto-release**: ✅ Enabled with changelog generation
- **Version checking**: ✅ Smart publishing (only new versions)