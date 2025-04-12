import { useParams } from "react-router-dom"
import animeData from "../../data/animeData.json"
import ReactPlayer from "react-player"
import { useState } from "react"

const Watch = () => {
  const {animeId} = useParams();
  const anime = animeData.find((a) => a.href === animeId)
  const [selectEpisode, setSelectEpisode] = useState(0)

  if(!anime){
    return(
      <div className="p-6">
        <div className="text-3xl font-bold">Anime Not Found!</div>
      </div>
    )
  }

  return(
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{anime.title}</h1>
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg mb-6">
        <ReactPlayer 
          url={anime.videoLinks[selectEpisode].url}
          controls
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {anime.videoLinks.map((ep, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded ${
              idx === selectEpisode ? "bg-purple-600" : "bg-gray-700"
            } hover:bg-purple-500 transition`}
            onClick={() => setSelectEpisode(idx)}
          >
            {ep.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Watch