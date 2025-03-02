# Netflix Clone

A high-performance **Netflix Clone** built using **React + Vite**, featuring a modern UI, authentication, and movie streaming functionality.

## 🚀 Features

- **User Authentication** (Sign up, Login, Logout)
- **Browse Movies & TV Shows** (Trending, Popular, Top-Rated)
- **Search & Filter** for Content
- **Responsive UI** (Mobile & Desktop Friendly)
- **Optimized Performance with Vite**

## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** Redux Toolkit / Context API
- **API:** TMDB API for fetching movies & TV shows
- **Authentication:** Firebase / Auth0
- **Deployment:** Vercel 

## 📌 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add your API keys:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎬 API Integration (TMDB)

- Sign up on [TMDB](https://www.themoviedb.org/) and get an API key.
- Use the API key to fetch movies & TV shows.
- Example API request:
  ```js
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));
  ```

## 📦 Folder Structure
```
netflix-clone/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Pages like Home, Login, Movie Details
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Entry point
├── public/            # Static assets
├── .env               # Environment variables
├── package.json       # Dependencies & scripts
└── README.md          # Project documentation
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel deploy
```

### Deploy to Netlify
```bash
npm run build
netlify deploy
```

## 👨‍💻 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Added a new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 🌟 Show Your Support
If you like this project, give it a ⭐ on GitHub!

---
**Author:** Sakshi  
**GitHub:** [@SAKU0309](https://github.com/0309)


