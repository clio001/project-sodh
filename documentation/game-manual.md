# RetroBites

## Inhaltsverzeichnis

- [Game Manual Abschnitt](#game-manual-section)
- [Übersicht Spielmechanik](#game-mechanics-overview)
- [Übersicht Website-Struktur](#website-structure-overview)
- [DBS JSON Schema Dokumentation](#dbs-json-schema-documentation)

Dieses Handbuch bietet einen umfassenden Überblick über die Spielmechanik, die Website-Struktur, die Verwendung von State-Variablen und die JSON-Datei-Schemas der RetroBites-Webanwendung. Es soll Entwicklern, Designern und Spielern helfen zu verstehen, wie das Spiel funktioniert und wie die Daten organisiert und verwaltet werden.

## Spielmechanik

RetroBites ist ein interaktives Webspiel, das die Spieler auf eine kulinarische Reise durch das historische Berlin mitnimmt. Die zentralen Mechaniken drehen sich um Erkundung, Sammlung und Errungenschaften:

**XP (Experience Points):** Spieler erhalten XP, indem sie neue Szenen besuchen (+10 XP pro einzigartige Szene) und Gegenstände oder Journal-Einträge sammeln (+25 XP pro neuen Gegenstand oder Eintrag). XP wird in der State-Variable `player.xp` gespeichert und steuert Fortschritt und Errungenschaften.

**Items:** Items sind sammelbare Objekte, wie z.B. historische Speisekarten. Spieler sammeln Items, indem sie mit UI-Elementen (z.B. Chips) in Szenen interagieren. Gesammelte Item-IDs werden in `player.inventory.items` gespeichert und die Items werden im Inventar des Spielers angezeigt.

**Journal Entries:** Diese bieten Hintergrundgeschichte, Hinweise oder Informationen. Wie Items werden Journal-Einträge durch Interaktion mit Szenenelementen gesammelt und in `player.inventory.journalEntries` gespeichert. Sie bereichern die Erzählung und können erforderlich sein, um bestimmte Szenen zu betreten.

**Badges:** Badges sind Belohnungen für das Erreichen von Meilensteinen, z.B. genügend XP oder eine bestimmte Anzahl gesammelter Items. Wenn Bedingungen erfüllt sind, werden Badge-IDs zu `player.inventory.badges` hinzugefügt und die Badges im Inventar angezeigt. Das Erhalten eines Badges kann Glückwunsch-Nachrichten auslösen (z.B. HeinziBlurb).

Der gesamte Spielfortschritt wird in der State-Variable `player` verwaltet, die XP, Level, besuchte Szenen und Inventar (Items, Journal-Einträge, Badges) enthält. Der State ist global über React Context (`ContextProvider`) zugänglich.

## Website-Struktur

Die Website ist nach den Next.js App Router-Konventionen organisiert, mit einer klaren Trennung von Routen, Layouts und wiederverwendbaren Komponenten:

- **Root Files:** `layout.jsx`, `page.jsx`, `globals.css` und `page.module.css` definieren das Basislayout, die Hauptseite und globale Styles.
- **Components Folder:** Enthält wiederverwendbare React-Komponenten wie `Statbar`, `BadgesBox`, `TabsBox`, `ObjectsBox`, `EntriesBox`, `GrammoBox`, `HeinziBlurb`, `Typewriter`, `MusicPlayer` und `XpCheckHeinzi`. Diese Komponenten werden auf der gesamten Website verwendet, um die UI zu bauen und die Spiel-Logik zu steuern.
- **Routes:** Unterordner wie `main/`, `credits/` und `sammlung/` repräsentieren verschiedene Seiten/Routen, jede mit eigenen Layout- und Inhaltsdateien. Zum Beispiel ist `main/page.jsx` die Hauptspieloberfläche und integriert Komponenten wie `Statbar`, `XpCheckHeinzi` und `Typewriter`.

Ein hierarchisches Baumdiagramm veranschaulicht die Struktur am besten und zeigt, wie Komponenten verschachtelt sind und welche Komponenten andere verwenden. Zum Beispiel verwendet `main/page.jsx` die Komponente `Statbar`, die wiederum `MusicPlayer`, `BadgesBox` und `TabsBox` verwendet (welche wiederum `ObjectsBox`, `EntriesBox` und `GrammoBox` nutzt).

## Verwendung von State-Variablen

Das State-Management ist im `ContextProvider` zentralisiert, der Variablen und Setter über React Context bereitstellt. Wichtige State-Variablen sind:

- `player`: Verfolgt XP, Level, besuchte Szenen und Inventar.
- `scene`: Speichert alle Spielszenen.
- `inventoryItems`: Speichert alle sammelbaren Items.
- `inventoryEntries`: Speichert alle Journal-Einträge.
- `inventoryBadges`: Speichert alle Badges.
- `level`, `flash`: Für UI und Spiel-Logik verwendet.

Eine Tabelle zeigt, welche Komponenten welche State-Variablen verwenden. Zum Beispiel wird `player` von `Statbar`, `BadgesBox`, `TabsBox`, `ObjectsBox`, `EntriesBox`, `XpCheckHeinzi`, `HeinziBlurb` und `main/page.jsx` genutzt. Setter wie `setPlayer` werden in Komponenten verwendet, die den Spieler-State aktualisieren.

## JSON-Datei-Schemas

Spieldaten werden in JSON-Dateien im `dbs`-Ordner gespeichert, jede mit einem klar definierten Schema:

- **db-scenes.json:** Definiert alle Spielszenen, einschließlich Metadaten, Bildern, Optionen, Items und Anforderungen. Wird in die State-Variable `scene` importiert.
- **db-journal.json:** Definiert Journal-Einträge mit IDs, Namen, Beschreibungen und Bildern. Wird in `journalEntries` importiert.
- **db-items.json:** Definiert Items mit Metadaten wie PPN, Manifest-URL, Titel, Ersteller, Ort, Verlag und Jahr. Wird in `inventoryItems` importiert.
- **db-badges.json:** Definiert Badges mit IDs, Namen, Glückwunsch-Nachrichten, Farben und optionalen Bildern. Wird in `inventoryBadges` importiert.

Jede Datei verwendet ein Array von Objekten als oberste Struktur, mit eindeutigen IDs für die Querverweise. Bilder und Manifeste ermöglichen eine reichhaltige Medienpräsentation im Spiel.

## Zusammenfassung

RetroBites vereint Erkundung, Sammlung und Errungenschaften in einer strukturierten Webanwendung. Die Spielmechanik belohnt den Spielfortschritt, die Website-Struktur unterstützt modulare Entwicklung und das State-Management sorgt für ein nahtloses Erlebnis. JSON-Schemas bieten eine flexible Grundlage für Spieldaten und ermöglichen eine einfache Erweiterung und Anpassung.

## Übersicht Spielmechanik

Dieses Dokument erklärt die wichtigsten Spielmechaniken der Website, einschließlich wie Spieler XP verdienen, Items, Journal-Einträge und Badges sammeln und wie diese im Anwendungs-State gespeichert werden.

## XP verdienen

**XP (Experience Points)** werden dem Spieler für bestimmte Aktionen vergeben:

- **Besuch einer neuen Szene:** +10 XP für jede einzigartige besuchte Szene (keine doppelten XP für Wiederholungen).
- **Sammeln eines Items oder Journal-Eintrags:** +25 XP für jeden neuen Gegenstand oder Eintrag, der dem Inventar des Spielers hinzugefügt wird.
  XP wird in der State-Variable `player` als `player.xp` gespeichert.

## Items sammeln

**Items** sind sammelbare Objekte (z.B. historische Speisekarten).
Items werden in Szenen über ihre IDs referenziert und können durch Klicken auf entsprechende UI-Elemente (z.B. Chips) gesammelt werden.
Wenn gesammelt, wird die Item-ID zu `player.inventory.items` (ein Array) hinzugefügt.
Items werden im Inventar des Spielers angezeigt und können im Detail betrachtet werden.

## Journal-Einträge sammeln

**Journal-Einträge** bieten Hintergrundgeschichte, Hinweise oder Informationen.
Journal-Einträge werden in Szenen über ihre IDs referenziert und können durch Klicken auf entsprechende UI-Elemente gesammelt werden.
Wenn gesammelt, wird die Eintrags-ID zu `player.inventory.journalEntries` (ein Array) hinzugefügt.
Journal-Einträge werden im Inventar des Spielers angezeigt und können im Detail betrachtet werden.

## Badges verdienen

**Badges** sind Belohnungen für das Erreichen von Meilensteinen (z.B. genügend XP oder eine bestimmte Anzahl gesammelter Items).
Badges werden über ihre IDs referenziert und automatisch vergeben, wenn Bedingungen erfüllt sind (z.B. XP-Schwelle, Item-Anzahl).
Wenn verdient, wird die Badge-ID zu `player.inventory.badges` (ein Array) hinzugefügt.
Badges werden im Inventar des Spielers angezeigt und können Glückwunsch-Nachrichten auslösen (z.B. HeinziBlurb).

## Speicherung des States

Der gesamte Spielfortschritt wird in der State-Variable `player` gespeichert, die Folgendes enthält:

- `xp`: Aktuelle Erfahrungspunkte.
- `level`: Aktuelles Spielerlevel.
- `scenesVisited`: Array der besuchten Szenen-IDs.
- `inventory`: Objekt mit: - `items`: Array der gesammelten Item-IDs. - `journalEntries`: Array der gesammelten Journal-Eintrags-IDs. - `badges`: Array der verdienten Badge-IDs.
  Der State wird global über React Context (`ContextProvider`) verwaltet und ist für alle Komponenten zugänglich.

## Zusammenfassung

Spieler machen Fortschritte, indem sie Szenen besuchen, Items und Journal-Einträge sammeln und Badges verdienen.
Der gesamte Fortschritt wird im `player`-State verfolgt und in der UI angezeigt.
XP und Errungenschaften treiben den Fortschritt des Spielers voran und schalten neue Inhalte frei.

## Übersicht Website-Struktur

Dieses Dokument bietet zwei Visualisierungen:

1. **Komponenten-Baum**: Welche Komponenten verwenden andere Komponenten.
2. **State-Variablen-Tabelle**: Welche State-Variablen werden von welchen Komponenten verwendet.

## 1. Komponenten-Baum

```
app/
├── layout.jsx
│   └── ContextProvider
│       └── stellt Kontext für alle Kinder bereit
├── page.jsx (Home)
├── main/page.jsx
│   ├── Statbar
│   │   ├── MusicPlayer
│   │   ├── BadgesBox
│   │   │
│   │   └── TabsBox
│   │       ├── ObjectsBox
│   │       ├── EntriesBox
│   │       └── GrammoBox
│   ├── XpCheckHeinzi
│   │   └── HeinziBlurb
│   │       └── Typewriter
│   └── Typewriter
├── components/
│   ├── ContextProvider (stellt Kontext bereit)
│   ├── Statbar (siehe oben)
│   ├── BadgesBox (siehe oben)
│   ├── TabsBox (siehe oben)
│   ├── ObjectsBox
│   ├── EntriesBox
│   ├── GrammoBox
│   ├── HeinziBlurb (siehe oben)
│   ├── Typewriter (siehe oben)
│   ├── MusicPlayer
│   └── XpCheckHeinzi (siehe oben)
├── credits/page.jsx
├── sammlung/page.jsx
```

## 2. State-Variablen-Tabelle

| State Variable   | Verwendet von Komponenten                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| player           | Statbar, BadgesBox, TabsBox, ObjectsBox, EntriesBox, XpCheckHeinzi, HeinziBlurb, main/page.jsx |
| setPlayer        | Statbar, HeinziBlurb, main/page.jsx, XpCheckHeinzi                                             |
| scene            | main/page.jsx                                                                                  |
| setScene         | Selection                                                                                      |
| inventoryItems   | ObjectsBox, main/page.jsx                                                                      |
| inventoryEntries | EntriesBox, main/page.jsx                                                                      |
| inventoryBadges  | BadgesBox, HeinziBlurb, XpCheckHeinzi                                                          |
| level            | Selection, Statbar                                                                             |
| setLevel         | Selection                                                                                      |
| flash            | Statbar                                                                                        |
| setFlash         | main/page.jsx                                                                                  |

_Zuletzt aktualisiert: 3. August 2025_

## DBS JSON Schema Dokumentation

Dieses Dokument beschreibt das Schema und den Zweck jeder JSON-Datei im `dbs`-Ordner des Projekts.

## db-scenes.json

**Importiert in State-Variable:** `scene`

**Beschreibung:**
Speichert alle Spielszenen, einschließlich Metadaten, Bildern, verfügbaren Optionen und Anforderungen. Jede Szene repräsentiert einen Ort oder ein Ereignis im Spiel und kann Items, Journal-Einträge oder andere Szenen referenzieren.

**Schema:**

- `id` (number): Eindeutige Kennung der Szene.
- `avatar` (string): URL zum Avatar-Bild der Szene.
- `location` (string): Name des Ortes.
- `imageUrl` (string): URL zum Hauptbild der Szene.
- `description` (string): Beschreibungstext der Szene.
- `options` (array): Liste von Optionen für den Spieler, jeweils mit:
  - `text` (string): Optionsbezeichnung.
  - `nextSceneId` (number): ID der nächsten Szene.
- `items` (array, optional): IDs der mit der Szene verbundenen Items.
- `required` (object, optional): Anforderungen für den Zugang zur Szene, z.B. Journal-Eintrag oder verweigerte Szene-ID.

**Besonderheiten:**

- Szenen können Journal-Einträge erfordern oder den Zugang basierend auf vorherigen Entscheidungen verweigern.
- Szenen können dem Spieler Items gewähren.

## db-journal.json

**Importiert in State-Variable:** `journalEntries`

**Beschreibung:**
Speichert Journal-Einträge, die der Spieler sammeln oder freischalten kann. Jeder Eintrag bietet Informationen, Hinweise oder Hintergrundgeschichte.

**Schema:**

- `id` (string): Eindeutige Kennung des Journal-Eintrags.
- `name` (string): Titel des Journal-Eintrags.
- `description` (string): Haupttext/Inhalt des Eintrags.
- `image` (string): URL zu einem Bild, das den Eintrag repräsentiert.

**Besonderheiten:**

- Journal-Einträge können von Szenen oder Items referenziert werden.
- Einträge können Bilder für visuelles Storytelling enthalten.

## db-items.json

**Importiert in State-Variable:** `inventoryItems`

**Beschreibung:**
Speichert sammelbare Items im Spiel, wie z.B. Speisekarten oder Objekte. Jedes Item hat Metadaten und kann von Szenen oder dem Spielerinventar referenziert werden.

**Schema:**

- `id` (string): Eindeutige Kennung des Items.
- `ppn` (string): PPN (Persistent Personal Number) für Bibliotheksobjekte.
- `manifest` (string): IIIF-Manifest-URL für digitale Objekte.
- `title` (string): Titel des Items.
- `creator` (string): Ersteller oder Autor des Items.
- `place` (string): Herkunftsort.
- `publisher` (string): Name des Verlags.
- `year` (string): Jahr der Erstellung oder Veröffentlichung.

**Besonderheiten:**

- Items können mit IIIF-Manifests für eine reichhaltige digitale Präsentation verknüpft werden.
- Items werden von Szenen und dem Spielerinventar referenziert.

## db-badges.json

**Importiert in State-Variable:** `inventoryBadges`

**Beschreibung:**
Speichert Errungenschafts-Badges, die Spieler verdienen können. Jeder Badge hat einen Namen, eine Beschreibung, eine Farbe und ein optionales Bild.

**Schema:**

- `id` (string): Eindeutige Kennung des Badges.
- `name` (string): Badge-Name/Titel.
- `Heinzi` (string): Individuelle Glückwunsch-Nachricht.
- `color` (string): Badge-Farbe (für die UI-Anzeige).
- `imageUrl` (string): URL zum Badge-Bild (optional).

**Besonderheiten:**

- Badges bieten Feedback und Belohnungen für den Spielfortschritt.
- Jeder Badge enthält eine individuelle Nachricht für den Spieler.

## Hinweise

- Alle Dateien verwenden Arrays von Objekten als oberste Struktur.
- IDs sind innerhalb jeder Datei eindeutig und werden für Querverweise zwischen Szenen, Items, Journal-Einträgen und Badges verwendet.
- Bilder und Manifeste werden für eine reichhaltige Medienpräsentation im Spiel genutzt.

_Zuletzt aktualisiert: 3. August 2025_
