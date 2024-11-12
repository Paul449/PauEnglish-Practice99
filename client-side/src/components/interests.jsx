/*Icons */
import MusicIcon from '../assets/MusicIcon';
import MartialArtIcon from '../assets/MartialArtIcon';
import TravelIcon from '../assets/TravelIcon';
import SocialMedia from '../assets/SMIcon';
import SportIcon from '../assets/SportsIcon';
import HistoryIcon from '../assets/HistoryIcon';
import ArtIcon from '../assets/ArtIcon';
import InterviewIcon from '../assets/InterviewIcon';
import GeoIcon from '../assets/GeoIcon';
import DatingIcon from '../assets/DatingIcon';
import DancingIcon from '../assets/dancing';
import MuseumIcon from '../assets/MuseumIcon';
import PlantIcon from '../assets/PlantsIcon';
import GymIcon from '../assets/GymIcon';
import HikingIcon from '../assets/HikingIcon';
//import ActingIcon from '../assets/ActingIcon';
import PaintingIcon from '../assets/PaintingIcon';
import FoodIcon from '../assets/FoodIcon';
import RunningIcon from '../assets/RunningIcon';
import CoffeeIcon from '../assets/CoffeeIcon';
import CookingIcon from '../assets/CookingIcon';
import PhotographyIcon from '../assets/PhotographyIcon';
import CodingIcon from '../assets/CodingIcon';
import CarIcon from '../assets/CarsIcon';
import FestivalIcon from '../assets/FestivalsIcon';
import PodcastIcon from '../assets/PodcastIcon';
import MeditationIcon from '../assets/MeditationIcon';
import VGIcon from '../assets/VGIcon';
import Other from '../assets/OtherIcon';
/*useNavigation and useLocation to know current location and navigate to other pages on my application */
import{useNavigate, useLocation} from 'react-router-dom';
export default function Interests(){
    let Navigate = useNavigate();
    let Location = useLocation();
    return(
        <>
        <section className="topics">
        <div className="column1">
        <div className="Music">
            <p>Music</p>
            <MusicIcon/>
        </div>
        <div className="Art">
            <p>Art</p>
            <ArtIcon/>
        </div>
        <div className="Travel">
            <p>Travel</p>
            <TravelIcon/>
        </div>
        <div className="SocialMedia">
            <p>Social Media</p>
            <SocialMedia/>
        </div>
        <div className="History">
            <p>History</p>
            <HistoryIcon/>
        </div>
        </div>
        <div className="column2">
        <div className="Hobbies">
            <p>Hobbies</p>
        </div>
        <div className="Sports">
            <p>Sports</p>
            <SportIcon/>
        </div>
        <div className="Interview">
            <p>Interview</p>
            <InterviewIcon/>
        </div>
        <div className="Geography">
            <p>Geography</p>
            <GeoIcon/>
        </div>
        <div className="Food">
            <p>Food</p>
            <FoodIcon/>
        </div>
        </div>
        <div className="column3">
        <div className="Dating">
            <p>Dating</p>
            <DatingIcon/>
        </div>
        <div className="Dancing">
            <p>Dancing</p>
            <DancingIcon/>
        </div>
        <div className="Museum">
            <p>Museum</p>
            <MuseumIcon/>
        </div>
        <div className="Plants">
            <p>Plants</p>
            <PlantIcon/>
        </div>
        <div className="Gym">
            <p>Gym</p>
            <GymIcon/>
        </div>
        </div>
        <div className="column4">
        <div className="Hiking">
            <p>Hiking</p>
            <HikingIcon/>
        </div>
        <div className="Acting">
            <p>Acting</p>
            
        </div>
        <div className="Painting">
            <p>Painting</p>
            <PaintingIcon/>
        </div>
        <div className="Running">
            <p>Running</p>
            <RunningIcon/>
        </div>
        <div className="MartialArts">
            <p>Martial Arts</p>
            <MartialArtIcon/>
        </div>
        </div>
        <div className="column5">
        <div className="Coffee">
            <p>Coffee</p>
            <CoffeeIcon/>
        </div>
        <div className="Cooking">
            <p>Cooking</p>
            <CookingIcon/>
        </div>
        <div className="Photography">
            <p>Photography</p>
            <PhotographyIcon/>
        </div>
        <div className="Coding">
            <p>Coding</p>
            <CodingIcon/>
        </div>
        <div className="Cars">
            <p>Cars</p>
            <CarIcon/>
        </div>
        </div>
        <div className="column6">
        <div className="Festivals">
            <p>Festivals</p>
            <FestivalIcon/>
        </div>
        <div className="Podcasts">
            <p>Podcasts</p>
            <PodcastIcon/>
        </div>
        <div className="Meditation">
            <p>Meditation</p>
            <MeditationIcon/>
        </div>
        <div className="Videogames">
            <p>Videogames</p>
            <VGIcon/>
        </div>
        <div className="Other">
            <p>Other</p>
            <Other/>
        </div>
        </div>
        <button id="Next" onClick={()=>{Navigate("../Timer")}}>Next</button>
    </section>
        </>
    ) 
}
