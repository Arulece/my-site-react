# Quick Reference - Utility Classes

## Typography

### Headings
```jsx
<h1 className="heading heading--h1">Page Title</h1>
<h2 className="heading heading--h2">Section Title</h2>
<h3 className="heading heading--h3">Subsection</h3>
<h4 className="heading heading--h4">Heading Level 4</h4>
<h5 className="heading heading--h5">Heading Level 5</h5>
<h6 className="heading heading--h6">Heading Level 6</h6>
```

### Body Text
```jsx
<p className="text text--body">Regular paragraph text</p>
<p className="text text--body-secondary">Secondary text color</p>
<p className="text text--lead">Large intro text</p>
<p className="text text--small">Smaller text</p>
<p className="text text--caption">Caption or fine print</p>
<p className="text text--muted">Muted/disabled appearance</p>
<p className="text text--light">Light text on dark backgrounds</p>
```

### Font Weights
```jsx
<span className="font-weight--light">Light weight</span>
<span className="font-weight--normal">Normal weight</span>
<span className="font-weight--medium">Medium weight</span>
<span className="font-weight--semibold">Semibold weight</span>
<span className="font-weight--bold">Bold weight</span>
```

## Buttons

### Color Variants
```jsx
<button className="btn btn--primary">Primary Button</button>
<button className="btn btn--secondary">Secondary Button</button>
<button className="btn btn--tertiary">Tertiary Button</button>
<button className="btn btn--danger">Delete Button</button>
<button className="btn btn--success">Confirm Button</button>
```

### Sizes
```jsx
<button className="btn btn--primary btn--sm">Small Button</button>
<button className="btn btn--primary btn--md">Medium Button</button>
<button className="btn btn--primary btn--lg">Large Button</button>
```

### Special States
```jsx
<button className="btn btn--primary btn--full">Full Width Button</button>
<button className="btn btn--primary" disabled>Disabled Button</button>
```

### Combined Examples
```jsx
<button className="btn btn--primary btn--lg">Large Primary</button>
<button className="btn btn--secondary btn--sm">Small Secondary</button>
<button className="btn btn--danger btn--full">Full Width Danger</button>
```

## Form Elements

### Basic Input
```jsx
<div className="form-group">
  <label className="label" htmlFor="username">Username</label>
  <input 
    className="input" 
    id="username"
    type="text" 
    placeholder="Enter username"
  />
</div>
```

### Textarea
```jsx
<div className="form-group">
  <label className="label" htmlFor="message">Message</label>
  <textarea 
    className="textarea" 
    id="message"
    placeholder="Enter your message"
  />
</div>
```

### Select
```jsx
<div className="form-group">
  <label className="label" htmlFor="country">Country</label>
  <select className="select" id="country">
    <option>Select a country</option>
    <option>USA</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>
```

### With Error State
```jsx
<div className="form-group">
  <label className="label" htmlFor="email">Email</label>
  <input 
    className="input input--error" 
    id="email"
    type="email"
  />
  <div className="input-error-message">Please enter a valid email</div>
</div>
```

### With Helper Text
```jsx
<div className="form-group">
  <label className="label" htmlFor="password">Password</label>
  <input 
    className="input" 
    id="password"
    type="password"
  />
  <div className="input-hint">Minimum 8 characters required</div>
</div>
```

### Disabled Input
```jsx
<div className="form-group">
  <label className="label" htmlFor="readonly">Read Only</label>
  <input 
    className="input" 
    id="readonly"
    type="text"
    disabled
    value="This is disabled"
  />
</div>
```

## Form Layout Patterns

### Two-Column Layout
```jsx
<div className="contact__row contact__row--split">
  <div className="contact__field">
    <label className="label">First Name</label>
    <input className="input" type="text" />
  </div>
  <div className="contact__field">
    <label className="label">Last Name</label>
    <input className="input" type="text" />
  </div>
</div>
```

