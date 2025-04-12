import { Link } from "react-router-dom";

const AnimeCard = ({ title, image, href }) => {
  return (
    <Link to={`/watch/${href}`} className="group bg-gray-900 p-4 rounded-lg text-gray-300">
      <img
        src={image}
        alt={title}
        className="aspect-[1.5/2] w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    </Link>
  );
};

export default AnimeCard;