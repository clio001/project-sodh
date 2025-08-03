# Website Structure Overview

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
