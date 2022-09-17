import getDatePosted from "../../utils/getDatePosted";
import Button from "../button";
import VotingButton from "../voting_button";
import { VotingCardComponent } from "./styles"

const VotingCard = ({name, description, imageURL, category, positiveVotes, negativeVotes, lastUpdated}) => {
    return (
        <VotingCardComponent backgroundImage={imageURL}>
            <div className="inner_container">
                <div className="card_content">
                    <div className="texts_container">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="voting_actions">
                        <span>{getDatePosted(lastUpdated)} in {category}</span>
                        <div className="buttons">
                        <VotingButton type="up"/>
                        <VotingButton type="down"/>
                        <Button label='Vote now' />
                        </div>
                        
                    </div>
                </div>
                {/* !TODO Gauge Bar Component */}
            </div>
        </VotingCardComponent>
    )
}

export default VotingCard;