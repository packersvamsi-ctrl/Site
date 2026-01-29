# Responsive Design Quick Reference Guide

## Tailwind Breakpoints Used

```
Mobile First (default)    : 0px - 640px
sm:                       : 640px and up
md:                       : 768px and up
lg:                       : 1024px and up
xl:                       : 1280px and up
2xl:                      : 1536px and up
```

## Common Responsive Patterns

### 1. Responsive Text Sizes
```jsx
// Standard heading
className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"

// Paragraph text
className="text-xs sm:text-sm md:text-base lg:text-lg"

// Small text
className="text-xs sm:text-xs md:text-sm"
```

### 2. Responsive Padding
```jsx
// Container padding
className="px-3 sm:px-4 md:px-6 lg:px-8"

// Section padding
className="py-8 sm:py-10 md:py-12 lg:py-16"

// Card padding
className="p-4 sm:p-6 md:p-8"
```

### 3. Responsive Gaps (Grid/Flex Spacing)
```jsx
className="gap-4 sm:gap-6 md:gap-8 lg:gap-12"
```

### 4. Responsive Grid Layouts
```jsx
// 1 column on mobile, 2 on tablet, 3 on desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

// 2 columns on mobile, 4 on desktop
className="grid grid-cols-2 md:grid-cols-4"

// Footer: 1 col → 2 cols → 3 cols → 5 cols
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
```

### 5. Responsive Icon/Image Sizes
```jsx
// Icon that grows with screen size
className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"

// Logo sizing
className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto"

// Image aspect ratios
className="aspect-video rounded-lg sm:rounded-xl md:rounded-2xl"
```

### 6. Responsive Button Sizing
```jsx
// Button that grows on larger screens
className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base"

// Ensure minimum touch target (44x44px)
className="min-h-11 min-w-11" // Always >= 44px
```

### 7. Responsive Heights
```jsx
// Hero carousel
className="h-48 sm:h-64 md:h-96 lg:h-[550px] xl:h-[700px]"

// Maps
className="h-32 sm:h-40 md:h-48"

// Card heights
className="min-h-full"
```

## Touch Target Sizes (44x44px Minimum)

```jsx
// All interactive elements
className="min-h-11 min-w-11" // 44x44px minimum

// OR use flex with proper sizing
className="flex items-center justify-center h-11 w-11"
```

## Image Responsive Pattern

```jsx
<img
  src={imageUrl}
  alt="Descriptive alt text"
  className="w-full h-full object-cover rounded-lg sm:rounded-xl"
  loading="lazy"
/>
```

## Mobile-Only / Desktop-Only Elements

```jsx
// Show on mobile only
className="sm:hidden md:hidden lg:hidden"

// Hide on mobile, show on desktop
className="hidden sm:flex md:flex lg:flex"

// Show only on desktop
className="hidden lg:block"

// Show only on mobile
className="sm:hidden"
```

## Responsive Borders and Rounding

```jsx
// Responsive border radius
className="rounded-lg sm:rounded-xl md:rounded-2xl"

// Responsive borders
className="border border-l-0 sm:border-l"
```

## Responsive Display

```jsx
// Grid layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Flex direction change
className="flex flex-col sm:flex-row"

// Display change
className="block md:grid lg:flex"
```

## Common Component Patterns

### 1. Hero Section
```jsx
<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
  <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Title
    </h1>
    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
      Description
    </p>
  </div>
</section>
```

### 2. Card Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
  {items.map((item) => (
    <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
      <h3 className="text-base sm:text-lg md:text-xl">{item.title}</h3>
      <p className="text-xs sm:text-sm md:text-base">{item.description}</p>
    </div>
  ))}
</div>
```

### 3. Two Column Layout (Mobile Stack)
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
  <div>Left Column</div>
  <div>Right Column</div>
</div>
```

### 4. Form Layout
```jsx
<form className="space-y-4 sm:space-y-5 md:space-y-6">
  <div>
    <label className="text-xs sm:text-sm font-medium">Label</label>
    <input className="h-10 sm:h-11 md:h-12 text-xs sm:text-sm" />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
    <input className="h-10 sm:h-11 md:h-12" />
    <input className="h-10 sm:h-11 md:h-12" />
  </div>
</form>
```

## Testing Checklist

- [ ] All text is readable on 320px screen
- [ ] No horizontal scrolling
- [ ] All buttons are at least 44x44px
- [ ] Images scale properly
- [ ] Grids stack on mobile
- [ ] Navigation collapses on mobile
- [ ] Forms are touch-friendly
- [ ] All elements align properly
- [ ] Spacing looks good at all breakpoints
- [ ] Images load efficiently (lazy loading)

## Performance Tips

1. Use `loading="lazy"` for non-hero images
2. Use `object-cover` for image containers
3. Specify image dimensions to prevent layout shift
4. Use responsive images (`srcset`) for multiple sizes
5. Optimize images for web (WebP, progressive JPG)

## Accessibility Requirements

✅ Minimum 44x44px touch targets
✅ Color contrast ratio 4.5:1 for text
✅ Proper heading hierarchy (h1 → h6)
✅ Alt text for all images
✅ Focus indicators on interactive elements
✅ Semantic HTML structure
✅ ARIA labels where needed

## Common Issues & Solutions

### Issue: Horizontal Scrolling
**Solution**: Use `overflow-x: hidden` and ensure all padding/margins use responsive units

### Issue: Text Too Small on Mobile
**Solution**: Use responsive text sizes starting from larger values on mobile

### Issue: Buttons Too Small
**Solution**: Use `min-h-11 min-w-11` (44x44px) minimum

### Issue: Images Distorted
**Solution**: Use `object-cover` and proper aspect ratios

### Issue: Layout Breaks
**Solution**: Test at all breakpoints (320px, 640px, 768px, 1024px, 1280px)

## Resources

- Tailwind Breakpoints: https://tailwindcss.com/docs/responsive-design
- Mobile-First Design: https://www.w3.org/TR/mobile-bp/
- Touch Target Sizes: https://www.nngroup.com/articles/touch-target-size/
- WCAG Accessibility: https://www.w3.org/WAI/WCAG21/quickref/
