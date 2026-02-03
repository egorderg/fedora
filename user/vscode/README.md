# VS Code Custom Keybindings

A comprehensive keyboard-driven setup for VS Code with vim-like leader key prefixes.

## Prefix System

This keymap uses a **two-tier prefix system**:

- **Global**: `Alt+X` followed by key(s) — for workbench-wide actions
- **Local**: `Alt+key` — for contextual actions
- **Direct**: No prefix — for immediate actions

---

## Essentials

| Shortcut | Action |
|----------|--------|
| `Shift Shift` | Quick Open (files) |
| `Alt+Space` | Command Palette |
| `Alt+X` | Global prefix (wait for next key) |

---

## Core Navigation

### Editor Navigation

| Shortcut | Action |
|----------|--------|
| `Ctrl+PageDown` | Next recently used editor |
| `Ctrl+PageUp` | Previous least recently used editor |
| `Ctrl+Shift+PageDown` | Navigate back |
| `Ctrl+Shift+PageUp` | Navigate forward |

### Editor Groups (Direct)

| Shortcut | Action |
|----------|--------|
| `Ctrl+1` … `Ctrl+9` | Focus editor group 1–9 |
| `Ctrl+=` | Toggle maximize editor group |
| `Ctrl+\` | Split editor right |
| `Alt+\` | Split editor down |

### Editor Groups (Global: `Alt+X`)

| Shortcut | Action |
|----------|--------|
| `0` | Close editors in group |
| `1` | Close editors in other groups |
| `2` | Split editor down |
| `3` | Split editor right |

---

## 🔎 Quick Open & Navigation

| Shortcut       | Action                       |
| -------------- | ---------------------------- |
| `Shift Shift`  | Quick Open (files)           |
| `Ctrl Ctrl`    | Quick Text Search            |
| `Ctrl+E`       | Show all editors (MRU order) |
| `Ctrl+O`       | Open File                    |
| `Ctrl+Shift+O` | Open Folder                  |
| `Alt+O`        | Open Recent                  |

## 🔍 Search & Find

| Shortcut                    | Action             |
| --------------------------- | ------------------ |
| `Ctrl+F`                    | Find in editor     |
| `Ctrl+H`                    | Replace in editor  |
| `Ctrl+Shift+F Ctrl+Shift+F` | Search in Files    |
| `Ctrl+Shift+F Ctrl+Shift+E` | Open Search Editor |

## 🌱 Git

| Shortcut                    | Action              |
| --------------------------- | ------------------- |
| `Ctrl+Shift+G Ctrl+Shift+G` | Source Control View |
| `Ctrl+Shift+G Ctrl+Shift+B` | Git Checkout        |

## 🧪 Testing

| Shortcut                    | Action             |
| --------------------------- | ------------------ |
| `Ctrl+Shift+T Ctrl+Shift+T` | Show Test Explorer |
| `Ctrl+Shift+T Ctrl+Shift+R` | Run All Tests      |
| `Ctrl+Shift+T Ctrl+Shift+C` | Run Coverage       |

## 🐞 Debug & Tasks

| Shortcut                    | Action          |
| --------------------------- | --------------- |
| `Ctrl+Shift+D Ctrl+Shift+D` | Debug View      |
| `Ctrl+Shift+D Ctrl+Shift+T` | Run Task        |
| `Ctrl+Shift+D Ctrl+Shift+R` | Restart Task    |
| `Ctrl+Shift+D Ctrl+Shift+C` | Debug Configure |

## 🖥 Terminal

| Shortcut  | Action         |
| --------- | -------------- |
| `Ctrl+\\` | Split Terminal |
| `Alt+\\`  | New Terminal   |
| `Ctrl+W`  | Kill Terminal  |

## 🤖 AI

| Shortcut       | Action                  |
| -------------- | ----------------------- |
| `Ctrl+I`       | Start Inline Chat       |
| `Ctrl+Shift+I` | Open Chat in New Window |

## ✍️ Editor Basics

| Shortcut           | Action                 |
| ------------------ | ---------------------- |
| `Ctrl+A`           | Select All             |
| `Ctrl+G`           | Go to Line             |
| `Ctrl+S`           | Save All Files         |
| `Ctrl+Shift+S`     | Save As                |
| `Ctrl+W`           | Close Active Editor    |
| `Ctrl+Shift+W`     | Close Other Editors    |
| `Alt+W`            | Close Editors in Group |
| `Ctrl+Shift+T`     | Reopen Closed Editor   |
| `Ctrl+\\`          | Split Editor Right     |
| `Alt+\\`           | Split Editor Down      |
| `Ctrl+J`           | Join Lines             |
| `Ctrl+R`           | Expand Selection       |
| `Ctrl+Shift+R`     | Shrink Selection       |
| `Ctrl+\`           | Transform to UPPERCASE |
| `Ctrl+Shift+\`     | Transform to lowercase |
| `F3`               | Show Hover             |
| `Shift+F3`         | Copy Problem Message   |
| `Alt+Enter`        | Quick Fix              |
| `Ctrl+Enter`       | Insert Line After      |
| `Ctrl+Shift+Enter` | Insert Line Before     |

## 🖱 Multi-Cursor

| Shortcut          | Action                                      |
| ----------------- | ------------------------------------------- |
| `Ctrl+U`          | Cursor Undo                                 |
| `Ctrl+Shift+Up`   | Insert Cursor Above                         |
| `Ctrl+Shift+Down` | Insert Cursor Below                         |
| `Ctrl+D`          | Add Cell Find Match to Selection (Notebook) |
| `Ctrl+Shift+D`    | Add Selection to Previous Find Match        |
| `Alt+D`           | Insert Cursor at End of Each Line           |

## ↕️ Moving & Editing

| Shortcut   | Action         |
| ---------- | -------------- |
| `Alt+Up`   | Move Line Up   |
| `Alt+Down` | Move Line Down |

## 🔀 Tab / Suggestion Handling

| Shortcut    | Action                               |
| ----------- | ------------------------------------ |
| `Tab`       | Next Suggestion / Next in Quick Open |
| `Shift+Tab` | Prev Suggestion / Prev in Quick Open |

## 📑 Editor Groups

| Shortcut          | Action                 |
| ----------------- | ---------------------- |
| `Alt+1` … `Alt+9` | Focus Editor Group 1–9 |
