import { GaugeBarComponent, GaugeSingleBar } from "./styles"
import ICON_THUMB from '../../assets/svg/icon-thumb.svg';

const GaugeBar = ({percentageUp, percentageDown}) => {
    return (
        <GaugeBarComponent>
            <GaugeSingleBar type="up" percentage={percentageUp}><img src={ICON_THUMB} alt="Icon Thumb Up"/> <span>{percentageUp}</span></GaugeSingleBar>
            <GaugeSingleBar type="down" percentage={percentageDown}><img src={ICON_THUMB} alt="Icon Thumb Down"/> <span>{percentageDown}</span></GaugeSingleBar>
        </GaugeBarComponent>
    )
}

export default GaugeBar;