const AnimeCard = ({ title, image }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg text-white">
      <img src={image} alt={title} className="rounded-lg mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default AnimeCard;