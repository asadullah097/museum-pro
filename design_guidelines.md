# Virtual Museum Design Guidelines
**Ancient Egyptian Civilization Interactive Learning Platform**

## Design Approach

**Reference-Based Approach** inspired by:
- Google Arts & Culture (interactive exploration, clean exhibit displays)
- British Museum online collections (artifact presentation, information hierarchy)
- Khan Academy (clear educational content structure)
- Adventure game UIs (engaging room navigation, discovery elements)

**Core Principle**: Create an immersive, educational experience that makes Grade 6 students feel like authentic museum visitors and archaeologists, with each room offering distinct visual atmosphere while maintaining cohesive navigation.

## Typography

**Font Families** (Google Fonts):
- Primary: 'Cinzel' - classical serif for headings, museum titles, exhibit names (evokes ancient inscriptions)
- Secondary: 'Inter' - clean sans-serif for body text, descriptions, activities
- Accent: 'Libre Baskerville' - for quotes, historical facts, special callouts

**Hierarchy**:
- Museum Title/Page Headers: Cinzel, 48px (mobile: 32px), font-weight 700
- Room Titles: Cinzel, 36px (mobile: 24px), font-weight 600
- Exhibit Names: Cinzel, 24px (mobile: 18px), font-weight 600
- Section Headers: Inter, 20px, font-weight 600
- Body Text: Inter, 16px, font-weight 400, line-height 1.6
- Captions/Labels: Inter, 14px, font-weight 500
- Activity Instructions: Libre Baskerville, 18px, italic

## Layout System

**Spacing Units** (Tailwind):
- Core spacing: 4, 8, 12, 16, 24 (p-4, m-8, gap-12, py-16, px-24)
- Section padding: py-16 (desktop), py-12 (mobile)
- Component spacing: gap-8 between major elements, gap-4 for related items
- Container max-width: max-w-7xl for main content, max-w-4xl for exhibit descriptions

