# DBS JSON Schema Documentation

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
