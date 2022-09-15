import { FooterContainer } from "./styles"
import ICON_FACEBOOK from '../../assets/svg/icon-facebook.svg';
import ICON_TWITTER from '../../assets/svg/icon-twitter.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="inner_container">
                <div>
                    <a href="/terms-and-conditions">Terms and Conditions</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
                <div className="social-media-actions">
                    <span>Follow us</span>
                    <a href="https://facebook.com/">
                        <img src={ICON_FACEBOOK} alt="Facebook Icon" />
                    </a>
                    <a href="https://facebook.com/">
                        <img src={ICON_TWITTER} alt="Twitter Icon" />
                    </a>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;