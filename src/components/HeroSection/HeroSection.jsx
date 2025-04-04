import { useState, useEffect } from "react";

const popularAnimes = [
  {title: "Naruto", image: "/popular/naruto-gen.jpg"},
  {title: "My Hero Academia", image: "/popular/heroaca.png"},
  {title: "Haikyu!!", image: "/popular/haikyu-vs.jpg"},
  {title: "One Piece", image: "/popular/one-piece-new.jpeg"},
]

const HeroSection = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextAnime()
    }, 5000);

    return () => clearInterval(interval)
  }, [index])

  const nextAnime = () => {
    setIndex((prev) => (prev + 1) % popularAnimes.length)
  }

  const prevAnime = () => {
    setIndex((prev) => (prev - 1 + popularAnimes.length) % popularAnimes.length)
  }

  return (
    <div className="relative w-full h-[500px] bg-gray-900 text-white">
      {/* Popular Anime */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
        <img 
          src={popularAnimes[index].image} 
          alt={popularAnimes[index].title}
          className="w-full h-full object-cover opacity-50"
        />
        <h1 className="left-10 bottom-20 absolute text-5xl font-bold">{popularAnimes[index].title}</h1>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevAnime}
        className="
          absolute 
          left-4 
          top-1/2 
          transform -translate-y-1/2 
          bg-gray-800 
          p-3 
          rounded-2xl 
          hover:bg-gray-700"
      >
        ◀
      </button>
      <button
        onClick={nextAnime}
        className="
          absolute 
          right-4 
          top-1/2 
          transform -translate-y-1/2 
          bg-gray-800 
          p-3 
          rounded-2xl 
          hover:bg-gray-700"
      >
        ▶
      </button>

      {/* Thumbnail Slider */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {popularAnimes.map((anime, i) => (
          <img 
            key={i}
            src={anime.image} 
            alt={anime.title}
            className={`w-10 h-10 rounded-lg cursor-pointer transition-all ${
              i === index ? "border-2 border-green-400 scale-110" : "opacity-50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;