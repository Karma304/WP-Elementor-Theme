# Design System - MoinLog WMS SaaS Landing Page

Dieses Dokument beschreibt das vollständige Design-System des Templates für konsistente Anpassungen und Erweiterungen.

## Farbpalette

### Modern SaaS Color Palette (Inspired by sage.com, xentral.com, dbfakt.de)

### Primärfarben

| Farbe | Hex-Code | RGB | Verwendung |
|-------|----------|-----|------------|
| **Deep Navy** | `#0B1F3F` | rgb(11, 31, 63) | Primary headings, nav text, footer background |
| **Professional Blue** | `#1B4F72` | rgb(27, 79, 114) | Secondary headings, gradient base |
| **Modern Teal** | `#00A99D` | rgb(0, 169, 157) | Primary CTAs, icons, brand accent |
| **Vibrant Cyan** | `#00D4C9` | rgb(0, 212, 201) | Highlights, hover states, interactive elements |

### Sekundärfarben

| Farbe | Hex-Code | RGB | Verwendung |
|-------|----------|-----|------------|
| **Deep Teal** | `#008C82` | rgb(0, 140, 130) | CTA hover states, active states |
| **Professional Purple** | `#6C63FF` | rgb(108, 99, 255) | Secondary CTAs, badges, premium features |
| **Alert Orange** | `#FF6B35` | rgb(255, 107, 53) | Warning states, attention-grabbers |
| **Success Green** | `#00B894` | rgb(0, 184, 148) | Success messages, positive indicators |

### Neutral-Farben

| Farbe | Hex-Code | RGB | Verwendung |
|-------|----------|-----|------------|
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Main background, card backgrounds |
| **Light Background** | `#F7F9FC` | rgb(247, 249, 252) | Alternating sections, subtle backgrounds |
| **Soft Gray** | `#E8ECF1` | rgb(232, 236, 241) | Borders, dividers, disabled states |
| **Medium Gray** | `#6C757D` | rgb(108, 117, 125) | Secondary text, descriptions |
| **Dark Text** | `#2C3E50` | rgb(44, 62, 80) | Body text, readable content |
| **Light Text** | `#95A5A6` | rgb(149, 165, 166) | Captions, metadata, footer text |

### Gradient-Definitionen

**Hero-Gradient (Modern Professional)**:
```css
background: linear-gradient(135deg, #0B1F3F 0%, #1B4F72 50%, #2E86AB 100%);
```

**ROI-Gradient (Vibrant Teal)**:
```css
background: linear-gradient(90deg, #00A99D 0%, #00D4C9 100%);
```

**CTA-Gradient (Deep Professional)**:
```css
background: linear-gradient(135deg, #1B4F72 0%, #0B1F3F 100%);
```

**Accent-Gradient (Purple Touch)**:
```css
background: linear-gradient(135deg, #6C63FF 0%, #5A52D5 100%);
```

**Light-Gradient (Soft Background)**:
```css
background: linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%);
```

## Typografie

### Schriftgrößen

| Element | Desktop | Tablet | Mobile | Zeilenhöhe |
|---------|---------|--------|--------|------------|
| **H1** (Hero) | 48px | 36px | 28px | 1.2 |
| **H2** (Sektions-Titel) | 36px | 30px | 24px | 1.3 |
| **H3** (Subsection) | 24px | 22px | 20px | 1.4 |
| **H4** (Widget-Titel) | 18px | 18px | 16px | 1.4 |
| **Body** | 16px | 16px | 16px | 1.6 |
| **Subtitle/Lead** | 20-24px | 18px | 16px | 1.4 |
| **Small** | 14px | 14px | 14px | 1.5 |
| **Button** | 18px | 16px | 16px | 1 |

### Schriftgewichte

| Verwendung | Gewicht | Wert |
|------------|---------|------|
| **Headlines** | Bold | 700 |
| **Sub-Headlines** | Semi-Bold | 600 |
| **Body** | Regular | 400 |
| **Light Text** | Light | 300 |