### Full Form with Validation
```jsx
<form className="contact__form">
  <div className="form-group">
    <label className="label" htmlFor="name">Name</label>
    <input 
      className="input input--error" 
      id="name"
      type="text"
    />
    <div className="input-error-message">Name is required</div>
  </div>

  <div className="form-group">
    <label className="label" htmlFor="subject">Subject</label>
    <input className="input" id="subject" type="text" />
    <div className="input-hint">Brief description of your inquiry</div>
  </div>

  <div className="form-group">
    <label className="label" htmlFor="message">Message</label>
    <textarea className="textarea" id="message" />
  </div>

  <div className="contact__actions">
    <button type="submit" className="btn btn--primary btn--lg">
      Send Message
    </button>
    <button type="reset" className="btn btn--secondary">
      Clear Form
    </button>
  </div>
</form>
```

## Color Usage in SCSS

### In Component SCSS Files
```scss
@use '../../styles/colors';
@use '../../styles/variables';

.my-component {
  background-color: colors.$color-primary;
  color: colors.$color-text-light;
  border: 1px solid colors.$color-border;
  padding: variables.$space-md;
}
```

### Available Color Categories
```scss
// Primary
colors.$color-primary
colors.$color-primary-dark
colors.$color-primary-light

// Text
colors.$color-text
colors.$color-text-secondary
colors.$color-text-light
colors.$color-text-dark

// Background
colors.$color-background
colors.$color-surface
colors.$color-surface-secondary

// Status
colors.$color-success
colors.$color-error
colors.$color-warning
colors.$color-info

// Semantic
colors.$color-border
colors.$color-overlay-dark
colors.$color-overlay-light
```

## Responsive Design

### Using the respond-md Mixin
```scss
@use '../../styles/mixins';

.my-element {
  font-size: 1rem;
  padding: 0.5rem;

  @include mixins.respond-md {
    font-size: 1.5rem;
    padding: 1rem;
  }
}
```

### Breakpoints Available
```scss
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
```

## Common Combinations

### Call-to-Action Button
```jsx
<button className="btn btn--primary btn--lg">
  <span className="font-weight--bold">Get Started</span>
</button>
```

### Section Header
```jsx
<section>
  <h2 className="heading heading--h2">Featured Features</h2>
  <p className="text text--lead">Discover what makes us special</p>
</section>
```

### Card with Title and Description
```jsx
<div className="card">
  <h3 className="heading heading--h3">Card Title</h3>
  <p className="text text--body-secondary">
    Card description with secondary text color
  </p>
  <button className="btn btn--primary btn--sm">Learn More</button>
</div>
```

### Error Alert
```jsx
<div className="contact__success">
  <p className="text text--small font-weight--medium">
    Error: Please fill in all required fields
  </p>
</div>
```

## Accessibility Features

### Screen Reader Text
```jsx
<button className="btn btn--primary">
  <span className="sr-only">Toggle navigation menu</span>
  <svg>/* icon */</svg>
</button>
```

### Form Label Association
```jsx
<div className="form-group">
  <label className="label" htmlFor="email">Email</label>
  <input 
    className="input" 
    id="email"
    type="email"
  />
</div>
```

## Tips & Tricks

1. **Always use semantic buttons:**
   ```jsx
   <button type="submit" className="btn btn--primary">Submit</button>
   ```

2. **Combine modifiers for flexibility:**
   ```jsx
   <button className="btn btn--secondary btn--lg btn--full">
     Big Secondary Button
   </button>
   ```

3. **Use input-hint for better UX:**
   ```jsx
   <div className="form-group">
     <label className="label">Password</label>
     <input className="input" type="password" />
     <div className="input-hint">
       At least 8 characters with numbers and symbols
     </div>
   </div>
   ```

4. **Stack text classes for emphasis:**
   ```jsx
   <p className="text text--lead font-weight--bold">
     Important announcement
   </p>
   ```

5. **Responsive text sizes:**
   Use heading modifiers (h1-h6) instead of custom font sizes for consistency
   ```jsx
   <h1 className="heading heading--h1">This is responsive</h1>
   ```
