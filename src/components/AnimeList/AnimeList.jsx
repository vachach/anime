import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeList = ({ animes }) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {animes.map((anime, index) => (
        <AnimeCard key={index} title={anime.title} image={anime.image} href={anime.href} />
      ))}
    </div>
  );
};

export default AnimeList;