### Empfohlene Schriftarten (Modern SaaS Style)

**Primary Font Stack** (Modern & Professional):
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Recommended Google Fonts**:
- **Primary Choice**: **Inter** (Modern, clean, excellent readability)
- **Alternative 1**: **Poppins** (Geometric, friendly professional)
- **Alternative 2**: **DM Sans** (Contemporary, versatile)
- **Alternative 3**: **Plus Jakarta Sans** (Rounded, modern)

**Font Pairing Recommendations**:
- **Headings**: Inter Bold (700) / Poppins SemiBold (600)
- **Body**: Inter Regular (400) / DM Sans Regular (400)
- **Accents**: Inter Medium (500) / Poppins Medium (500)

## Abstände & Layout

### Container-Breiten

| Element | Breite |
|---------|--------|
| **Max Content Width** | 1200px |
| **Narrow Content** | 800px |
| **Wide Content** | 1400px |

### Section Padding

| Sektion | Top/Bottom | Links/Rechts |
|---------|------------|--------------|
| **Standard** | 80px | 20px |
| **Hero** | 100px | 20px |
| **Compact** | 40px | 20px |

**Responsive Anpassungen**:
- Tablet: 60px top/bottom
- Mobile: 40px top/bottom

### Element-Abstände

| Element | Abstand |
|---------|---------|
| **Überschrift zu Text** | 20-30px |
| **Text zu CTA** | 40-50px |
| **Zwischen Sektionen** | 0px (Padding reicht) |
| **Zwischen Spalten** | 30px (Elementor Default) |
| **Icon zu Text** | 15-20px |

### Grid-System

**Spalten-Layouts**:
- **Full Width**: 100%
- **Two Columns**: 50% / 50%
- **Three Columns**: 33.33% / 33.33% / 33.33%
- **Four Columns**: 25% / 25% / 25% / 25%
- **Asymmetrisch**: 66% / 33% oder 40% / 60%

## Komponenten

### Buttons

#### Primärer Button (Modern SaaS Style)

**Style**:
```
Background: #00A99D (Modern Teal)
Text Color: #FFFFFF
Font Family: Inter / Poppins
Font Size: 16px
Font Weight: 600
Padding: 14px 32px
Border Radius: 8px (Modern rounded)
Border: none
Box Shadow: 0 2px 8px rgba(0, 169, 157, 0.2)
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

**Hover**:
```
Background: #008C82 (Deep Teal)
Transform: translateY(-2px)
Box Shadow: 0 4px 16px rgba(0, 169, 157, 0.35)
```

**Active**:
```
Transform: translateY(0)
Box Shadow: 0 1px 4px rgba(0, 169, 157, 0.3)
```

**Disabled**:
```
Background: #E8ECF1
Color: #95A5A6
Cursor: not-allowed
Box Shadow: none
```

#### Sekundärer Button (Outlined Style)

**Style**:
```
Background: transparent
Text Color: #00A99D (on light) / #FFFFFF (on dark)
Border: 2px solid #00A99D
Font Family: Inter / Poppins
Font Size: 16px
Font Weight: 600
Padding: 12px 32px
Border Radius: 8px
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

**Hover**:
```
Background: #00A99D
Text Color: #FFFFFF
Border-Color: #00A99D
Transform: translateY(-2px)
Box Shadow: 0 4px 16px rgba(0, 169, 157, 0.25)
```

#### Tertiary Button (Ghost Style)

**Style**:
```
Background: rgba(0, 169, 157, 0.1)
Text Color: #00A99D
Border: none
Font Family: Inter / Poppins
Font Size: 16px
Font Weight: 600
Padding: 12px 28px
Border Radius: 8px
```

**Hover**:
```
Background: rgba(0, 169, 157, 0.15)
Transform: translateY(-1px)
```

