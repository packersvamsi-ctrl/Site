# Tailwind CSS Utilities Used in Responsive Refactor

## Responsive Prefixes Applied

All classes use these responsive prefixes:
- Default (mobile)
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

---

## Typography Utilities

### Font Sizes
```
text-xs    = 0.75rem   (12px)
text-sm    = 0.875rem  (14px)
text-base  = 1rem      (16px)
text-lg    = 1.125rem  (18px)
text-xl    = 1.25rem   (20px)
text-2xl   = 1.5rem    (24px)
text-3xl   = 1.875rem  (30px)
text-4xl   = 2.25rem   (36px)
text-5xl   = 3rem      (48px)
```

**Used Pattern**:
```
text-xs sm:text-sm md:text-base lg:text-lg
text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
```

### Font Weights
```
font-light = 300
font-normal = 400
font-medium = 500
font-semibold = 600
font-bold = 700
```

### Line Height
```
leading-none = 1
leading-tight = 1.25
leading-normal = 1.5
leading-relaxed = 1.625
```

---

## Spacing Utilities

### Padding
```
p-2   = 0.5rem   (8px)
p-3   = 0.75rem  (12px)
p-4   = 1rem     (16px)
p-5   = 1.25rem  (20px)
p-6   = 1.5rem   (24px)
p-8   = 2rem     (32px)

px-3  = horizontal 12px
px-4  = horizontal 16px
py-8  = vertical 32px
```

**Common Patterns**:
```
px-3 sm:px-4 md:px-6 lg:px-8
py-8 sm:py-10 md:py-12 lg:py-16
p-4 sm:p-6 md:p-8
```

### Margins
```
mb-2  = margin-bottom 8px
mb-3  = margin-bottom 12px
mb-4  = margin-bottom 16px
mb-6  = margin-bottom 24px
mt-2  = margin-top 8px
mt-3  = margin-top 12px
```

### Gap (Grid/Flex spacing)
```
gap-2  = 8px spacing
gap-3  = 12px spacing
gap-4  = 16px spacing
gap-6  = 24px spacing
gap-8  = 32px spacing
```

**Common Patterns**:
```
gap-4 sm:gap-6 md:gap-8 lg:gap-12
```

### Space Between
```
space-y-2 = vertical spacing between children
space-y-3 = 12px between
space-y-4 = 16px between
space-y-6 = 24px between
```

---

## Size Utilities

### Width & Height
```
w-3    = 0.75rem   (12px)
w-4    = 1rem      (16px)
w-5    = 1.25rem   (20px)
w-6    = 1.5rem    (24px)
w-8    = 2rem      (32px)
w-10   = 2.5rem    (40px)
w-11   = 2.75rem   (44px)
w-12   = 3rem      (48px)
w-14   = 3.5rem    (56px)
w-16   = 4rem      (64px)
w-20   = 5rem      (80px)
w-full = 100%
w-auto = auto
```

### Height
```
h-8    = 2rem      (32px)
h-10   = 2.5rem    (40px)
h-11   = 2.75rem   (44px)
h-12   = 3rem      (48px)
h-14   = 3.5rem    (56px)
h-16   = 4rem      (64px)
h-20   = 5rem      (80px)
h-24   = 6rem      (96px)
h-28   = 7rem      (112px)
h-32   = 8rem      (128px)
h-40   = 10rem     (160px)
h-48   = 12rem     (192px)
h-64   = 16rem     (256px)
h-96   = 24rem     (384px)
```

### Min/Max Sizes
```
min-h-10   = min-height: 40px
min-h-11   = min-height: 44px (touch target)
min-w-10   = min-width: 40px
min-w-11   = min-width: 44px (touch target)
max-w-2xl  = 42rem (672px)
max-w-3xl  = 48rem (768px)
max-w-4xl  = 56rem (896px)
```

---

## Layout Utilities

### Display
```
block     = display: block
flex      = display: flex
grid      = display: grid
hidden    = display: none
inline    = display: inline
```

