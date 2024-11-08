/*Icons */
import MusicIcon from '../assets/MusicIcon';
import MartialArtIcon from '../assets/MartialArtIcon';
import TravelIcon from '../assets/TravelIcon';
import SocialMedia from '../assets/SMIcon';
import SportIcon from '../assets/SportsIcon';
import HistoryIcon from '../assets/HistoryIcon';
import ArtIcon from '../assets/ArtIcon';
import InterviewIcon from '../assets/InterviewIcon';
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
        </div>
        <div className="Food">
            <p>Food</p>
        </div>
        </div>
        <div className="column3">
        <div className="Dating">
            <p>Dating</p>
        </div>
        <div className="Dancing">
            <p>Dancing</p>
        </div>
        <div className="Museum">
            <p>Museum</p>
        </div>
        <div className="Plants">
            <p>Plants</p>
        </div>
        <div className="Gym">
            <p>Gym</p>
        </div>
        </div>
        <div className="column4">
        <div className="Hiking">
            <p>Hiking</p>
        </div>
        <div className="Acting">
            <p>Acting</p>
        </div>
        <div className="Painting">
            <p>Painting</p>
        </div>
        <div className="Running">
            <p>Running</p>
        </div>
        <div className="MartialArts">
            <p>Martial Arts</p>
            <MartialArtIcon/>
        </div>
        </div>
        <div className="column5">
        <div className="Coffee">
            <p>Coffee</p>
        </div>
        <div className="Cooking">
            <p>Cooking</p>
        </div>
        <div className="Photography">
            <p>Photography</p>
        </div>
        <div className="Coding">
            <p>Coding</p>
        </div>
        <div className="Cars">
            <p>Cars</p>
        </div>
        </div>
        <div className="column6">
        <div className="Festivals">
            <p>Festivals</p>
        </div>
        <div className="Podcasts">
            <p>Podcasts</p>
        </div>
        <div className="Meditation">
            <p>Meditation</p>
        </div>
        <div className="Videogames">
            <p>Videogames</p>
        </div>
        <div className="Other">
            <p>Other</p>
        </div>
        </div>
        <button id="Next" onClick={()=>{Navigate("../Timer")}}>Next</button>
    </section>
        </>
    ) 
}