### Icon-Boxen (Modern Card Style)

**Feature Icon-Box**:
```
Icon Size: 56px
Icon Color: #00A99D (gradient option: linear-gradient(135deg, #00A99D, #00D4C9))
Icon Background: rgba(0, 169, 157, 0.1)
Icon Border Radius: 12px
Icon Padding: 16px
Title Font Size: 20px
Title Color: #0B1F3F
Title Font Weight: 600
Description Font Size: 16px
Description Color: #6C757D
Description Line Height: 1.6
Alignment: Top (Icon above text)
Spacing: 24px between icon and title
Card Background: #FFFFFF
Card Border: 1px solid #E8ECF1
Card Border Radius: 12px
Card Padding: 32px
Card Shadow: 0 2px 12px rgba(0, 0, 0, 0.06)
Hover Shadow: 0 8px 24px rgba(0, 0, 0, 0.12)
```

**Pain Point Icon-Box**:
```
Icon Size: 40px
Icon Color: #FF6B35
Icon Background: rgba(255, 107, 53, 0.1)
Icon Border Radius: 8px
Icon Padding: 12px
Title Font Size: 18px
Title Color: #0B1F3F
Title Font Weight: 600
Description Font Size: 16px
Description Color: #6C757D
Alignment: Left (Icon beside text)
Spacing: 16px between icon and text
```

