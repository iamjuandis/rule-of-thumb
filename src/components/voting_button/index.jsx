import { VotingButtonContainer } from "./styles";
import ICON_THUMB from '../../assets/svg/icon-thumb.svg';

const VotingButton = ({type, state}) => {
    return(
        <VotingButtonContainer type={type}>
            <img src={ICON_THUMB} alt="Thumb Icon" />
        </VotingButtonContainer>
    )
}

export default VotingButton;