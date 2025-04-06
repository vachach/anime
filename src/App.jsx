import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AnimeList from "./components/AnimeList/AnimeList";
import Footer from "./components/Footer/Footer";

const sampleAnimes = [
  { title: "Naruto", image: "/animes/naruto.jpg" },
  { title: "One Piece", image: "/animes/onepiece.jpg" },
  { title: "Attack on Titan", image: "/animes/aot.jpg" },
  { title: "Demon Slayer", image: "/animes/demonslayer.jpg" },
  { title: "Your Name", image: "/animes/yourname.jpg" },
  { title: "Frieren: Beyond Journey's End", image: "/animes/frieren.jpg" },
  { title: "Fullmetal Alchemist", image: "/animes/fullmetal.jpg" },
  { title: "My Hero Academia", image: "/animes/heroaca.jpg" },
  { title: "Gintama", image: "/animes/gintama.jpg" },
  { title: "Hunter x Hunter", image: "/animes/hxh.jpg" },
  { title: "Haikyu!!", image: "/animes/haikyu.jpg" },
  { title: "Solo Leveling", image: "/animes/sololevel.png" },
];

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen overflow-x-hidden">
        <Header />
        <HeroSection />
        <Routes>
          <Route path="/" element={<AnimeList animes={sampleAnimes} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;