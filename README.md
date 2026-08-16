# Wykiati

> Premium OLED Pure Black (#000000) and Translucent Glassmorphism Theme for Obsidian.

[![Obsidian Theme](https://img.shields.io/badge/Obsidian-Theme-7C3AED.svg?style=flat-square&logo=obsidian&logoColor=white)](https://obsidian.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-30D158.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-0A84FF.svg?style=flat-square)](manifest.json)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-FFDD00.svg?style=flat-square&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/wykiati)

---

## Overview

Wykiati is a high-contrast, distraction-free theme engineered specifically for OLED displays and modern desktop and mobile workflows. It combines a true pitch-black (`#000000`) foundation with hardware-accelerated glassmorphism, refined typography, and full customization via the Obsidian Style Settings plugin.

![Wykiati Theme Preview](screenshot.png)

---

## Architectural Principles

### 1. True OLED Black Canvas
The entire editor, workspace background, and primary views use `#000000`. This eliminates pixel illumination on OLED screens, reduces power consumption on mobile devices, and prevents visual fatigue during extended writing sessions.

### 2. Surface Elevation Hierarchy
Depth is created through calibrated alpha channels, subtle hairline borders, and hardware-accelerated `backdrop-filter` blurs rather than muddy grey solid backgrounds:
- **Surface 0 (`--theme-surface-0`)**: `#000000` (Editor canvas, base layout)
- **Surface 1 (`--theme-surface-1`)**: `rgba(14, 14, 16, 0.72)` (Sidebars, ribbon, status bar)
- **Surface 2 (`--theme-surface-2`)**: `rgba(22, 22, 26, 0.68)` (Modals, cards, floating palettes)
- **Surface 3 (`--theme-surface-3`)**: `rgba(34, 34, 40, 0.60)` (Dropdown menus, elevated controls)
- **Borders (`--theme-border`)**: `rgba(255, 255, 255, 0.08)` hairline definition

### 3. Dynamic Accent System
The entire UI color scheme is driven by the master CSS variable `--color-accent: var(--theme-accent, #30d158)`. Changing this token dynamically recalculates highlights, active states, focus indicators, and interactive surfaces across the whole application.

---

## Key Features

- **Command Palette & Quick Switcher**: Suspended glass modal with 18px rounded corners, borderless search input, keycap badges, and distinctive active item indicator.
- **Translucent Tabs**: Subtle pill tabs with elevation highlight on active state and integrated circular close button.
- **Glassmorphism Callouts**: Tinted translucent containers with emissive lateral accent indicators and balanced contrast icons.
- **Code Blocks**: Dedicated dark surface container (`#0c0c10`) with language flair badges, smooth copy button feedback, and 7 bundled syntax highlight themes.
- **Metadata Properties**: Frontmatter cards styled with clean borders and tag pills.
- **Custom Checkboxes & Task Glyphs**: Smooth toggle switches and native support for extended task status indicators (`- [!]`, `- [?]`, `- [*]`, `- [i]`, etc.).
- **Mobile Optimized**: Single-row compact toolbar option, fluid sheet drawers, and comfortable touch targets across iOS and Android.

---

## Installation

### Method 1: Obsidian Community Themes (Recommended)
1. In Obsidian, open **Settings** (`Ctrl+,` or `Cmd+,`).
2. Navigate to **Appearance** > **Themes** > **Manage**.
3. Search for `Wykiati`.
4. Click **Install and apply**.

### Method 2: Manual Installation
1. Download `theme.css` and `manifest.json` from the latest [GitHub Release](https://github.com/Andr3wGustavo/wykiati-obsidian-theme/releases).
2. Open your Obsidian Vault root directory and navigate to `.obsidian/themes/`.
3. Create a folder named `Wykiati` and place `theme.css` and `manifest.json` inside.
4. In Obsidian, go to **Settings** > **Appearance** > **Theme** and select **Wykiati**.

---

## Style Settings Configuration

Wykiati provides comprehensive customization options through the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin:

- **Color Scheme Presets**:
  - Wykiati Emerald (Default)
  - Cyber Cyan
  - Neon Violet
  - Solar Amber
  - Crimson Rose
  - Monochrome Minimal
  - Gruvbox OLED
  - Catppuccin Mocha OLED
  - Dracula OLED
  - One Dark OLED
  - Lorens Space
- **Custom Accent Color**: Full hex/RGB color picker override.
- **Custom App Background**: Custom background override (default `#000000`).
- **Focus Mode**: Automatically dims sidebars and toolbars while typing in the editor.
- **Heading Styles**: Modern Clean, Glass Box, Lodi Underline, Neat Pill, Outline, Dots, Cross.
- **Callout Styles**: Wykiati Modern Glass, Floating Title, Glow Accent, Minimal Outline.
- **Code Block Syntax Themes**: Wykiati Neon, Tokyo Night, GitHub Dark, Catppuccin Mocha, Dracula, One Dark, Halcyon.
- **Auto-Hide Toggles**: Independent hover-to-show options for Tab bar, Status bar, and Left ribbon.
- **Mobile Toolbar**: Single-row compact layout toggle and vertical pixel offset slider.

---

## Platform Compatibility

| Platform | Live Preview | Reading View | Canvas | Graph View | Mobile Support |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Windows 10 / 11** | Supported | Supported | Supported | Supported | — |
| **macOS** | Supported | Supported | Supported | Supported | — |
| **Linux** | Supported | Supported | Supported | Supported | — |
| **iOS / iPadOS** | Supported | Supported | Supported | Supported | Supported |
| **Android** | Supported | Supported | Supported | Supported | Supported |

---

## Development

To build the theme from source:

```bash
# Clone repository
git clone https://github.com/Andr3wGustavo/wykiati-obsidian-theme.git
cd wykiati-obsidian-theme

# Install dependencies
npm install

# Start development build with file watching
npm run dev

# Compile production minified CSS bundle
npm run build
```

---

## Support

If you find Wykiati valuable for your daily note-taking and knowledge workflows, you can support ongoing maintenance and feature development:

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/wykiati)

- Star the project on [GitHub](https://github.com/Andr3wGustavo/wykiati-obsidian-theme)
- Report issues and feature requests on the [GitHub Issue Tracker](https://github.com/Andr3wGustavo/wykiati-obsidian-theme/issues)

---

## License & Credits

- Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
- Base architectural foundations and SVG asset mappings derived from [Glass Robo](https://github.com/lorens-osman-dev/Glass-Robo) by **Lorens Osman** and **Daniel (@Avesend)**.
- Bundled Fonts: [Figtree](https://github.com/erikdkennedy/figtree) (OFL) by Erik Kennedy, [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) (OFL) by JetBrains.
