# Game Manual

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

_Last updated: August 3, 2025_
