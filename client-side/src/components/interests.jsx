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
import { useEffect } from 'react';
export default function Interests(){
    let Navigate = useNavigate();
    let Location = useLocation();
    return(
        <>
        <section className="topics">
        <div className="column1">
        <button type="button" className="Music">
            <p>Music</p>
            <MusicIcon/>
        </button>
        <button className="Art">
            <p>Art</p>
            <ArtIcon/>
        </button>
        <button className="Travel">
            <p>Travel</p>
            <TravelIcon/>
        </button>
        <button className="SocialMedia">
            <p>Social Media</p>
            <SocialMedia/>
        </button>
        <button className="History">
            <p>History</p>
            <HistoryIcon/>
        </button>
        </div>
        <div className="column2">
        <button className="Hobbies">
            <p>Hobbies</p>
        </button>
        <button className="Sports">
            <p>Sports</p>
            <SportIcon/>
        </button>
        <button className="Interview">
            <p>Interview</p>
            <InterviewIcon/>
        </button>
        <button className="Geography">
            <p>Geography</p>
            <GeoIcon/>
        </button>
        <button className="Food">
            <p>Food</p>
            <FoodIcon/>
        </button>
        </div>
        <div className="column3">
        <button className="Dating">
            <p>Dating</p>
            <DatingIcon/>
        </button>
        <button className="Dancing">
            <p>Dancing</p>
            <DancingIcon/>
        </button>
        <button className="Museum">
            <p>Museum</p>
            <MuseumIcon/>
        </button>
        <button className="Plants">
            <p>Plants</p>
            <PlantIcon/>
        </button>
        <button className="Gym">
            <p>Gym</p>
            <GymIcon/>
        </button>
        </div>
        <div className="column4">
        <button className="Hiking">
            <p>Hiking</p>
            <HikingIcon/>
        </button>
        <button className="Acting">
            <p>Acting</p>
            
        </button>
        <button className="Painting">
            <p>Painting</p>
            <PaintingIcon/>
        </button>
        <button className="Running">
            <p>Running</p>
            <RunningIcon/>
        </button>
        <button className="MartialArts">
            <p>Martial Arts</p>
            <MartialArtIcon/>
        </button>
        </div>
        <div className="column5">
        <button className="Coffee">
            <p>Coffee</p>
            <CoffeeIcon/>
        </button>
        <button className="Cooking">
            <p>Cooking</p>
            <CookingIcon/>
        </button>
        <button className="Photography">
            <p>Photography</p>
            <PhotographyIcon/>
        </button>
        <button className="Coding">
            <p>Coding</p>
            <CodingIcon/>
        </button>
        <button className="Cars">
            <p>Cars</p>
            <CarIcon/>
        </button>
        </div>
        <div className="column6">
        <button className="Festivals">
            <p>Festivals</p>
            <FestivalIcon/>
        </button>
        <button className="Podcasts">
            <p>Podcasts</p>
            <PodcastIcon/>
        </button>
        <button className="Meditation">
            <p>Meditation</p>
            <MeditationIcon/>
        </button>
        <button className="Videogames">
            <p>Videogames</p>
            <VGIcon/>
        </button>
        <button className="Other">
            <p>Other</p>
            <Other/>
        </button>
        </div>
        <button id="Next" onClick={()=>{Navigate("../Timer")}}>Next</button>
    </section>
        </>
    ) 
}