**Grid System**:
- Floor plan/Room navigation: 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Exhibit displays: 2-3 columns per room (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Activity sections: Single column focus, max-w-3xl centered

## Component Library

### Navigation & Structure

**Museum Homepage**:
- Hero section (70vh): Large papyrus scroll background texture with centered museum title "Virtual Museum of Ancient Egypt", subtitle explaining the 6-room journey
- Interactive floor plan: Clickable museum map showing all 6 rooms as distinct spaces with Egyptian architectural elements (columns, hieroglyphic borders)
- Room cards: Large cards (minimum 300px height) with room-specific background imagery, title overlay with blurred background (backdrop-blur-md), and "Enter Room" button

**Room Header**:
- Full-width banner (h-64) with room-specific themed background
- Room number and title centered with decorative Egyptian border elements
- Navigation breadcrumb: Home > Room Name
- Exit/Return to Museum button (top-right)

### Content Components

**Exhibit Display Cards**:
- Museum-style frames: Cards with border-8 simulating gold/stone frames
- Image: Aspect ratio 4:3, object-cover
- Title plate below image: Beige/papyrus-style background with exhibit name
- Description panel: Expandable/collapsible accordion revealing 2-3 paragraphs
- "Learn More" link to extended information

**Information Panels**:
- Papyrus-textured backgrounds for historical facts
- Decorative hieroglyphic borders (top and bottom)
- Icons from Heroicons for bullet points (pyramid, scroll, ankh-style shapes using existing icons)

**Interactive Activities**:
- Distinct activity zones with bordered containers
- Activity title with scroll/papyrus decoration
- Clear instructions in Libre Baskerville italic
- Interactive elements (quizzes, drawing tools, name translators) with Egyptian-themed UI elements
- Submit/Check buttons styled as stone tablets

**Multimedia Integration**:
- Video embeds: Framed with 16:9 aspect ratio, centered in sections
- Audio player: Custom-styled with pyramid/Egyptian motif controls
- Image galleries: Lightbox-style viewing with thumbnails below

### Room-Specific Visual Treatments

**Room 1 - Mummies & Afterlife**:
- Dark background: Deep browns and blacks (tomb atmosphere)
- Golden accent elements
- Candle-light glow effects on exhibits (subtle box-shadow)

**Room 2 - Artifacts**:
- Museum display case aesthetic: Light beige background
- Spotlight effects on artifact images
- Grid layout showcasing multiple smaller items

**Room 3 - Nile River**:
- Blue gradient background (sky to water)
- Flowing water patterns or papyrus reeds as decorative elements
- Map displays prominently

**Room 4 - Architecture**:
- Sandstone/desert color palette
- Large hero images of pyramids
- Geometric patterns reflecting Egyptian architecture

**Room 5 - Writing & Education**:
- Papyrus texture background
- Hieroglyphic decorative elements
- Scroll-style content presentation

**Room 6 - Pharaohs & Gods**:
- Regal color scheme with gold accents
- Portrait-style display for pharaohs and gods
- Crown and symbol imagery prominent

### Interactive Elements

**Buttons**:
- Primary (Enter Room, Start Activity): Solid buttons with Egyptian border patterns, hover lift effect (transform translateY(-2px))
- Secondary (Learn More, Back): Outlined style with hieroglyphic-inspired borders
- All buttons on hero images: backdrop-blur-md background

**Cards & Containers**:
- Exhibit cards: Subtle shadow (shadow-lg), hover scale (hover:scale-105 transition)
- Activity containers: Bordered with decorative corners suggesting ancient stone tablets
- Information boxes: Papyrus texture with torn-edge effect using border-style

**Navigation**:
- Room selector: Visual floor plan with hover states highlighting each room
- Breadcrumb trail: Always visible at top, styled as carved stone path
- Progress indicator: Shows which rooms student has visited (ankh symbols or checkmarks)

**Forms & Inputs** (for activities):
- Text inputs: Papyrus-style background, bordered like ancient scrolls
- Quiz selections: Radio buttons styled as hieroglyphic symbols
- Drawing canvas: Framed as stone tablet for mummy wrapping activity

## Images

**Required Images**:
1. **Hero Section**: Wide panoramic image of Egyptian pyramids at sunset (1920x800px minimum), with title overlay and blurred-background "Begin Tour" button
2. **Room 1**: Tutankhamun's golden mask, mummy wrappings, canopic jars (3-5 high-quality images)
3. **Room 2**: Jewelry pieces, pottery, amulets, tools (5-8 artifact images on white/neutral backgrounds)
4. **Room 3**: Nile River aerial view, irrigation systems diagram, farming scenes (4-5 images plus one detailed map)
5. **Room 4**: Pyramids of Giza multiple angles, Sphinx, temple interiors (5-6 architectural images)
6. **Room 5**: Hieroglyphics chart, Rosetta Stone, papyrus scrolls, scribes at work (4-5 educational images)
7. **Room 6**: Portrait-style images of Tutankhamun, Cleopatra, Ramses II, and deity representations of Ra, Osiris, Isis, Anubis (8-10 portrait images)

**Background Textures** (subtle, non-distracting):
- Papyrus texture for content areas
- Stone/sandstone for certain room backgrounds
- Dark tomb texture for Room 1

## Animation & Interactions

**Minimal, purposeful animations**:
- Page transitions: Subtle fade-in (300ms) when entering rooms
- Exhibit reveals: Stagger animation as exhibits load (100ms delay between each)
- Hover states: Gentle lift on cards (2-4px), scale on images (1.05)
- Activity completion: Success animation (checkmark with subtle pulse) when student completes activity
- NO distracting scroll animations or continuous movements

## Accessibility

- High contrast text on all backgrounds
- Alt text for all historical images describing artifacts
- Keyboard navigation for all interactive elements
- Clear focus states on buttons and clickable areas
- Screen reader friendly room descriptions and exhibit information
- Minimum touch target size of 44x44px for all interactive elements

## Responsive Behavior

- Desktop (1280px+): 3-column exhibit grids, side-by-side activity layouts
- Tablet (768-1279px): 2-column grids, stacked navigation
- Mobile (320-767px): Single column, full-width cards, simplified floor plan becomes vertical list of room entrances

This design creates an engaging, educational journey through Ancient Egypt that feels authentic, respects the museum metaphor, and keeps Grade 6 students engaged through visual variety and interactive discovery.