**Responsive Pattern**:
```
hidden sm:flex md:flex lg:flex
sm:hidden md:hidden lg:hidden
```

### Grid
```
grid-cols-1        = 1 column
grid-cols-2        = 2 columns
grid-cols-3        = 3 columns
grid-cols-4        = 4 columns
grid-cols-5        = 5 columns
auto-cols-fr       = flexible columns
gap-4              = 16px gap
```

**Common Patterns**:
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
grid grid-cols-2 md:grid-cols-4
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
```

### Flexbox
```
flex-col          = flex-direction: column
flex-row          = flex-direction: row
items-center      = align-items: center
items-start       = align-items: flex-start
justify-center    = justify-content: center
justify-between   = justify-content: space-between
gap-2             = flex gap
```

**Responsive Pattern**:
```
flex flex-col sm:flex-row
flex flex-col sm:flex-row gap-3 sm:gap-4
```

### Flex Growing/Shrinking
```
flex-1       = flex: 1
flex-shrink-0 = flex-shrink: 0
```

---

## Background & Border

### Background Color
```
bg-background      = primary background
bg-secondary       = secondary background
bg-muted           = muted background
bg-card            = card background
bg-primary         = primary accent color
bg-primary/10      = primary with 10% opacity
bg-white/20        = white with 20% opacity
bg-black/70        = black with 70% opacity
```

### Border
```
border             = 1px border
border-l           = left border only
border-t           = top border only
border-b           = bottom border only
border-border      = uses border CSS variable
border-primary/50  = primary border with 50% opacity
```

### Border Radius
```
rounded-lg  = 0.5rem   (8px)
rounded-xl  = 0.75rem  (12px)
rounded-2xl = 1rem     (16px)
rounded-3xl = 1.5rem   (24px)
rounded-full = 9999px  (circle)
```

**Responsive Pattern**:
```
rounded-lg sm:rounded-xl md:rounded-2xl
```

---

## Effects

### Box Shadow
```
shadow-card        = custom shadow for cards
shadow-card-hover  = custom shadow for card hover
shadow-whatsapp    = custom shadow for WhatsApp button
shadow-lg          = larger shadow
```

### Opacity
```
opacity-0   = 0% (hidden)
opacity-50  = 50% transparency
opacity-80  = 80% opacity
opacity-100 = 100% (fully opaque)
```

### Transitions
```
transition-all           = all properties
transition-colors        = color changes
transition-opacity       = opacity changes
transition-transform     = transform changes
transition-shadow        = shadow changes
duration-300             = 300ms
ease-in-out              = easing function
```

---

## Position & Overflow

### Position
```
fixed       = position: fixed
absolute    = position: absolute
relative    = position: relative
sticky      = position: sticky
inset-0     = top/right/bottom/left all 0
```

### Overflow
```
overflow-hidden  = overflow: hidden
overflow-x-auto = overflow-x: auto
overflow-y-auto = overflow-y: auto
overflow-wrap:break-word
```

---

## Transform

### Scale
```
scale-110  = transform: scale(1.1)
hover:scale-105 = 1.05 on hover
hover:scale-110 = 1.1 on hover
```

### Translate
```
translate-y-0   = translateY(0)
translate-y-1   = translateY(0.25rem)
translate-y-2   = translateY(0.5rem)
translate-y-4   = translateY(1rem)
translate-y-8   = translateY(2rem)
translate-x-2   = translateX(0.5rem)
```

### Rotate
```
-translate-y-1/2  = translateY(-50%) [center vertically]
-translate-x-1/2  = translateX(-50%) [center horizontally]
```

---

## Pseudo-classes & States

### Hover
```
hover:bg-primary   = on hover
hover:text-primary = on hover
hover:shadow-lg    = on hover
hover:scale-110    = on hover
```

### Focus
```
focus:outline-none         = remove default outline
focus:ring-2               = 2px ring
focus:ring-primary/50      = primary ring at 50% opacity
focus-visible:outline      = for keyboard navigation
```

### Active/Group
```
group              = apply group:* classes to children
group-hover:opacity-100 = on parent hover
active:bg-primary  = on click
```

### Responsive Display
```
sm:hidden     = hidden at sm breakpoint
md:flex       = flex at md breakpoint
lg:block      = block at lg breakpoint
xl:hidden     = hidden at xl breakpoint
```

---

## Typography Classes

### Font Families (Custom)
```
font-heading  = custom heading font
font-body     = custom body font
font-subtitle = custom subtitle font
```

### Text Color
```
text-foreground           = primary text color
text-secondary-foreground = secondary text
text-muted-foreground     = muted/gray text
text-primary             = primary accent text
text-white              = white text
text-white/80           = white at 80% opacity
text-white/90           = white at 90% opacity
text-primary-foreground = text on primary background
```

---

## Aspect Ratio

```
aspect-video    = 16:9 ratio (640x360)
aspect-square   = 1:1 ratio
aspect-[4/3]    = 4:3 ratio
aspect-[3/2]    = 3:2 ratio
```

---

## Container

```
container      = max-width container
mx-auto        = margin-left/right auto (center)
```

---

## Utility Summary by Component Type

### Hero Sections
```
py-12 sm:py-16 md:py-20 lg:py-24
px-3 sm:px-4 md:px-6 lg:px-8
text-2xl sm:text-3xl md:text-4xl lg:text-5xl
```

### Cards
```
bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8
shadow-card hover:shadow-card-hover
```

### Buttons
```
h-10 sm:h-11 md:h-12
text-xs sm:text-sm md:text-base
min-h-11 min-w-11 (44x44px)
```

### Form Inputs
```
h-10 sm:h-11 md:h-12
text-xs sm:text-sm
```

### Grid Layouts
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
gap-4 sm:gap-6 md:gap-8
```

