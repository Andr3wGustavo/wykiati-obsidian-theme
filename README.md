# Wykiati

> Premium OLED Pure Black (#000000) and Translucent Glassmorphism Theme for Obsidian.

[![Obsidian Theme](https://img.shields.io/badge/Obsidian-Theme-7C3AED.svg?style=flat-square&logo=obsidian&logoColor=white)](https://obsidian.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-30D158.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-0A84FF.svg?style=flat-square)](manifest.json)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-FFDD00.svg?style=flat-square&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/wykiati)

---

## Overview

Wykiati is a high-contrast, glassmorphism theme engineered for OLED displays and modern desktop and mobile workflows. It combines a solid pitch-black (`#000000`) foundation with subtle starry ambient lighting, hardware-accelerated glass translucency, custom typography (Figtree and JetBrains Mono), and full customization via the Obsidian Style Settings plugin.

---

## Architectural Highlights

### 1. Solid OLED Black (#000000) Foundation
The editor canvas and workspace use a true `#000000` base, delivering zero pixel emission on OLED displays while maintaining subtle starry background illumination.

### 2. Glassmorphism & Surface Depth
Translucent surfaces, sidebars, modals, and navigation panels utilize hardware-accelerated `backdrop-filter: blur()` combined with fine borders and layered depth.

### 3. Interactive RGB Color Customization
Through Style Settings, users can customize the exact hex/RGB color of:
- App Background Color
- Primary Accent Color
- Border and Guide Line Colors
- Graph View Nodes and Link Lines

---

## Key Features

- **Starry Background Illumination**: Subtle background noise with specular lighting filter.
- **Glassmorphism Callouts**: Multiple visual styles with lateral accent indicators.
- **Code Blocks**: Dedicated dark surface container with language flair badges and 9 bundled syntax themes.
- **Extended Task Checkboxes**: Native support for custom task status glyphs (`- [!]`, `- [?]`, `- [*]`, `- [i]`, etc.).
- **Typography**: Built-in Figtree and JetBrains Mono font support.
- **Mobile Optimization**: Single-row compact toolbar layout and fluid touch interactions across iOS and Android.

---

## Installation

### Method 1: Obsidian Community Themes (Recommended)
1. In Obsidian, open **Settings** (`Ctrl+,` or `Cmd+,`).
2. Navigate to **Appearance** > **Themes** > **Manage**.
3. Search for `Wykiati`.
4. Click **Install and apply**.

### Method 2: Manual Installation
1. Download `theme.css` and `manifest.json` from the latest [GitHub Release](https://github.com/Andr3wGustavo/wykiati-obsidian-theme/releases).
2. Open your Obsidian Vault directory and navigate to `.obsidian/themes/`.
3. Create a folder named `Wykiati` and place `theme.css` and `manifest.json` inside.
4. In Obsidian, go to **Settings** > **Appearance** > **Theme** and select **Wykiati**.

---

## Style Settings Configuration

Wykiati integrates with the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin to provide the following configuration controls:

- **Colors & Palettes**:
  - Color presets: Wykiati Glass (Default), Gruvbox, Catppuccin, Lorens, Dracula, One Dark.
  - Interactive RGB color pickers for background, accent, borders, and graph view elements.
- **Headers & Typography**:
  - Heading styles: Modern Clean, Glass Box, Lodi, Cross, Voidraizer, Outline, Dots, Neat.
  - Heading color schemas: Theme Accent, Multi-level Colors, Monochrome.
- **Callouts & Code**:
  - Callout styles: Obsidian default, Glass Robo, Lorens, Glow, and regional presets.
  - Syntax Highlighting: Glass Robo, Dracula, One Dark, Catppuccin Frappe/Macchiato/Mocha, Halcyon, GitHub Dark, Tokyo Night.
- **Interface & Auto-Hide**:
  - Auto-hide options for Tab bar, Status bar, and Ribbon.
  - Mobile single-row toolbar layout and vertical offset adjustment.

---

## Compatibility

| Platform | Live Preview | Reading View | Canvas | Graph View | Mobile |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Windows** | Supported | Supported | Supported | Supported | — |
| **macOS** | Supported | Supported | Supported | Supported | — |
| **Linux** | Supported | Supported | Supported | Supported | — |
| **iOS** | Supported | Supported | Supported | Supported | Supported |
| **Android** | Supported | Supported | Supported | Supported | Supported |

---

## Development

```bash
# Clone repository
git clone https://github.com/Andr3wGustavo/wykiati-obsidian-theme.git
cd wykiati-obsidian-theme

# Install dependencies
npm install

# Watch mode for live development
npm run dev

# Build production bundle
npm run build
```

---

## Support & Donation

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/wykiati)

- Star the project on [GitHub](https://github.com/Andr3wGustavo/wykiati-obsidian-theme)
- Report issues and suggestions on [GitHub Issues](https://github.com/Andr3wGustavo/wykiati-obsidian-theme/issues)

---

## License & Credits

- Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
- Base architectural foundation and assets derived from [Glass Robo](https://github.com/lorens-osman-dev/Glass-Robo) by **Lorens Osman** and **Daniel (@Avesend)**.
- Bundled Fonts: [Figtree](https://github.com/erikdkennedy/figtree) (OFL) by Erik Kennedy, [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) (OFL) by JetBrains.
