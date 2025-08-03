# Game Mechanics Overview

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

_Last updated: August 3, 2025_
