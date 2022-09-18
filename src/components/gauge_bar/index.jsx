import { GaugeBarComponent, GaugeSingleBar } from "./styles"
import ICON_THUMB from '../../assets/svg/icon-thumb.svg';

const GaugeBar = ({percentages}) => {
    return (
        <GaugeBarComponent>
            <GaugeSingleBar type="up" percentage={percentages.percentageUp}><img src={ICON_THUMB} alt="Icon Thumb Up"/> <span>{percentages.percentageUp}</span></GaugeSingleBar>
            <GaugeSingleBar type="down" percentage={percentages.percentageDown}><img src={ICON_THUMB} alt="Icon Thumb Down"/> <span>{percentages.percentageDown}</span></GaugeSingleBar>
        </GaugeBarComponent>
    )
}

export default GaugeBar;