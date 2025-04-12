import animeData from "../../data/animeData.json"
import HeroSection from "../../components/HeroSection/HeroSection"
import AnimeList from "../../components/AnimeList/AnimeList"

const Home = () => {
  return(
    <div>
      <HeroSection />
      <AnimeList animes={animeData}/>
    </div>
  )
}

export default Home