# Anpassungsguide - MoinLog WMS SaaS Landing Page Template

Dieser Guide zeigt Ihnen, wie Sie das Template für Ihre eigene SaaS-Lösung anpassen können.

## Inhaltsverzeichnis

1. [Grundlegende Anpassungen](#grundlegende-anpassungen)
2. [Branding & Design](#branding--design)
3. [Inhalte anpassen](#inhalte-anpassen)
4. [Erweiterte Anpassungen](#erweiterte-anpassungen)
5. [Conversion-Optimierung](#conversion-optimierung)

## Grundlegende Anpassungen

### Produktname ändern

Ersetzen Sie "MoinLog WMS" durch Ihren Produktnamen an folgenden Stellen:

1. **Hero-Überschrift**: "Skalieren Sie Ihr Geschäft mit [Ihr Produkt]"
2. **Lösungs-Sektion**: "Die Lösung: [Ihr Produkt]"
3. **Footer**: Logo und Firmenname
4. **Seiten-Titel**: In den WordPress-Seiteneinstellungen

**Tipp**: Nutzen Sie die Suchen-und-Ersetzen-Funktion in Elementor für schnelle Änderungen über alle Sektionen hinweg.

### Farben anpassen

#### Methode 1: Globale Farben (empfohlen)

1. Öffnen Sie **Elementor → Einstellungen → Global Settings**
2. Navigieren Sie zu **Global Colors**
3. Definieren Sie Ihre Brand-Farben:
   - Primary: Hauptfarbe für Überschriften und wichtige Elemente
   - Secondary: Sekundärfarbe für Akzente
   - Text: Textfarbe
   - Accent: Call-to-Action Farbe

4. Gehen Sie zurück zum Template-Editor
5. Wählen Sie Elemente aus und weisen Sie die globalen Farben zu

#### Methode 2: Individuelle Farbanpassung

Für jedes Element einzeln:
1. Klicken Sie auf das Element
2. Gehen Sie zu **Style** → **Color**
3. Wählen Sie Ihre gewünschte Farbe

### Schriftarten ändern

#### Globale Schriftarten

1. Navigieren Sie zu **Elementor → Custom Fonts**
2. Laden Sie Ihre Schriftartendateien hoch (WOFF, WOFF2, TTF)
3. Gehen Sie zu **Elementor → Global Settings → Typography**
4. Weisen Sie Ihre Schriftarten zu:
   - Primary: Hauptschriftart für Texte
   - Secondary: Schriftart für Überschriften
   - Text: Body-Text
   - Accent: Besondere Textelemente

#### Empfohlene Schriftarten-Kombinationen

**Professionell & Modern**:
- Überschriften: Montserrat Bold
- Text: Open Sans Regular

**Technisch & Klar**:
- Überschriften: Roboto Bold
- Text: Roboto Regular

**Elegant & Vertrauensvoll**:
- Überschriften: Playfair Display
- Text: Source Sans Pro

## Branding & Design

### Logo hinzufügen

1. **Header-Logo** (falls Sie einen Header hinzufügen):
   - Fügen Sie ein Image-Widget ein
   - Laden Sie Ihr Logo hoch (empfohlene Größe: 200px × 60px)
   - Verlinken Sie es mit Ihrer Homepage

2. **Footer-Logo**:
   - Ersetzen Sie das Text-Widget im Footer
   - Fügen Sie ein Image-Widget mit Ihrem Logo ein

### Hero-Bild hinzufügen

Das Template verwendet einen Gradient-Hintergrund. Um ein Bild hinzuzufügen:

1. Klicken Sie auf die Hero-Sektion
2. Gehen Sie zu **Style → Background**
3. Wählen Sie **Classic** oder **Gradient**
4. Unter **Image** laden Sie ein Bild hoch
5. Setzen Sie **Background Overlay** für bessere Lesbarkeit:
   - Color: Schwarz (#000000)
   - Opacity: 50-70%

**Tipp**: Verwenden Sie hochauflösende Bilder (mindestens 1920px breit) für beste Qualität.

### Icon-Bibliothek erweitern

Das Template nutzt Font Awesome Icons. Um mehr Icons zu nutzen:

1. Gehen Sie zu **Elementor → Custom Icons**
2. Laden Sie zusätzliche Icon-Bibliotheken hoch (z.B. Feather Icons)
3. Oder nutzen Sie Ihre eigenen SVG-Icons

## Inhalte anpassen

### Pain Points für Ihr Produkt

Ersetzen Sie die Standard-Pain-Points durch Ihre spezifischen Kundenprobleme:

1. **Recherche**: Sammeln Sie echte Kundenprobleme aus:
   - Sales-Gesprächen
   - Support-Tickets
   - Kundenbefragungen
   - Social Media Kommentaren

2. **Priorisierung**: Wählen Sie die 4 wichtigsten/häufigsten Probleme

3. **Formulierung**: 
   - Titel: Kurz und prägnant (3-5 Wörter)
   - Beschreibung: Konkret und emotional (2-3 Sätze)
   - Icon: Passend zum Problem

**Beispiel-Struktur**:
```
Titel: "[Problem in 3 Wörtern]"
Beschreibung: "[Konkrete Auswirkung]. [Emotionale Komponente]. [Zusätzliche Konsequenz]."
Icon: [Thematisch passendes Icon]
```

### Features anpassen

Passen Sie die 6 Feature-Boxen an Ihr Produkt an:

1. **Feature-Auswahl**:
   - Wählen Sie Ihre Top 6 Unique Selling Points
   - Ordnen Sie nach Wichtigkeit
   - Verknüpfen Sie jedes Feature mit einem Pain Point

2. **Feature-Beschreibung**:
   - Titel: Nutzen-orientiert (4-6 Wörter)
   - Text: Konkrete Funktionalität + Nutzen (3-4 Sätze)
   - Icon: Visuell repräsentativ

**Template pro Feature**:
```
Titel: "[Funktion] für [Nutzen]"
Text: "[Was macht es]. [Wie funktioniert es]. [Welcher konkrete Nutzen entsteht]."
```

### ROI-Zahlen aktualisieren

Ersetzen Sie die Kennzahlen mit Ihren eigenen Daten:

1. **Datenquellen**:
   - Interne Analytics
   - Case Studies
   - Kundenbefragungen
   - A/B-Tests

2. **Zahlen-Auswahl**:
   - Seien Sie ehrlich und realistisch
   - Nutzen Sie verifizierbare Daten
   - Bereiten Sie Belege vor (für Case Studies)

3. **Darstellung**:
   - Prozentangaben: 20-50% (realistisch)
   - Zeitersparnis: In Stunden pro Woche/Monat
   - Kostenreduzierung: In Prozent oder Euro
   - Effizienzsteigerung: In messbaren Einheiten

### Testimonials erstellen

Holen Sie echte Kundenbewertungen ein:

1. **Kunden auswählen**:
   - Erfolgreiche Implementierungen
   - Verschiedene Branchen/Use Cases
   - Bekannte/namhafte Firmen bevorzugen

2. **Zitat-Struktur**:
   - Problem vor der Lösung
   - Konkrete Verbesserung
   - Messbarer Erfolg
   - Persönliche Empfehlung

3. **Elemente**:
   - Zitat: 2-4 Sätze, authentisch
   - Name: Voller Name
   - Position: Jobtitel
   - Firma: Firmenname
   - Optional: Foto (150x150px, rund)
   - Optional: Firmen-Logo

**Beispiel-Template**:
```
"[Problem-Beschreibung]. Dank [Ihr Produkt] [konkrete Verbesserung]. 
[Messbare Kennzahl] und [zusätzlicher Nutzen]."
- [Name], [Position], [Firma]
```

### FAQ anpassen

Sammeln Sie häufige Fragen aus:
- Sales-Gesprächen
- Support-Anfragen
- Website-Analytics (Suchbegriffe)
- Konkurrenz-Analyse

**FAQ-Kategorien**:

1. **Preis & Kosten**:
   - "Was kostet [Ihr Produkt]?"
   - "Gibt es versteckte Kosten?"
   - "Welche Zahlungsmodelle gibt es?"

2. **Implementierung**:
   - "Wie lange dauert die Einrichtung?"
   - "Brauche ich technisches Know-how?"
   - "Wer hilft bei der Implementierung?"

3. **Sicherheit & Compliance**:
   - "Ist [Ihr Produkt] DSGVO-konform?"
   - "Wo werden Daten gespeichert?"
   - "Welche Sicherheitsmaßnahmen gibt es?"

4. **Support & Service**:
   - "Welchen Support erhalte ich?"
   - "Gibt es Schulungen?"
   - "Wie erreiche ich den Support?"

5. **Funktionalität**:
   - "Welche Integrationen gibt es?"
   - "Kann ich [spezielle Funktion] nutzen?"
   - "Ist es für meine Branche geeignet?"

6. **Vertragsdetails**:
   - "Wie lang ist die Vertragslaufzeit?"
   - "Kann ich jederzeit kündigen?"
   - "Was passiert bei Kündigung mit meinen Daten?"

## Erweiterte Anpassungen

### Call-to-Actions verlinken

Verknüpfen Sie alle CTA-Buttons mit Ihren Zielseiten:

1. **Kostenlos testen**:
   - Link: `/register` oder `/free-trial`
   - Optional: UTM-Parameter für Tracking

2. **Demo buchen**:
   - Link: `/demo` oder Calendly-Link
   - Optional: Popup mit Formular

3. **Kontakt**:
   - Link: `/contact` oder Mailto-Link
   - Optional: Live-Chat-Integration

**UTM-Parameter Beispiel**:
```
https://ihre-domain.de/register?utm_source=landingpage&utm_medium=cta&utm_campaign=hero
```

### Formulare hinzufügen

Für Lead-Generierung können Sie Formulare einfügen:

1. **Plugin installieren**:
   - Contact Form 7 (kostenlos)
   - WPForms (Pro empfohlen)
   - Gravity Forms (Premium)

2. **Formular erstellen**:
   - Name, E-Mail, Firma (Pflichtfelder)
   - Telefon, Nachricht (optional)
   - DSGVO-Checkbox

3. **Ins Template einfügen**:
   - Shortcode-Widget verwenden
   - Formular-Shortcode einfügen
   - Stylen mit Elementor

### Animationen hinzufügen

Machen Sie das Template lebendiger:

1. **Scroll-Animationen**:
   - Element auswählen
   - Advanced → Motion Effects
   - Entrance Animation wählen (Fade In, Slide Up, etc.)

2. **Hover-Effekte**:
   - Feature-Boxen: Lift-Effekt bei Hover
   - Buttons: Farbwechsel und Scale
   - Images: Zoom oder Overlay

3. **Performance beachten**:
   - Nicht mehr als 5-7 Animationen pro Seite
   - Nur auf Desktop aktivieren (Mobile kann langsam sein)

### Popups integrieren

Nutzen Sie Elementor Popups für:

1. **Exit-Intent**:
   - Trigger: Exit Intent
   - Inhalt: Spezielles Angebot
   - Ziel: Besucher halten

2. **Nach Zeit**:
   - Trigger: Nach 30 Sekunden
   - Inhalt: Newsletter-Anmeldung
   - Ziel: E-Mail sammeln

3. **Nach Scroll**:
   - Trigger: Nach 50% Scroll
   - Inhalt: Demo-Angebot
   - Ziel: Engagement erhöhen

## Conversion-Optimierung

### A/B-Testing

Testen Sie verschiedene Varianten:

1. **Headline-Varianten**:
   - Nutzen-fokussiert vs. Feature-fokussiert
   - Kurz vs. ausführlich
   - Frage vs. Aussage

2. **CTA-Button-Texte**:
   - "Kostenlos testen" vs. "30 Tage testen"
   - "Demo buchen" vs. "Live-Demo ansehen"
   - "Jetzt starten" vs. "Mehr erfahren"

3. **Color-Schemes**:
   - Button-Farben
   - Hintergrund-Farben
   - Kontraste

**Tools für A/B-Tests**:
- Google Optimize (kostenlos)
- Nelio AB Testing (WordPress Plugin)
- VWO (Premium)

### Heatmaps & Analytics

Verstehen Sie User-Verhalten:

1. **Heatmap-Tools installieren**:
   - Hotjar
   - Crazy Egg
   - Microsoft Clarity (kostenlos)

2. **Analysieren**:
   - Wo klicken Nutzer?
   - Wie weit scrollen sie?
   - Wo steigen sie aus?

3. **Optimieren**:
   - CTAs an bessere Positionen verschieben
   - Unwichtige Inhalte kürzen
   - Wichtige Elemente hervorheben

### Trust-Elemente hinzufügen

Erhöhen Sie Vertrauen:

1. **Zertifikate & Badges**:
   - ISO-Zertifizierung
   - DSGVO-Konformität
   - Branchenauszeichnungen

2. **Kunden-Logos**:
   - Bekannte Marken
   - 6-12 Logos in der Testimonial-Sektion
   - Optional: Marquee-Effekt

3. **Sicherheitshinweise**:
   - SSL-Verschlüsselung
   - Datenschutz
   - Backup-Policy

### Mobile Optimierung

Optimieren Sie für mobile Geräte:

1. **Responsive-Modus testen**:
   - Elementor: Responsive Mode Icon
   - Teste auf echten Geräten

2. **Mobile Anpassungen**:
   - Schriftgrößen reduzieren (16-18px für Body)
   - Abstände verkleinern
   - Buttons größer machen (min. 44px Höhe)
   - Lange Texte kürzen

3. **Mobile-spezifische Features**:
   - Click-to-Call Buttons
   - WhatsApp-Integration
   - Vereinfachte Navigation

## Best Practices

### Do's ✅

- Nutzen Sie echte Kundendaten und Testimonials
- Testen Sie alle Links vor dem Go-Live
- Optimieren Sie Bilder für schnelle Ladezeiten
- Fügen Sie Alt-Texte zu allen Bildern hinzu
- Halten Sie die Texte prägnant und scanbar
- Nutzen Sie Whitespace für bessere Lesbarkeit
- Testen Sie auf verschiedenen Geräten und Browsern

### Don'ts ❌

- Keine Stock-Testimonials verwenden
- Nicht zu viele Animationen einbauen
- Keine zu langen Textwände
- Keine irreführenden Versprechen machen
- Nicht zu viele verschiedene Schriftarten nutzen (max. 2)
- Keine automatisch abspielenden Videos
- Keine zu aggressiven Popups

## Checkliste vor Go-Live

- [ ] Alle Texte Korrektur gelesen
- [ ] Alle Links getestet
- [ ] Alle Bilder haben Alt-Texte
- [ ] Mobile Ansicht überprüft
- [ ] CTAs verlinkt
- [ ] Analytics eingerichtet
- [ ] DSGVO-Banner integriert
- [ ] Ladezeit getestet (< 3 Sekunden)
- [ ] Cross-Browser Testing durchgeführt
- [ ] Meta-Tags gesetzt
- [ ] SSL-Zertifikat aktiv
- [ ] 404-Fehler behoben

---

**Weitere Hilfe benötigt?**  
Öffnen Sie ein Issue auf GitHub oder konsultieren Sie die [Elementor Dokumentation](https://elementor.com/help/).
