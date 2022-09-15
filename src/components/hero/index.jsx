import VotingButton from "../voting_button";
import { HeroContent, HeroSection } from "./styles";
import ICON_WIKIPEDIA from '../../assets/svg/icon-wikipedia.svg';

const Hero = ({headline, paragraph, postURL, imageURL}) => {
    return(
        <HeroSection backgroundImageHero={imageURL}>
            <div className="top_container">
                <HeroContent>
                    <span>What's your opinion on</span>
                    <h2>{headline}</h2>
                    <p>{paragraph}</p>
                    <a href={postURL} title={headline}><img src={ICON_WIKIPEDIA} alt="Icon Wikipedia" /> <span>More information</span></a>
                    <p>What's Your Veredict</p>
                    <div className="button_container">
                        <VotingButton type="up"/>
                        <VotingButton type="down"/>
                    </div>
                </HeroContent>
            </div>
            <div className="bottom_container">
                {/* !TODO Gauge bar component */}
            </div>
        </HeroSection>
    )

}

export default Hero;