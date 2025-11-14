# Contributing to MoinLog WMS SaaS Landing Page Template

First off, thank you for considering contributing to this project! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Pledge

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what's best for the community

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**How to submit a good bug report:**

1. **Use a clear and descriptive title**
2. **Provide detailed steps to reproduce**
3. **Describe the expected behavior**
4. **Describe the actual behavior**
5. **Include screenshots if applicable**
6. **Specify your environment:**
   - WordPress version
   - Elementor Pro version
   - PHP version
   - Browser (if relevant)

**Bug Report Template:**
```markdown
**Title**: Brief description of the bug

**Environment:**
- WordPress: 6.x
- Elementor Pro: 3.x
- PHP: 8.x
- Browser: Chrome 118

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
[If applicable]

**Additional Context:**
Any other relevant information
```

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**How to submit a good enhancement suggestion:**

1. **Use a clear and descriptive title**
2. **Provide a detailed description of the enhancement**
3. **Explain why this enhancement would be useful**
4. **Provide examples of how it would work**

**Enhancement Template:**
```markdown
**Title**: Add [feature name]

**Problem:**
What problem does this solve?

**Proposed Solution:**
Detailed description of the enhancement

**Alternatives Considered:**
Other options you've thought about

**Additional Context:**
Screenshots, mockups, or references
```

### 📝 Improving Documentation

Documentation improvements are always welcome!

**Areas that need documentation:**
- Installation guides
- Customization tutorials
- Video tutorials
- Translation of docs to other languages
- Code examples
- Use case documentation

### 🎨 Submitting Template Improvements

**Template contributions can include:**
- New sections
- Alternative color schemes
- Improved responsive behavior
- Performance optimizations
- Accessibility improvements
- New variations of existing sections

## Development Process

### Getting Started

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/WP-Elementor-Theme.git
   cd WP-Elementor-Theme
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

### Making Changes

1. **Make your changes**
   - Follow the style guidelines
   - Test your changes thoroughly
   - Update documentation if needed

2. **Test your changes**
   - Import the modified template in WordPress
   - Test on different screen sizes
   - Test in different browsers
   - Validate JSON structure

3. **Validate JSON**
   ```bash
   python3 -m json.tool templates/saas-landing-page.json > /dev/null
   ```

## Style Guidelines

### JSON Structure

**Follow these conventions:**

1. **Consistent Indentation**: Use 2 spaces
2. **Clear ID naming**: Use descriptive, kebab-case IDs
   ```json
   "id": "hero-section"
   "id": "feature-column-1"
   "id": "testimonial-card-1"
   ```

3. **Logical grouping**: Keep related elements together
4. **Comments**: Add comments in documentation, not in JSON

### Color Scheme

**Stick to the established palette:**
```
Primary:    #1a1a2e (Dark Blue)
Secondary:  #0f3460 (Medium Blue)
Accent:     #16c79a (Turquoise)
Error:      #e74c3c (Red)
```

**When adding new colors:**
- Document them in DESIGN-SYSTEM.md
- Ensure WCAG AA contrast compliance
- Provide use case examples

### Typography

**Font size hierarchy:**
```
H1: 48px (Desktop) → 36px (Tablet) → 28px (Mobile)
H2: 36px (Desktop) → 30px (Tablet) → 24px (Mobile)
H3: 24px (Desktop) → 22px (Tablet) → 20px (Mobile)
Body: 16px (all devices)
```

### Spacing

**Use consistent spacing:**
```
Section padding: 80px (Desktop) → 60px (Tablet) → 40px (Mobile)
Element margins: Multiples of 10px (10, 20, 30, 40, 50)
```

### Icons

**Icon guidelines:**
- Use Font Awesome 5 (Free or Pro)
- Consistent size per use case (see DESIGN-SYSTEM.md)
- Semantic choices (e.g., cloud for cloud features)

## Commit Messages

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code restructuring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

**Good:**
```
feat(hero): add video background option

- Added support for video backgrounds in hero section
- Includes fallback image for mobile devices
- Updated documentation with usage instructions

Closes #123
```

**Good:**
```
fix(testimonials): correct spacing on mobile

Fixed inconsistent padding in testimonial cards on screens < 768px

Fixes #456
```

**Good:**
```
docs(readme): update installation instructions

- Added troubleshooting section
- Improved clarity of step-by-step guide
- Added screenshots for import process
```

**Bad:**
```
fixed stuff
```

**Bad:**
```
update
```

## Pull Request Process

### Before Submitting

1. **Update documentation** for any changed functionality
2. **Test thoroughly** on multiple devices/browsers
3. **Validate JSON** structure
4. **Update CHANGELOG.md** with your changes
5. **Ensure your code follows style guidelines**

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/design improvement
- [ ] Performance optimization

## Testing
Describe how you tested your changes

## Screenshots
[If applicable]

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] JSON validates correctly
- [ ] Tested on multiple browsers
- [ ] Tested responsive behavior
- [ ] CHANGELOG.md updated
```

### Review Process

1. **Automated checks** run automatically
2. **Maintainer review** within 7 days
3. **Feedback addressed** by contributor
4. **Final approval** and merge

### After Your PR is Merged

1. **Pull the latest changes** from main
2. **Delete your feature branch**
   ```bash
   git branch -d feature/your-feature-name
   ```
3. **Celebrate!** 🎉 You're now a contributor!

## Questions?

Feel free to:
- Open an issue for questions
- Join discussions in existing issues
- Reach out to maintainers

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md (coming soon)
- Mentioned in release notes
- Appreciated in the community! ❤️

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to make this template better!** 🚀

Every contribution, no matter how small, helps improve the project for everyone.
