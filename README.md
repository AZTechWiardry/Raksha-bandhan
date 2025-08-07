# 🎁 Raksha Bandhan Greeting Card – React.js

A heartfelt digital greeting card made using React.js for Raksha Bandhan 💖  
This card includes a **letter with typing animation** and **background instrumental music**, making it a beautiful way to send your wishes.

---

## ✨ Features

- 💌 Message typing like a handwritten letter
- 🎶 Background instrumental music
- 📱 Fully responsive for mobile and desktop
- 💻 Built using React.js
- 🎨 Styled with inline CSS (easy customization)

---

## 📁 Folder Structure

```
raksha-bandhan-card/
├── public/
│   └── rakhi-music.mp3         # Your instrumental music file
├── src/
│   ├── components/
│   │   └── GreetingCard.jsx    # Main component
│   ├── App.jsx                 # App entry point
│   ├── main.jsx                # React DOM renderer
│   └── index.css               # Optional global styles
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/raksha-bandhan-card.git
cd raksha-bandhan-card
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Music File

Place your background music file (e.g. `rakhi-music.mp3`) inside the `public/` folder.

> ✅ Make sure the filename matches the one in the code (you can rename it to `rakhi-music.mp3` for simplicity).

### 4. Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the card.

---

## 🛠️ Customization

- ✍️ Edit the message in `GreetingCard.jsx` under `const fullMessage = ...`
- 🎵 Change the music file in `public/` and update the filename in the `<audio>` tag.
- 🎨 Modify styles via the `styles` object inside `GreetingCard.jsx`

---

## 📱 Mobile Friendly

This project is responsive and adjusts to smaller screens beautifully.

---

## ❤️ Made For Aditya Zingade



---

## 📃 License

This project is free to use and modify for personal greeting card projects. No commercial redistribution without permission.