import ICON_SEARCH from "../../assets/svg/icon-search.svg";
import { HeaderContainer } from "./styles";

const Header = () => {
    return(
        <HeaderContainer>
            <div className="inner_container">
                <div className="logo_container">
                    <h1>Rule of thumb.</h1>
                </div>
                    <nav>
                        <a href="/past-trials" title="Past Trials">Past Trials</a>
                        <a href="/how-it-works" title="Past Trials">How It Works</a>
                        <a href="/login" title="Past Trials">Login / Sign Up</a>
                        <button><img className="app-logo" alt="Search Button" src={ICON_SEARCH} /></button>
                    </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header;