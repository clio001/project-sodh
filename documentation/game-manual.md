# RetroBites

## Table of Contents

- [Game Manual Section](#game-manual-section)
- [Game Mechanics Overview](#game-mechanics-overview)
- [Website Structure Overview](#website-structure-overview)
- [DBS JSON Schema Documentation](#dbs-json-schema-documentation)

---

This manual provides a comprehensive overview of the game mechanics, website structure, state variable usage, and JSON file schemas for the RetroBites web application. It is intended to help developers, designers, and players understand how the game operates and how its data is organized and managed.

---

## Game Mechanics

RetroBites is an interactive web game that immerses players in a culinary journey through historical Berlin. The core mechanics revolve around exploration, collection, and achievement:

- **XP (Experience Points):** Players earn XP by visiting new scenes (+10 XP per unique scene) and collecting items or journal entries (+25 XP per new item or entry). XP is tracked in the `player.xp` state variable and drives progression and achievement.

- **Items:** Items represent collectible objects, such as historical menu cards. Players collect items by interacting with UI elements (e.g., Chips) in scenes. Collected item IDs are stored in `player.inventory.items`, and items are displayed in the player's inventory for review and further interaction.

- **Journal Entries:** These provide story background, hints, or information. Like items, journal entries are collected by interacting with scene elements and stored in `player.inventory.journalEntries`. They enrich the narrative and may be required to access certain scenes.

- **Badges:** Badges are achievement rewards for reaching milestones, such as earning enough XP or collecting a set number of items. When conditions are met, badge IDs are added to `player.inventory.badges`, and badges are displayed in the inventory. Earning a badge may trigger congratulatory messages (e.g., HeinziBlurb).

All player progress is managed in the `player` state variable, which includes XP, level, visited scenes, and inventory (items, journal entries, badges). The state is globally accessible via React Context (`ContextProvider`).

---

## Website Structure

The website is organized using Next.js App Router conventions, with a clear separation of routes, layouts, and reusable components:

- **Root Files:** `layout.jsx`, `page.jsx`, `globals.css`, and `page.module.css` define the base layout, main page, and global styles.
- **Components Folder:** Contains reusable React components such as `Statbar`, `BadgesBox`, `TabsBox`, `ObjectsBox`, `EntriesBox`, `GrammoBox`, `HeinziBlurb`, `Typewriter`, `MusicPlayer`, and `XpCheckHeinzi`. These components are used throughout the site to build the UI and manage game logic.
- **Routes:** Subfolders like `main/`, `credits/`, and `sammlung/` represent different pages/routes, each with their own layout and content files. For example, `main/page.jsx` is the main game interface, integrating components like `Statbar`, `XpCheckHeinzi`, and `Typewriter`.

A hierarchical tree diagram best visualizes the structure, showing how components are nested and which components use others. For example, `main/page.jsx` uses `Statbar`, which in turn uses `MusicPlayer`, `BadgesBox`, and `TabsBox` (which itself uses `ObjectsBox`, `EntriesBox`, and `GrammoBox`).

---

## State Variable Usage

State management is centralized in the `ContextProvider`, which exposes variables and setters via React Context. Key state variables include:

- `player`: Tracks XP, level, visited scenes, and inventory.
- `scene`: Stores all game scenes.
- `inventoryItems`: Stores all collectible items.
- `inventoryEntries`: Stores all journal entries.
- `inventoryBadges`: Stores all badges.
- `level`, `flash`: Used for UI and game logic.

A table is used to map which components consume which state variables. For example, `player` is used by `Statbar`, `BadgesBox`, `TabsBox`, `ObjectsBox`, `EntriesBox`, `XpCheckHeinzi`, `HeinziBlurb`, and `main/page.jsx`. Setters like `setPlayer` are used in components that update the player's state.

---

## JSON File Schemas

Game data is stored in JSON files in the `dbs` folder, each with a well-defined schema:

- **db-scenes.json:** Defines all game scenes, including metadata, images, options, items, and requirements. Imported to the `scene` state variable.
- **db-journal.json:** Defines journal entries with IDs, names, descriptions, and images. Imported to `journalEntries`.
- **db-items.json:** Defines items with metadata such as PPN, manifest URL, title, creator, place, publisher, and year. Imported to `inventoryItems`.
- **db-badges.json:** Defines badges with IDs, names, congratulatory messages, colors, and optional images. Imported to `inventoryBadges`.

Each file uses an array of objects as its top-level structure, with unique IDs for cross-referencing. Images and manifests enable rich media presentation in the game.

---

## Summary

RetroBites combines exploration, collection, and achievement in a structured web application. The game mechanics reward player progress, the website structure supports modular development, and state management ensures a seamless experience. JSON schemas provide a flexible foundation for game data, enabling easy expansion and customization.

---

## Game Mechanics Overview

This document explains the main game mechanics for the website, including how players earn XP, collect items, journal entries, and badges, and how these are stored in the application state.

---

## Earning XP

- **XP (Experience Points)** are awarded to the player for specific actions:
  - **Visiting a new scene:** +10 XP for each unique scene visited (no double XP for repeat visits).
  - **Collecting an item or journal entry:** +25 XP for each new item or journal entry added to the player's inventory.
- XP is stored in the `player` state variable as `player.xp`.

---

## Collecting Items

- **Items** represent collectible objects (e.g., historical menu cards).
- Items are referenced by their IDs in scenes and can be collected by clicking on corresponding UI elements (e.g., Chips).
- When collected, the item's ID is added to `player.inventory.items` (an array).
- Items are displayed in the player's inventory and can be viewed in detail.

---

## Collecting Journal Entries

- **Journal entries** provide story background, hints, or information.
- Journal entries are referenced by their IDs in scenes and can be collected by clicking on corresponding UI elements.
- When collected, the entry's ID is added to `player.inventory.journalEntries` (an array).
- Journal entries are displayed in the player's inventory and can be viewed in detail.

---

## Earning Badges

- **Badges** are achievement rewards for reaching milestones (e.g., earning enough XP or collecting a certain number of items).
- Badges are referenced by their IDs and awarded automatically when conditions are met (e.g., XP threshold, item count).
- When earned, the badge's ID is added to `player.inventory.badges` (an array).
- Badges are displayed in the player's inventory and may trigger congratulatory messages (e.g., HeinziBlurb).

---

## State Storage

- All player progress is stored in the `player` state variable, which includes:
  - `xp`: Current experience points.
  - `level`: Current player level.
  - `scenesVisited`: Array of scene IDs the player has visited.
  - `inventory`: Object containing:
    - `items`: Array of collected item IDs.
    - `journalEntries`: Array of collected journal entry IDs.
    - `badges`: Array of earned badge IDs.
- The state is managed globally via React Context (`ContextProvider`) and is accessible to all components.

---

## Summary

- Players progress by visiting scenes, collecting items and journal entries, and earning badges.
- All progress is tracked in the `player` state and reflected in the UI.
- XP and achievements drive the player's advancement and unlock new content.

---

## Website Structure Overview

This document provides two visualizations:

1. **Component Usage Tree**: Which components use which other components.
2. **State Variable Consumption Table**: Which state variables are consumed by which components.

---

## 1. Component Usage Tree

```
app/
├── layout.jsx
│   └── ContextProvider
│       └── provides context to all children
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
│   ├── ContextProvider (provides context)
│   ├── Statbar (see above)
│   ├── BadgesBox (see above)
│   ├── TabsBox (see above)
│   ├── ObjectsBox
│   ├── EntriesBox
│   ├── GrammoBox
│   ├── HeinziBlurb (see above)
│   ├── Typewriter (see above)
│   ├── MusicPlayer
│   └── XpCheckHeinzi (see above)
├── credits/page.jsx
├── sammlung/page.jsx
```

---

## 2. State Variable Consumption Table

| State Variable   | Consumed By Components                                                                         |
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

---

_Last updated: August 3, 2025_

---

## DBS JSON Schema Documentation

This document describes the schema and purpose of each JSON file in the `dbs` folder of the project.

---

## db-scenes.json

**Imported to state variable:** `scene`

**Description:**
Stores all game scenes, including their metadata, images, available options, and requirements. Each scene represents a location or event in the game and can reference items, journal entries, or other scenes.

**Schema:**

- `id` (number): Unique identifier for the scene.
- `avatar` (string): URL to the avatar image for the scene.
- `location` (string): Name of the location.
- `imageUrl` (string): URL to the main image for the scene.
- `description` (string): Scene description text.
- `options` (array): List of options for the player, each with:
  - `text` (string): Option label.
  - `nextSceneId` (number): ID of the scene to go to next.
- `items` (array, optional): IDs of items associated with the scene.
- `required` (object, optional): Requirements for accessing the scene, e.g. journal entry or refused scene ID.

**Special Features:**

- Scenes can require journal entries or refuse access based on previous choices.
- Scenes can grant items to the player.

---

## db-journal.json

**Imported to state variable:** `journalEntries`

**Description:**
Stores journal entries that the player can collect or unlock. Each entry provides information, hints, or story background.

**Schema:**

- `id` (string): Unique identifier for the journal entry.
- `name` (string): Title of the journal entry.
- `description` (string): Main text/content of the entry.
- `image` (string): URL to an image representing the entry.

**Special Features:**

- Journal entries can be referenced by scenes or items.
- Entries may include images for visual storytelling.

---

## db-items.json

**Imported to state variable:** `inventoryItems`

**Description:**
Stores collectible items in the game, such as menu cards or objects. Each item has metadata and can be referenced by scenes or player inventory.

**Schema:**

- `id` (string): Unique identifier for the item.
- `ppn` (string): PPN (Persistent Personal Number) for library objects.
- `manifest` (string): IIIF manifest URL for digital objects.
- `title` (string): Item title.
- `creator` (string): Creator or author of the item.
- `place` (string): Place of origin.
- `publisher` (string): Publisher name.
- `year` (string): Year of creation or publication.

**Special Features:**

- Items can be linked to IIIF manifests for rich digital presentation.
- Items are referenced by scenes and player inventory.

---

## db-badges.json

**Imported to state variable:** `inventoryBadges`

**Description:**
Stores achievement badges that players can earn. Each badge has a name, description, color, and optional image.

**Schema:**

- `id` (string): Unique identifier for the badge.
- `name` (string): Badge name/title.
- `Heinzi` (string): Custom congratulatory message.
- `color` (string): Badge color (for UI display).
- `imageUrl` (string): URL to badge image (optional).

**Special Features:**

- Badges provide feedback and rewards for player progress.
- Each badge includes a custom message for the player.

---

## Notes

- All files use arrays of objects as their top-level structure.
- IDs are unique within each file and are used for cross-referencing between scenes, items, journal entries, and badges.
- Images and manifests are used for rich media presentation in the game.

---

_Last updated: August 3, 2025_
