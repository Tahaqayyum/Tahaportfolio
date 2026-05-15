---
name: Luminal Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#cac6c3'
  on-tertiary: '#32302f'
  tertiary-container: '#0b0a09'
  on-tertiary-container: '#7c7977'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-x: 24px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a premium WordPress developer portfolio, blending the precision of high-end SaaS with the sophisticated minimalism of luxury tech brands. The brand personality is authoritative yet innovative—think "architectural code." It targets high-value clients and agencies looking for technical mastery paired with an exceptional eye for design.

The aesthetic follows a **Minimalist-Glassmorphic** hybrid. It utilizes a "Deep Stack" approach where the UI feels layered rather than flat. 
- **Minimalism:** Aggressive use of whitespace to let high-quality project imagery breathe.
- **Glassmorphism:** Subtly frosted surfaces with 1px semi-transparent borders to define depth without visual clutter.
- **Corporate Tech:** Professional, reliable layouts that use rigid grids to convey stability and attention to detail.

## Colors

The palette is anchored in **Rich Black (#0A0A0A)** to provide an infinite canvas feel. The **Neon Lime (#C6FF00)** serves as the high-energy focal point, used sparingly for calls-to-action and critical status indicators to maintain its visual "punch."

- **Primary:** Deepest black for background surfaces.
- **Accent:** Electric lime for interactivity and highlight elements.
- **Surface:** Subtle variations of dark gray (#1A1A1A) are used for card backgrounds and container separation.
- **Typography:** Pure white for maximum readability on headings, with tiered grays for body and metadata to establish a clear information hierarchy.

## Typography

This design system utilizes a high-contrast typographic pairing. **Space Grotesk** brings a technical, geometric edge to headings, while **Sora** provides a soft, approachable, yet modern feel for long-form content.

- **Display & Headlines:** Use tight letter-spacing and heavy weights to create a "poster" aesthetic.
- **Body Text:** Increased line-height (1.6) ensures maximum legibility against the dark background, preventing "halation" (visual vibrating of white text on black).
- **Labels:** Small caps and increased tracking are used for section overlines to differentiate them from body copy.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid**. On desktop, content is constrained to a 12-column grid within a 1280px container to ensure readability. On mobile, it transitions to a single-column fluid layout with generous horizontal margins.

- **Vertical Rhythm:** A massive 160px section gap creates the "luxury" feel, forcing the user to focus on one piece of content at a time.
- **Grid:** Use a 12-column grid for desktop with 32px gutters. Standardize card widths to 4, 6, or 8 column spans.
- **Mobile:** Margins reduce to 20px, and section gaps compress to 80px.

## Elevation & Depth

Depth is conveyed through **Tonal Glassmorphism** rather than traditional drop shadows. 

1. **Base Layer:** #0A0A0A (Pure Black).
2. **Surface Layer:** 10% opacity white fill with a 20px backdrop blur and a 1px border (#FFFFFF at 10% opacity).
3. **Interactive Layer:** When hovered, the 1px border transitions to the Accent Lime (#C6FF00) at 30% opacity.

Shadows should be avoided unless they are "Glows." For example, a primary button may have a soft, diffused #C6FF00 outer glow to simulate a light source.

## Shapes

The design system uses a pronounced **Rounded (Level 2)** language to soften the technical edge of the typography.

- **Standard Elements:** 0.5rem (8px) for small components like tags or input fields.
- **Cards & Containers:** 1.5rem (24px) to create the "Apple-style" container aesthetic.
- **Buttons:** Fully pill-shaped (rounded-full) to maximize tap-target friendliness and visual distinction from layout containers.

## Components

### Buttons
- **Primary:** Neon Lime background, black text, pill-shaped. On hover, apply a soft lime glow.
- **Secondary:** Ghost style. 1px semi-transparent white border, white text. On hover, fill with 10% white.

### Cards (Glassmorphism)
- Use for project features. Background: `rgba(255, 255, 255, 0.05)`, Backdrop-blur: `12px`, Border: `1px solid rgba(255, 255, 255, 0.1)`.

### Inputs
- Bottom-border only or very subtle filled container. Focus state should animate the border color to Neon Lime.

### Chips/Tags
- Small, uppercase labels with a 10% Lime background and Lime text for "Tech Stack" indicators.

### Navigation
- A floating "dock" at the bottom of the screen or a minimal top-header with glassmorphism and a 20px blur. 

### Custom Scrollbar
- Minimalist lime-colored thumb (4px width) on a transparent track to maintain the premium feel.