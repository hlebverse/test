// src/App.jsx
import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Навигационная панель */}
      <nav className="bg-gray-800 p-4 shadow-lg flex space-x-6">
        <Link to="/" className="text-white hover:text-blue-400">
          Главная
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-400">
          О проекте
        </Link>
      </nav>

      {/* Контейнер для страниц */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={<h1 className="p-8 text-red-500">404: Не найдено</h1>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
