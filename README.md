# GameHub

A modern, responsive game discovery web application built with React and TypeScript. Discover, explore, and filter through thousands of games using the RAWG Video Games Database API.

## Features

- Game Discovery: Browse through a vast collection of games
- Advanced Search: Find games by title with real-time search
- Genre Filtering: Filter games by genres (Action, RPG, Strategy, etc.)
- Platform Selection: Filter by gaming platforms (PC, PlayStation, Xbox, etc.)
- Sorting Options: Sort by relevance, release date, name, or rating
- Dark/Light Mode: Toggle between themes with smooth animations
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Modern UI: Clean, accessible interface built with Chakra UI
- Fast Performance: Built with Vite for lightning-fast development and builds

## Tech Stack

- Frontend Framework: React 18
- Language: TypeScript
- UI Library: Chakra UI
- Build Tool: Vite
- HTTP Client: Axios
- API: RAWG Video Games Database
- Icons: React Icons
- Animation: Framer Motion (via Chakra UI)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/gamehub.git
   cd gamehub
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Get RAWG API Key

   - Sign up at [RAWG.io](https://rawg.io/apidocs)
   - Get your free API key
   - Create a `.env` file in the root directory:
     ```
     VITE_RAWG_API_KEY=your_api_key_here
     ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open your browser
   - Navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── Components/
│   ├── ColorModeSwitch.tsx    # Theme toggle component
│   ├── CriticScore.tsx        # Game rating display
│   ├── GameCard.tsx           # Individual game card
│   ├── GameGrid.tsx           # Games grid layout
│   ├── GameHeading.tsx        # Dynamic page headings
│   ├── GenreList.tsx          # Genre selection sidebar
│   ├── NavBar.tsx             # Main navigation
│   ├── PlatformSelector.tsx   # Platform filtering
│   ├── SearchInput.tsx        # Search functionality
│   └── SortSelector.tsx       # Sorting options
├── Hooks/
│   ├── useData.ts             # Generic data fetching hook
│   ├── useGames.ts            # Games data management
│   ├── useGenres.ts           # Genres data fetching
│   └── usePlatforms.ts        # Platforms data fetching
├── Services/
│   ├── api-client.ts          # Axios configuration
│   └── cropped-image.ts       # Image optimization utility
└── Theme/
    └── theme.ts               # Chakra UI theme configuration
```

## Usage

### Basic Navigation

- Use the hamburger menu (mobile) or sidebar (desktop) to select game genres
- Choose platforms from the dropdown to filter games
- Sort games using the sort selector
- Search for specific games using the search bar

### Theme Switching

- Click the moon/sun icon in the navbar to toggle between dark and light modes
- Your preference is automatically saved

### Mobile Experience

- On mobile devices, the genre sidebar becomes a slide-out drawer
- Access it by tapping the hamburger menu icon
- The logo is hidden on small screens for better space utilization

## API Reference

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs). Key endpoints:

- `GET /games` - Fetch games with filtering options
- `GET /genres` - Get available game genres
- `GET /platforms` - Get gaming platforms
- `GET /games/{id}` - Get detailed game information

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [RAWG Video Games Database](https://rawg.io/) for providing the game data API
- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) communities

## Contact

- **Author**: Abdullah Al Mahmud
- **LinkedIn**: [Abdullah Al Mahmud](https://www.linkedin.com/in/abdullah-al-mahmud01798/)
- **Email**: abdullahmahmud01798@gmail.com

---

Star this repo if you found it helpful!

Made with using React & TypeScript