**Integration Icon-Box**:
```
Icon Size: 48px
Icon Color: #6C63FF (Professional Purple)
Icon Background: rgba(108, 99, 255, 0.1)
Icon Border Radius: 10px
Icon Padding: 14px
Hover Transform: translateY(-4px) scale(1.05)
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### Testimonial-Karten (Modern Design)

**Card Style**:
```
Background: #FFFFFF
Border: 1px solid #E8ECF1
Border Radius: 16px
Padding: 36px
Shadow: 0 4px 16px rgba(0, 0, 0, 0.08)
Hover Shadow: 0 12px 32px rgba(0, 0, 0, 0.12)
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Position: relative
Overflow: hidden
```

**Accent Bar** (Left side):
```
Position: absolute
Left: 0
Top: 0
Bottom: 0
Width: 4px
Background: linear-gradient(180deg, #00A99D, #00D4C9)
```

**Content**:
```
Quote Icon Size: 32px
Quote Icon Color: rgba(0, 169, 157, 0.2)
Quote Font Size: 18px
Quote Color: #2C3E50
Quote Line Height: 1.7
Quote Font Style: normal (not italic for modern look)
Quote Margin Bottom: 24px
Name Font Size: 16px
Name Color: #0B1F3F
Name Font Weight: 600
Job Font Size: 14px
Job Color: #6C757D
Company Font Size: 14px
Company Color: #00A99D
Avatar Size: 56px (if used)
Avatar Border Radius: 50%
Avatar Border: 3px solid #E8ECF1
```

**Rating Stars** (if applicable):
```
Star Size: 16px
Star Color: #FFB800
Star Spacing: 4px
```

### Counter/Statistics

**Style**:
```
Number Font Size: 48px
Number Color: #ffffff
Number Font Weight: 700
Title Font Size: 16px
Title Color: #ffffff
Animation: Count up from 0
Duration: 2000ms
```

### Accordion (FAQ)

**Style**:
```
Title Background: #ffffff
Title Color: #1a1a2e
Title Font Size: 18px
Title Font Weight: 600
Title Padding: 20px
Content Color: #555555
Content Font Size: 16px
Content Padding: 20px
Border: 1px solid #e0e0e0
Border Radius: 5px
```

**States**:
- Closed: Arrow right
- Open: Arrow down
- Hover: Slight background color change

### Icon-Listen

**Style**:
```
Icon Size: 20px
Icon Color: #16c79a
Text Font Size: 16px
Text Color: #1a1a2e
Spacing: 15px between items
```

## Icons

### Icon-Bibliothek

Primär: **Font Awesome 5** (Free & Pro)

### Icon-Größen

| Verwendung | Größe |
|------------|-------|
| **Feature Icons** | 48px |
| **Small Icons** | 24px |
| **Tech Advantage Icons** | 36px |
| **List Icons** | 20px |
| **Social Icons** | 24px |

### Icon-Farben nach Kontext

| Kontext | Farbe |
|---------|-------|
| **Features (positiv)** | #16c79a |
| **Pain Points (negativ)** | #e74c3c |
| **Tech Info** | #0f3460 |
| **Integrationen** | #16c79a |
| **Footer** | #e0e0e0 |

## Sektions-Stile

### Hero-Sektion

```
Height: min-height 90vh
Background: Gradient (135deg, #1a1a2e to #0f3460)
Text Alignment: Center
Padding: 100px 20px
```

### Alternierende Hintergründe

Für visuelle Abwechslung:
- Sektion 1: Weiß (#ffffff)
- Sektion 2: Hellgrau (#f8f9fa)
- Sektion 3: Weiß (#ffffff)
- usw.

**Besondere Sektionen**:
- Hero: Gradient
- ROI: Gradient (Türkis)
- CTA: Gradient (Dunkelblau)
- Footer: Dunkelblau (#1a1a2e)

## Schatten & Effekte

### Box Shadows

| Ebene | Shadow |
|-------|--------|
| **Leicht** | `0 2px 5px rgba(0, 0, 0, 0.05)` |
| **Medium** | `0 4px 15px rgba(0, 0, 0, 0.1)` |
| **Stark** | `0 8px 30px rgba(0, 0, 0, 0.15)` |
| **Hover** | `0 4px 15px rgba(22, 199, 154, 0.3)` |

### Transitions

**Standard-Transition**:
```css
transition: all 0.3s ease;
```

**Hover-Effekte**:
```css
/* Buttons */
transform: translateY(-2px);
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Cards */
transform: translateY(-5px);
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
```

## Responsive Breakpoints

| Gerät | Breakpoint |
|-------|------------|
| **Mobile** | < 768px |
| **Tablet** | 768px - 1024px |
| **Desktop** | > 1024px |
| **Large Desktop** | > 1440px |

### Responsive Anpassungen

**Mobile** (< 768px):
- Single-Column-Layout
- Schriftgrößen reduzieren (siehe Typografie-Tabelle)
- Padding reduzieren (40px top/bottom)
- Button-Breite: 100%
- Hero Height: auto statt 90vh

**Tablet** (768px - 1024px):
- 2-Column-Layout wo möglich
- Leicht reduzierte Schriftgrößen
- Padding: 60px top/bottom
- Optimierte Touch-Targets (min. 44px)

## Barrierefreiheit (WCAG)

### Farbkontraste

Alle Farbkombinationen erfüllen **WCAG AA** Standard:

| Vordergrund | Hintergrund | Kontrast-Ratio |
|-------------|-------------|----------------|
| #1a1a2e | #ffffff | 15.8:1 ✅ |
| #555555 | #ffffff | 7.5:1 ✅ |
| #ffffff | #1a1a2e | 15.8:1 ✅ |
| #ffffff | #16c79a | 2.8:1 ⚠️ (nur für große Texte) |

### Fokus-Zustände

```css
:focus {
  outline: 2px solid #16c79a;
  outline-offset: 2px;
}
```

### Alt-Texte

Alle dekorativen Icons: `alt=""`  
Alle informativen Bilder: Beschreibender Alt-Text

## Animation-Guidelines

### Erlaubte Animationen

- **Fade In**: Für Sektionen beim Scrollen
- **Slide Up**: Für Karten und Boxen
- **Scale**: Für Hover-Effekte
- **Count Up**: Für Zahlen/Counter

### Timing

- **Fade In**: 0.5s
- **Slide Up**: 0.6s
- **Hover**: 0.3s
- **Count Up**: 2s

### Performance

- Maximal 5-7 Animationen pro Seite
- `will-change` für animierte Elemente
- `transform` statt `top/left` für Bewegungen
- Optional auf Mobile deaktivieren

## Content-Guidelines

### Text-Längen

| Element | Min | Max | Optimal |
|---------|-----|-----|---------|
| **H1** | 5 Wörter | 12 Wörter | 6-8 Wörter |
| **H2** | 3 Wörter | 8 Wörter | 4-6 Wörter |
| **Subtitle** | 10 Wörter | 25 Wörter | 15-20 Wörter |
| **Feature Title** | 3 Wörter | 8 Wörter | 4-6 Wörter |
| **Feature Desc** | 20 Wörter | 60 Wörter | 30-40 Wörter |
| **Testimonial** | 15 Wörter | 50 Wörter | 25-35 Wörter |
| **FAQ Answer** | 30 Wörter | 100 Wörter | 40-60 Wörter |
| **Button Text** | 2 Wörter | 4 Wörter | 2-3 Wörter |

### Tone of Voice

**Eigenschaften**:
- Professionell aber zugänglich
- Nutzen-orientiert
- Klar und prägnant
- Vertrauenswürdig
- Handlungsorientiert

**Dos**:
- Aktive Verben nutzen
- Konkrete Zahlen nennen
- Kundenperspektive einnehmen
- Einfache Sprache verwenden

**Don'ts**:
- Fachjargon ohne Erklärung
- Übertriebene Versprechen
- Passive Formulierungen
- Lange, komplexe Sätze

## Bildmaterial

### Bild-Dimensionen

| Verwendung | Breite | Höhe | Format |
|------------|--------|------|--------|
| **Hero Background** | 1920px | 1080px | JPG/WebP |
| **Feature Icons** | 512px | 512px | SVG/PNG |
| **Logos** | 400px | 150px | PNG/SVG |
| **Testimonial Fotos** | 300px | 300px | JPG (rund) |
| **Partner Logos** | 200px | 100px | PNG/SVG |

### Bildstil

- **Stil**: Modern, professionell, authentisch
- **Farben**: Passend zum Farbschema
- **Menschen**: Diverse, authentische Darstellung
- **Kontext**: Business/Tech-Umgebung

### Optimierung

- **Format**: WebP mit JPG-Fallback
- **Komprimierung**: 80-85% Qualität
- **Lazy Loading**: Aktiviert
- **Responsive**: Verschiedene Größen für verschiedene Geräte

## SEO-Richtlinien

### Meta-Tags

```html
<title>MoinLog WMS - Warehouse Management System | [Brand]</title>
<meta name="description" content="Skalieren Sie Ihr Geschäft mit unserem modernen Warehouse Management System. 40% weniger Lagerfehler, 20% schnellere Prozesse. Jetzt kostenlos testen.">
```

### Überschriften-Hierarchie

- **Eine H1** pro Seite (Hero-Headline)
- **H2** für Sektions-Überschriften
- **H3** für Sub-Sektionen
- **H4** für Widget-Titel

### Strukturierte Daten

Schema.org Markup für:
- SoftwareApplication
- Product
- FAQPage
- Review/AggregateRating

## Checkliste: Design-Konsistenz

- [ ] Alle Farben entsprechen der Palette
- [ ] Schriftgrößen folgen der Hierarchie
- [ ] Abstände sind konsistent
- [ ] Buttons haben einheitlichen Stil
- [ ] Icons stammen aus gleicher Bibliothek
- [ ] Hover-Effekte sind einheitlich
- [ ] Responsive Design funktioniert auf allen Geräten
- [ ] Kontraste erfüllen WCAG-Standards
- [ ] Animationen sind Performance-optimiert
- [ ] Alt-Texte sind vorhanden

---

**Version**: 1.0.0  
**Letztes Update**: November 2024