### Images
```
w-full h-full object-cover
rounded-lg sm:rounded-xl md:rounded-2xl
aspect-video / aspect-square / aspect-[4/3]
```

### Icons
```
w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
text-primary
```

---

## Performance Utilities

```
loading="lazy"           = lazy load images
transform               = GPU acceleration
will-change="filter"    = hints for browser optimization
transition-all duration-300 = smooth animations
```

---

## Accessibility Utilities

```
min-h-11 min-w-11       = 44x44px minimum touch target
focus:ring-2            = keyboard focus indicator
focus:outline-none      = remove default outline
sr-only                 = screen-reader only
```

---

## Common Class Combinations

### Full Width Section
```
w-full bg-muted py-12 sm:py-16
```

### Centered Container
```
container mx-auto px-3 sm:px-4 md:px-6 lg:px-8
```

### Responsive Card
```
bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-card
```

### Touch Target Button
```
min-h-11 min-w-11 px-4 sm:px-6 py-2 sm:py-2.5
```

### Responsive Heading
```
text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold
```

### Responsive Image Container
```
aspect-video rounded-lg sm:rounded-xl overflow-hidden
```

### Mobile-First Grid
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8
```

### Responsive Text
```
text-xs sm:text-sm md:text-base lg:text-lg
```

---

## Quick Reference by Purpose

### Making Text Smaller on Mobile ✅
```jsx
className="text-xs sm:text-sm md:text-base"
```

### Making Layouts Stack on Mobile ✅
```jsx
className="flex flex-col sm:flex-row"
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
```

### Making Buttons Touch-Friendly ✅
```jsx
className="min-h-11 min-w-11 h-10 sm:h-11 md:h-12"
```

### Making Spacing Responsive ✅
```jsx
className="px-3 sm:px-4 md:px-6 lg:px-8"
className="gap-4 sm:gap-6 md:gap-8"
```

### Making Images Responsive ✅
```jsx
className="w-full h-full object-cover rounded-lg sm:rounded-xl"
className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto"
```

---

This comprehensive guide covers all Tailwind CSS utilities used in the responsive refactoring of the Vamsi Movers website.
