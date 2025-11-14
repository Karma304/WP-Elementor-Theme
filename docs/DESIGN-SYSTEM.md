# Design System - MoinLog WMS SaaS Landing Page

Dieses Dokument beschreibt das vollständige Design-System des Templates für konsistente Anpassungen und Erweiterungen.

## Farbpalette

### Primärfarben

| Farbe | Hex-Code | RGB | Verwendung |
|-------|----------|-----|------------|
| **Dunkelblau** | `#1a1a2e` | rgb(26, 26, 46) | Überschriften, Haupttext, Footer-Hintergrund |
| **Mittelblau** | `#0f3460` | rgb(15, 52, 96) | Gradient-Farbe, sekundäre Elemente |
| **Türkis** | `#16c79a` | rgb(22, 199, 154) | CTAs, Icons, Akzente, positive Hervorhebungen |

### Sekundärfarben

| Farbe | Hex-Code | RGB | Verwendung |
|-------|----------|-----|------------|
| **Türkis Dunkel** | `#11a87e` | rgb(17, 168, 126) | Hover-States für CTAs |
| **Rot** | `#e74c3c` | rgb(231, 76, 60) | Pain Point Icons, Fehler-Meldungen |

### Neutral-Farben

| Farbe | Hex-Code | RGB | Verwendung |
|-------|----------|-----|------------|
| **Weiß** | `#ffffff` | rgb(255, 255, 255) | Hintergrund, Text auf dunklem Grund |
| **Hellgrau** | `#f8f9fa` | rgb(248, 249, 250) | Alternierender Sektions-Hintergrund |
| **Mittelgrau** | `#e0e0e0` | rgb(224, 224, 224) | Rahmen, Trennlinien |
| **Dunkelgrau** | `#555555` | rgb(85, 85, 85) | Beschreibungstext, sekundärer Text |
| **Helltext** | `#e0e0e0` | rgb(224, 224, 224) | Text auf dunklem Hintergrund |
| **Hellgrau Text** | `#999999` | rgb(153, 153, 153) | Copyright, Footer-Text |

### Gradient-Definitionen

**Hero-Gradient**:
```css
background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
```

**ROI-Gradient**:
```css
background: linear-gradient(90deg, #16c79a 0%, #11a87e 100%);
```

**CTA-Gradient**:
```css
background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
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

### Empfohlene Schriftarten

**System-Schriftart-Stack** (Standard):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

**Google Fonts Empfehlungen**:
- **Modern & Tech**: Inter, Roboto, Poppins
- **Professional**: Open Sans, Lato, Montserrat
- **Elegant**: Playfair Display + Source Sans Pro
- **Corporate**: IBM Plex Sans, Work Sans

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

#### Primärer Button

**Style**:
```
Background: #16c79a
Text Color: #ffffff
Font Size: 18px
Font Weight: 600
Padding: 18px 45px
Border Radius: 50px (fully rounded)
```

**Hover**:
```
Background: #11a87e
Transform: translateY(-2px)
Box Shadow: 0 4px 15px rgba(22, 199, 154, 0.3)
```

**States**:
- Normal: Türkis
- Hover: Dunkleres Türkis + Lift-Effekt
- Active: Noch dunkler
- Disabled: Grau, 50% Opacity

#### Sekundärer Button

**Style**:
```
Background: transparent
Text Color: #ffffff (auf dunklem Grund) / #1a1a2e (auf hellem Grund)
Border: 2px solid
Font Size: 18px
Font Weight: 600
Padding: 16px 50px
Border Radius: 50px
```

**Hover**:
```
Background: #ffffff (invertiert)
Text Color: #1a1a2e (invertiert)
Transform: translateY(-2px)
```

### Icon-Boxen

**Feature Icon-Box**:
```
Icon Size: 48px
Icon Color: #16c79a
Title Font Size: 20px
Title Color: #1a1a2e
Title Font Weight: 600
Description Font Size: 16px
Description Color: #555555
Alignment: Top (Icon above text)
Spacing: 20px between icon and title
```

**Pain Point Icon-Box**:
```
Icon Size: 36px
Icon Color: #e74c3c
Title Font Size: 18px
Title Color: #1a1a2e
Title Font Weight: 600
Description Font Size: 16px
Description Color: #555555
Alignment: Left (Icon beside text)
Spacing: 15px between icon and text
```

### Testimonial-Karten

**Style**:
```
Background: #ffffff
Border: 1px solid #e0e0e0
Border Radius: 10px
Padding: 30px
Shadow: 0 2px 10px rgba(0, 0, 0, 0.05)
```

**Content**:
```
Quote Font Size: 16px
Quote Color: #555555
Quote Line Height: 1.6
Name Font Size: 18px
Name Color: #1a1a2e
Name Font Weight: 600
Job Font Size: 14px
Job Color: #16c79a
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
