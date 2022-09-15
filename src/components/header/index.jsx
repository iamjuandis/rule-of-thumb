import ICON_SEARCH from "../../assets/svg/icon-search.svg";

const Header = () => {
    return(
        <header>
            <div className="inner_container">
                <div className="logo_container">
                    <span>Rule of thumb.</span>
                </div>
                <div className="header_actions">
                    <nav>
                        <a href="/past-trials" title="Past Trials">Past Trials</a>
                        <a href="/how-it-works" title="Past Trials">How It Works</a>
                        <a href="/login" title="Past Trials">Login / Sign Up</a>
                        <button><img className="app-logo" alt="Search Button" src={ICON_SEARCH} /></button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;