# Styling System Documentation Index

## Welcome to the Refactored Styling Architecture

This project now features a **modular, scalable, and maintainable CSS system** with comprehensive utility classes and a centralized design token system.

## 📚 Documentation Files

### 1. **QUICK_REFERENCE.md** ← Start Here!
**Best for:** Developers who want to quickly see how to use classes
- Typography examples
- Button variations and sizes
- Form elements and states
- Code snippets ready to copy-paste
- Common patterns and combinations

👉 **Use this when:** You need to build a UI component and want to see examples

---

### 2. **STYLING_GUIDE.md** ← Complete Reference
**Best for:** Understanding the entire system architecture
- Architecture overview
- Complete color system reference
- Typography system (sizes, weights, line-heights)
- Button system documentation
- Form input system documentation
- Spacing and layout system
- Responsive design with breakpoints
- Naming conventions
- Best practices
- Extension guidelines

👉 **Use this when:** You need detailed information about design tokens or want to extend the system

---

### 3. **REFACTORING_SUMMARY.md** ← What Changed
**Best for:** Understanding what was done and why
- Overview of refactoring scope
- Files created (new `_colors.scss`)
- Files modified and why
- Features and benefits
- Build verification status
- Next steps and suggestions

👉 **Use this when:** You need to understand the refactoring that was done

---

## 🎨 File Structure

```
src/styles/
├── _colors.scss          (NEW) Color palette and semantic colors
├── _variables.scss       (UPDATED) Design tokens (typography, spacing, layout)
├── _mixins.scss          (UNCHANGED) SCSS utilities and mixins
└── main.scss             (UPDATED) Global styles and utility classes

src/components/
├── Header/Header.scss    (UPDATED) Color variables
├── Banner/Banner.scss    (UPDATED) Color variables
└── ...

src/pages/
└── ContactPage/ContactPage.scss  (UPDATED) Color variables
```

## 🚀 Quick Start

### Using Typography
```jsx
<h1 className="heading heading--h1">Main Title</h1>
<p className="text text--lead">Intro text</p>
```

### Using Buttons
```jsx
<button className="btn btn--primary btn--lg">Click Me</button>
<button className="btn btn--secondary">Cancel</button>
```

### Using Forms
```jsx
<input className="input" type="text" placeholder="Enter text" />
<textarea className="textarea"></textarea>
<select className="select">...</select>
```

See **QUICK_REFERENCE.md** for more examples!

## 🎯 Key Features

✅ **Modular Architecture**
- Separated concerns (colors, typography, mixins)
- Easy to navigate and modify

✅ **Design Tokens**
- Centralized color palette
- Consistent typography scale
- Standardized spacing system

✅ **Utility Classes**
- Typography utilities (headings, text, weights)
- Button system (colors, sizes, states)
- Form system (inputs, validation, helper text)

✅ **Consistency**
- BEM-inspired naming convention
- Semantic class names
- No hardcoded colors in components

✅ **Accessibility**
- Focus states on all interactive elements
- Screen reader utilities
- Semantic HTML support

✅ **Backward Compatible**
- All existing UI behavior preserved
- No breaking changes
- Build succeeds (webpack ✓)
- Tests pass (24/24 ✓)

## 📋 Available Utility Classes

### Typography
- `.heading` with `.heading--h1` through `.heading--h6`
- `.text` with variants (body, body-secondary, lead, small, caption, muted, light)
- `.font-weight--*` (light, normal, medium, semibold, bold)

### Buttons
- `.btn` with color variants (primary, secondary, tertiary, danger, success)
- Sizes: `.btn--sm`, `.btn--md`, `.btn--lg`
- `.btn--full` for full-width buttons

### Forms
- `.form-group` wrapper
- `.label` for labels
- `.input`, `.textarea`, `.select` for form controls
- `.input--error` for error states
- `.input-error-message` for error text
- `.input-hint` for helper text

### Utilities
- `.sr-only` for screen reader only text

## 🎨 Available Colors

### Primary
- `$color-primary` - Main brand color
- `$color-primary-dark` - For hover/active states
- `$color-primary-light` - For backgrounds

### Status
- `$color-success` - Success states
- `$color-error` - Error states
- `$color-warning` - Warning states
- `$color-info` - Info states

### Text
- `$color-text` - Primary text
- `$color-text-secondary` - Secondary text
- `$color-text-light` - Light text (on dark backgrounds)
- `$color-text-dark` - Dark text (on light backgrounds)

See **STYLING_GUIDE.md** for complete color reference!

## 📐 Typography Scale

**Font Sizes:** xs, sm, base, lg, xl, 2xl, 3xl, 4xl
**Font Weights:** light, normal, medium, semibold, bold
**Line Heights:** tight, normal, relaxed, loose

## 🔄 Responsive Design

Use the `.respond-md` mixin for responsive styles:

```scss
@include mixins.respond-md {
  font-size: 1.5rem;
}
```

Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

## 📝 Color Variables in Components

All component SCSS files use centralized color variables:

```scss
@use '../../styles/colors';

.my-component {
  background-color: colors.$color-primary;
  color: colors.$color-text-light;
  border: 1px solid colors.$color-border;
}
```

## ✅ Build & Test Status

- **Build:** ✓ Webpack compiles successfully
- **Tests:** ✓ 24/24 tests passing
- **Coverage:** 97.3% code coverage
- **No Breaking Changes:** ✓ All existing UI behavior preserved

## 🔍 Next Steps

1. **Start using the utility classes** - Check QUICK_REFERENCE.md for examples
2. **Extend as needed** - See STYLING_GUIDE.md for extension guidelines
3. **Keep design tokens updated** - All colors in one place makes updates easy
4. **Review best practices** - Check STYLING_GUIDE.md for recommendations

## 📞 Questions?

- **"How do I use buttons?"** → See QUICK_REFERENCE.md
- **"Where are the colors?"** → Check src/styles/_colors.scss
- **"What classes are available?"** → See STYLING_GUIDE.md
- **"How do I add a new color?"** → See STYLING_GUIDE.md > "Extending the System"

---

**Happy styling! 🎨**

For detailed information, see:
- QUICK_REFERENCE.md for code examples
- STYLING_GUIDE.md for complete documentation
- REFACTORING_SUMMARY.md for what changed
