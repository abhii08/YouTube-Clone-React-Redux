# YouTube Clone

A fully functional YouTube clone built with React.js and the YouTube Data API v3. Features video browsing, search functionality, video playback, and a responsive interface that closely mimics YouTube's design.

## 🚀 Features

- **Video Browsing**: Browse trending and popular videos on the homepage
- **Search Functionality**: Search for videos with real-time results
- **Video Playback**: Watch videos with embedded YouTube player
- **Recommended Videos**: Get video recommendations based on current video
- **Infinite Scroll**: Seamless loading of more videos as you scroll
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Data**: Fetches live data from YouTube API including views, likes, and channel info
- **Modern UI**: Clean, modern interface matching YouTube's aesthetic

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework with hooks
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Icons** - Comprehensive icon library
- **React Infinite Scroll Component** - Infinite scrolling functionality

### API
- **YouTube Data API v3** - For fetching video data, channel info, and search results

### Build Tools
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code linting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- YouTube Data API v3 key from Google Cloud Console
- Git

### Get YouTube API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Copy your API key for use in the project

### Clone and Setup
```bash
git clone https://github.com/abhii08/youtube-clone-react-redux.git
cd youtube-clone
```

### Install Dependencies
```bash
npm install
```

### Environment Setup
Create a `.env` file in the root directory:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### Start Development Server
```bash
npm run dev
```
The application will run on `http://localhost:5173`

## 🏗️ Project Structure

```
youtube-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Card.jsx              # Video card component
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── SearchCard.jsx        # Search result card
│   │   ├── Sidebar.jsx           # Left sidebar navigation
│   │   └── Spinner.jsx           # Loading spinner
│   ├── features/
│   │   └── youtube/
│   │       └── youtubeSlice.js   # Redux slice for YouTube data
│   ├── hooks/
│   │   └── useApp.jsx            # Custom hooks for Redux
│   ├── pages/
│   │   ├── Home.jsx              # Homepage with video grid
│   │   ├── Search.jsx            # Search results page
│   │   └── Watch.jsx             # Video player page
│   ├── store/
│   │   ├── configureStore.jsx    # Redux store configuration
│   │   └── reducer/
│   │       ├── getHomePageVideos.jsx
│   │       ├── getRecommendedVideo.js
│   │       ├── getSearchPageVideos.js
│   │       └── getVideoDetails.js
│   ├── utils/
│   │   ├── convertRawtoString.js # Format large numbers
│   │   ├── parseData.js          # Parse API response data
│   │   ├── parseRecommendedData.js
│   │   ├── parseVideoDuration.js # Format video duration
│   │   └── timeSince.js          # Calculate time ago
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Key Features Breakdown

### Homepage
- Displays trending videos in a responsive grid layout
- Infinite scroll for loading more videos
- Video thumbnails with duration overlay
- Channel information and video metadata

### Search Functionality
- Real-time search with YouTube Data API
- Search results displayed in list format
- Detailed video information including descriptions
- Search term persistence in URL

### Video Player
- Embedded YouTube iframe player
- Video details including title, description, views, and likes
- Channel information with subscriber count
- Recommended videos sidebar

### Data Management
- Redux Toolkit for centralized state management
- Async thunks for API calls
- Proper error handling and loading states
- Data parsing and formatting utilities

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 API Integration

The application integrates with YouTube Data API v3 for:

### Video Search
- Search videos by keyword
- Get video metadata (title, description, thumbnail)
- Channel information
- View counts and engagement metrics

### Video Details
- Detailed video information
- Statistics (views, likes, duration)
- Channel subscriber count
- Related video suggestions

### Data Processing
- Duration formatting (PT1H2M10S → 1:02:10)
- View count formatting (1500000 → 1.5M)
- Time calculation (published date → "2 days ago")

## 📱 Responsive Design

- **Desktop**: Full-width layout with sidebar
- **Tablet**: Optimized grid layout
- **Mobile**: Single column layout with touch-friendly navigation

## 🎨 UI/UX Features

- **Dark Theme**: YouTube-style dark interface
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Spinners during data fetching
- **Error Handling**: Graceful error management
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Environment Variables
Ensure your API key is configured in your deployment platform:
- `VITE_YOUTUBE_API_KEY=your_api_key`

## 🔐 API Rate Limits

YouTube Data API v3 has quota limits:
- **Free Tier**: 10,000 units/day
- **Search**: 100 units per request
- **Video Details**: 1 unit per request

Monitor usage in [Google Cloud Console](https://console.cloud.google.com/).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by [Your Name]

## 🐛 Known Issues

- Recommended videos API endpoint may have limited functionality
- Some videos may not be embeddable due to restrictions
- API quota limits may affect heavy usage

## 🔮 Future Enhancements

- [ ] User authentication and playlists
- [ ] Comments system
- [ ] Video upload functionality
- [ ] Live streaming support
- [ ] Progressive Web App (PWA) features
- [ ] Offline video caching
- [ ] Advanced search filters
- [ ] Subscription management
- [ ] Dark/Light theme toggle
- [ ] Video quality selector

## 🙏 Acknowledgments

- YouTube Data API v3 for providing comprehensive video data
- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- All open source contributors

---

**Note**: This is a clone application for educational purposes and is not affiliated with YouTube or Google. Ensure compliance with YouTube's Terms of Service when using their API.
