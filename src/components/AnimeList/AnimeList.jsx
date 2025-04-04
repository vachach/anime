import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeList = ({ animes }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {animes.map((anime, index) => (
        <AnimeCard key={index} title={anime.title} image={anime.image} />
      ))}
    </div>
  );
};

export default AnimeList;