import VotingButton from "../voting_button";
import { HeroContent } from "./styles";

const Hero = ({eyebrow, headline, paragraph, postuURL, imageURL}) => {
    return(
        <section>
            <div className="top_container">
                <HeroContent>
                    <div className="button_container">
                        <VotingButton type="up"/>
                        <VotingButton type="down"/>
                    </div>
                </HeroContent>
            </div>
            <div className="bottom_container">
                {/* !TODO Gauge bar component */}
            </div>
        </section>
    )

}

export default Hero;