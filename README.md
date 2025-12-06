# StarLore

A constellation explorer built with React. Users can select zodiac sigils to view a NASA-based image, explore curated categories of lore, and open a fullscreen viewer to cycle through related astronomical imagery.

## Features

Clickable constellation sigils on a starfield background
Fetches astronomy images from NASA’s image library
Displays lore categories: Mythology, Astral Lore, Esotericism, Alchemy, Sacred Rites
Fullscreen image viewer with click-to-cycle behavior
Responsive layout for both large and small displays

Implements the four cardinal zodiac signs:
- Aries, Cancer, Libra, Capricorn

## Stack

| Part          | Tool                              |
|---------------|-----------------------------------|
| Frontend      | React + Vite                      |
| Assets        | Custom PNG zodiac sigils          |
| API Source    | NASA Image Library (public)       |
| Animation     | Canvas starfield background       |

Runs on modern browsers with Node 18+ recommended.

## Setup:

Clone the repository:

```
git clone https://github.com/nevinBoyd/starlore.git
cd starlore
```

Install dependencies:

```
npm install
```

Run the app:

```
npm run dev
```

The Vite server local development URL (http://localhost:5173).

## NASA Image Library Notes

API responses come from the NASA public images-api.nasa.gov endpoint.
Queries are constellation-specific (e.g., “Hamal star”, “Beehive M44 cluster”).
Data returned can vary by availability; image titles and centers may differ across searches.
No API key is required for current usage.

## Project Structure

```
src/
├── api/
│   └── fetchNASA.js
├── assets/
│   └── AstroIcons/       # Zodiac sigil PNGs
├── components/
│   ├── AriesHead.jsx
│   ├── Cancer.jsx
│   ├── Libra.jsx
│   ├── Capricorn.jsx
│   ├── ZodiacCards.jsx
│   ├── CategoryButtons.jsx
│   ├── LorePanel.jsx
│   └── StarFieldCanvas.jsx
├── data/
│   └── constellationData.js
├── pages/
│   └── StarMap.jsx
└── styles/
    └── *.css
```

### Notes

Image querying is handled by a single component (ZodiacCards.jsx) using search terms based on each sign.
Lore content is fully stored in constellationData.js and does not use any external API.
Future Enhancements:
- Add remaining eight zodiac constellations
- Optional switch for alternate star surveys or telescope imagery
- More refined scaling for fullscreen image behavior on ultra-wide displays
- Toggle for theme variations or occult/modern presentation styles

## Credits

Developed by Nevin Boyd
- Frontend: React + Vite
- Astronomy data source: NASA Image Library