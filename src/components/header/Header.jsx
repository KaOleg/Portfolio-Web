import "./Header.css";
import star from "../../images/Portal.svg";
import Button from "../button/Button";
import { useEffect } from "react";
import gsap from "gsap";
function Header(props) {
    useEffect(() => {
        gsap.from(".header__grid-item", {
            scale: 3,
            opacity: 0,
            duration: 1,
            stagger: { each: 0.5, grid: "auto" },
        });
    }, []);
    return (
        <header className="header">
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item header__star">
                <img src={star} alt="star" />
            </div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item header__content">
                <h1>I create stunning wedsites</h1>
                <p>Oleg, I work in Google</p>
                <Button>Hire me</Button>
            </div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item header__star">
                <img src={star} alt="star" />
            </div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
            <div className="header__grid-item"></div>
        </header>
    );
}
export default Header;
