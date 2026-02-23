# 🥘 Persian Delights: A Culinary Journey

Welcome to **Persian Delights**, a modular, static Persian Recipe Blog designed to showcase the beauty and complexity of Persian cuisine through a clean, modern, and developer-friendly architecture.

This project focuses on the intersection of **Traditional Flavors** and **Modern Web Standards**, providing a structured way to manage recipes and kitchen tool information using a Node.js-style project organization.

---

## 📖 Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Cuisine Highlights](#cuisine-highlights)
- [Project Documentation](#project-documentation)

---

## 🌟 Overview

The **Persian Delights** blog is more than just a list of recipes; it is a demonstration of how to organize a "basic static" project using professional modular patterns. By separating concerns into components, styles, and data, the project remains scalable and easy to maintain.

### Vision
To provide a stunning, high-performance static blog that honors Persian heritage while providing a robust foundation for future expansion into a full-scale web application.

---

## ✨ Key Features

- **Modular Project Structure**: Clean separation of HTML components, CSS styles, and JSON data.
- **Node.js Ready**: Includes a `package.json` for dependency management and an `index.js` entry point.
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox.
- **Rich Aesthetics**: A warm, curated color palette inspired by pomegranate and saffron.
- **Data-Driven**: Content management via structured JSON files (`recipes.json`, `tools.json`).

---

## 🏗 Architecture & Folder Structure

The project follows a modular design pattern common in modern Node.js environments.

```text
KitchenShop/images/
├── src/
│   ├── components/       # Reusable HTML fragments
│   │   ├── header.html   # Main header with branding
│   │   └── footer.html   # Standard footer
│   ├── styles/           # Modular CSS Architecture
│   │   ├── variables.css # Theme tokens (colors, fonts)
│   │   ├── reset.css     # CSS Reset for consistency
│   │   └── main.css      # Main entry for styles
│   └── data/             # Content Content management
│       ├── recipes.json  # Featured Persian recipes
│       └── tools.json    # Essential kitchen tools
├── index.html            # Main landing page entry
├── index.js              # Node.js logic/assembly simulation
└── package.json          # Project metadata and scripts
```

---

## 🛠 Tech Stack

- **HTML5**: Semantic markup for better SEO and accessibility.
- **Vanilla CSS**: Custom property-based design system with modular files.
- **JSON**: Lightweight data interchange for recipe and tool content.
- **Node.js**: Underlying environment for project initialization and future scripting.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 14 or higher recommended)
- A modern web browser (Chrome, Firefox, Safari)

### Installation
1. Clone or download the repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd "KitchenShop/images"
   ```
3. Initialize dependencies:
   ```bash
   npm install
   ```

### Usage
- To view the blog, simply open `index.html` in your favorite web browser.
- To simulate the Node.js data loading engine, run:
   ```bash
   node index.js
   ```

---

## 🥙 Cuisine Highlights

This project currently features the following staples of Persian cooking:

### Featured Recipes
1. **Ghormeh Sabzi**: Often considered the national dish, this herb-heavy stew is a complex balance of flavors.
2. **Zereshk Polo**: A celebration of scent and color, marrying high-quality saffron rice with tart barberries.
3. **Tahdig**: The legendary "bottom of the pot" crispy rice that requires skill and the right equipment to master.

### Essential Tools
- **Non-stick Pot**: The "secret weapon" for the perfect Tahdig.
- **Saffron Grinder**: Essential for releasing the full aroma of the world's most expensive spice.
- **Skimmer Spoon**: Designed for the delicate handling of long-grain basmati rice.

---

## 📝 License
This project is licensed under the **ISC License**. See the `package.json` for details.

---

*“Food is our common ground, a universal experience.” — James Beard*
