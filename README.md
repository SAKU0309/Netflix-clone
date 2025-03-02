# Netflix Clone

A high-performance **Netflix Clone** built using **React + Vite**, featuring a modern UI, authentication, and movie streaming functionality.

## 🚀 Features

- **User Authentication** (Sign up, Login, Logout)
- **Browse Movies & TV Shows** (Trending, Popular, Top-Rated)
- **Search & Filter** for Content
- **Responsive UI** (Mobile & Desktop Friendly)
- **Optimized Performance with Vite**

## 📸 Screenshots

![Screenshot 2025-03-02 231308](https://github.com/user-attachments/assets/6f357fce-0028-440a-a82a-0e7dd4ef32c4)
![Screenshot 2025-03-02 231326](https://github.com/user-attachments/assets/d917a9b1-8c1f-4bf0-8dad-413ee1df9f81)
![Screenshot 2025-03-02 231350](https://github.com/user-attachments/assets/f96f58ae-88d0-4db9-8c6d-1e05fb709fef)
![Screenshot 2025-03-02 231413](https://github.com/user-attachments/assets/3824066a-3ecb-4020-a3a3-f385ff755c38)
![Screenshot 2025-03-02 231428](https://github.com/user-attachments/assets/6ae375ae-7692-492a-86b7-a3245d65e487)


## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** Redux Toolkit / Context API
- **API:** TMDB API for fetching movies & TV shows
- **Authentication:** Firebase / Auth0
- **Deployment:** Vercel 

## 📌 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAKU0309/netflix-clone.git
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


