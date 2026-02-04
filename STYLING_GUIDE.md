# Styling Guide

This document outlines the CSS class naming conventions and reusable utility classes available in this project.

## Architecture Overview

The styling system is organized into modular SCSS files:

- **`_colors.scss`** - All color variables and semantic color aliases
- **`_variables.scss`** - Typography, spacing, layout, and breakpoint variables
- **`_mixins.scss`** - Reusable SCSS mixins and utilities
- **`main.scss`** - Global styles and utility class definitions

## Color System

### Primary Colors
- `$color-primary` - Primary action color (#0f766e)
- `$color-primary-dark` - Darker variant for hover/active states
- `$color-primary-light` - Lighter variant for backgrounds

### Semantic Colors
- **Text Colors:**
  - `$color-text` - Primary text color
  - `$color-text-secondary` - Secondary/muted text
  - `$color-text-light` - Light text (for dark backgrounds)
  - `$color-text-dark` - Dark text (for light backgrounds)

- **Background Colors:**
  - `$color-background` - Main app background
  - `$color-surface` - Card/surface background
  - `$color-surface-secondary` - Secondary surface

- **Status Colors:**
  - `$color-success` / `$color-success-bg` / `$color-success-border`
  - `$color-error` / `$color-error-bg` / `$color-error-border`
  - `$color-warning` / `$color-info`

### Importing Colors
In any SCSS file, import and use colors:
```scss
@use '../../styles/colors';

.my-element {
  background-color: colors.$color-primary;
  color: colors.$color-text-light;
}
```

## Typography System

### Font Sizes
Predefined sizes for consistent typography:
- `$font-size-xs` (0.75rem)
- `$font-size-sm` (0.875rem)
- `$font-size-base` (1rem)
- `$font-size-lg` (1.125rem)
- `$font-size-xl` (1.25rem)
- `$font-size-2xl` (1.5rem)
- `$font-size-3xl` (1.875rem)
- `$font-size-4xl` (2.25rem)

### Font Weights
- `$font-weight-light` (300)
- `$font-weight-normal` (400)
- `$font-weight-medium` (500)
- `$font-weight-semibold` (600)
- `$font-weight-bold` (700)

### Line Heights
- `$line-height-tight` (1.2)
- `$line-height-normal` (1.5)
- `$line-height-relaxed` (1.625)
- `$line-height-loose` (2)

### Typography Utility Classes

#### Headings
Use `.heading` with modifiers for semantic heading styles:

```html
<h1 class="heading heading--h1">Main Heading</h1>
<h2 class="heading heading--h2">Subheading</h2>
<h3 class="heading heading--h3">Section Title</h3>
<h4 class="heading heading--h4">Subsection</h4>
<h5 class="heading heading--h5">Minor Heading</h5>
<h6 class="heading heading--h6">Small Heading</h6>
```

**Features:**
- Automatic responsive sizing for h1, h2
- Proper line-height and letter-spacing
- Margin reset (margin: 0)

#### Body Text
Use `.text` with modifiers for body text variations:

```html
<p class="text text--body">Default body text</p>
<p class="text text--body-secondary">Secondary text</p>
<p class="text text--lead">Lead/intro text (larger)</p>
<p class="text text--small">Small text</p>
<p class="text text--caption">Caption text</p>
<p class="text text--muted">Muted/disabled text</p>
<p class="text text--light">Light text (for dark backgrounds)</p>
```

#### Font Weight Utilities
Apply font weights without changing size:

```html
<span class="font-weight--light">Light text</span>
<span class="font-weight--normal">Normal text</span>
<span class="font-weight--medium">Medium text</span>
<span class="font-weight--semibold">Semibold text</span>
<span class="font-weight--bold">Bold text</span>
```

## Button System

Use the `.btn` class as the base with modifiers for variants and sizes.

### Button Variants (Color)

```html
<!-- Primary Button (default) -->
<button class="btn btn--primary">Click me</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">Secondary</button>

<!-- Tertiary Button -->
<button class="btn btn--tertiary">Tertiary</button>

<!-- Danger Button -->
<button class="btn btn--danger">Delete</button>

<!-- Success Button -->
<button class="btn btn--success">Confirm</button>
```

### Button Sizes

```html
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary btn--md">Medium (default)</button>
<button class="btn btn--primary btn--lg">Large</button>
```

### Button States

```html
<!-- Normal, hover, focus, and active states are automatic -->
<button class="btn btn--primary">Enabled</button>

<!-- Disabled state -->
<button class="btn btn--primary" disabled>Disabled</button>

<!-- Full width -->
<button class="btn btn--primary btn--full">Full Width Button</button>
```

**Features:**
- Automatic hover/focus/active states
- Box shadows and transforms
- Disabled state with reduced opacity
- Focus outline for accessibility

## Form Input System

### Form Groups
Use `.form-group` to wrap inputs with proper spacing:

```html
<div class="form-group">
  <label class="label" for="username">Username</label>
  <input class="input" type="text" id="username" placeholder="Enter username">
</div>
```

### Input Types

#### Text Input
```html
<input class="input" type="text" placeholder="Enter text">
<input class="input input--error" type="text" placeholder="Error state">
<input class="input" type="text" disabled placeholder="Disabled">
```

#### Textarea
```html
<textarea class="textarea" placeholder="Enter your message"></textarea>
<textarea class="textarea textarea--error">Error message</textarea>
```

#### Select
```html
<select class="select">
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

#### Password Input
```html
<input class="input" type="password" placeholder="Enter password">
```

### Input Variants

#### Normal State
```html
<input class="input" type="text" placeholder="Normal state">
```

#### Focus State
Automatic on focus with visual feedback:
- Border color changes to primary
- Box shadow applied
- Outline for accessibility

#### Error State
```html
<input class="input input--error" type="text">
<textarea class="textarea textarea--error"></textarea>
<select class="select select--error"></select>

<!-- Error message below input -->
<div class="input-error-message">This field is required</div>
```

#### Disabled State
```html
<input class="input" type="text" disabled>
<textarea class="textarea" disabled></textarea>
```

#### Hint/Helper Text
```html
<div class="form-group">
  <label class="label">Email</label>
  <input class="input" type="email">
  <div class="input-hint">We'll never share your email</div>
</div>
```

### Form Layout

For split form layouts (side-by-side):
```html
<div class="contact__row contact__row--split">
  <div class="contact__field">
    <label class="label">First Name</label>
    <input class="input" type="text">
  </div>
  <div class="contact__field">
    <label class="label">Last Name</label>
    <input class="input" type="text">
  </div>
</div>
```

## Spacing System

Predefined spacing scale for consistency:
- `$space-xs` (0.25rem)
- `$space-sm` (0.5rem)
- `$space-md` (1rem)
- `$space-lg` (1.5rem)
- `$space-xl` (2rem)
- `$space-2xl` (3rem)

Use in your SCSS:
```scss
@use 'styles/variables';

.my-element {
  margin: variables.$space-md;
  padding: variables.$space-lg;
}
```

## Layout & Responsive Design

### Breakpoints
```scss
$breakpoint-sm: 640px;   // Small devices
$breakpoint-md: 768px;   // Medium devices (tablets)
$breakpoint-lg: 1024px;  // Large devices
$breakpoint-xl: 1280px;  // Extra large devices
```

### Responsive Mixin
```scss
@use '../../styles/mixins';

.my-element {
  font-size: 1rem;
  
  @include mixins.respond-md {
    font-size: 1.5rem;
  }
}
```

## Mixins

### Button Reset
Reset browser default button styles:
```scss
@include mixins.button-reset;
```

### Flexbox Utilities
```scss
@include mixins.flex-center;        // Center items both ways
@include mixins.flex-center-between; // Space-between layout
```

## Utility Classes

### Screen Reader Only
Hide text visually but keep it accessible to screen readers:
```html
<button>
  <span class="sr-only">Toggle navigation</span>
  <svg>...</svg>
</button>
```

## Naming Convention

The project uses a **BEM-inspired naming convention** with semantic class names:

- **Block:** `.banner`, `.header`, `.contact__form`
- **Element:** `.banner__slide`, `.header__nav`, `.contact__label`
- **Modifier:** `.btn--primary`, `.btn--lg`, `.input--error`

Examples:
```html
<!-- Block -->
<div class="banner">
  <!-- Element -->
  <div class="banner__slides">
    <!-- Element with modifier -->
    <div class="banner__slide banner__slide--active"></div>
  </div>
</div>

<!-- Utility class -->
<button class="btn btn--primary btn--lg">Button</button>
```

## Best Practices

1. **Use color variables** - Never hardcode colors. Always use `colors.$color-*` or `variables.$color-*`
2. **Use spacing variables** - Maintain consistency with the spacing scale
3. **Use font variables** - Leverage predefined sizes, weights, and line-heights
4. **Responsive first** - Design mobile-first, use `respond-md` for larger screens
5. **Semantic markup** - Use proper HTML elements (buttons, inputs, labels, headings)
6. **Accessibility** - Use `.sr-only` for hidden but accessible text, proper labels for inputs
7. **Component structure** - BEM naming helps organize styles by component

## Examples

### Complete Form Example
```html
<form class="contact__form">
  <div class="form-group">
    <label class="label" for="email">Email Address</label>
    <input 
      class="input" 
      type="email" 
      id="email" 
      placeholder="you@example.com"
      required
    >
    <div class="input-hint">Required field</div>
  </div>

  <div class="form-group">
    <label class="label" for="message">Message</label>
    <textarea 
      class="textarea" 
      id="message" 
      placeholder="Your message..."
    ></textarea>
  </div>

  <button type="submit" class="btn btn--primary btn--lg">Send Message</button>
</form>
```

### Button Group Example
```html
<div style="display: flex; gap: 1rem;">
  <button class="btn btn--primary">Save</button>
  <button class="btn btn--secondary">Cancel</button>
  <button class="btn btn--tertiary">Clear</button>
</div>
```

### Typography Example
```html
<section>
  <h2 class="heading heading--h2">Featured Section</h2>
  <p class="text text--lead">This is the introduction paragraph with larger text.</p>
  <p class="text text--body">This is regular body text.</p>
  <p class="text text--caption">Caption or fine print text.</p>
</section>
```

## Extending the System

### Adding New Colors
1. Add the color to `_colors.scss`
2. If it's a semantic color used globally, add an alias in `_variables.scss`
3. Use it throughout the app

### Adding New Component Styles
1. Create styles in component-specific SCSS file (e.g., `MyComponent.scss`)
2. Import required partials: `@use '../../styles/variables'`, `@use '../../styles/colors'`, `@use '../../styles/mixins'`
3. Use BEM naming for component-specific classes
4. Use variables for colors, spacing, and typography

## Compatibility

All component-level SCSS files have been updated to:
- Import the `colors` module
- Replace hardcoded color values with variables
- Maintain existing UI behavior and appearance

No breaking changes have been introduced. Existing functionality remains unchanged.
