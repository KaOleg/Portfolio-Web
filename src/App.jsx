import { FaUser } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { FaVk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import Menu, { MenuItem } from "./components/menu/Menu";
import Button from "./components/button/Button";
import star5 from "./images/Star 5.svg";
import SectionTitle from "./components/section-title/SectionTitle";
import Steps from "./components/steps/Steps";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificate/Certificates";
import star from "./images/Portal.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import decoration from "./images/decoration.svg";
import { CgMenuLeftAlt } from "react-icons/cg";
gsap.registerPlugin(useGSAP);
function App(props) {
    const container = useRef(null);
    useGSAP(
        () => {
            const timeLine = gsap.timeline();
            const menuTween = gsap.fromTo(".nav", { y: -100 }, { y: 0 });
            const stacksTween = gsap.from(".stacks", { xPercent: -100 });
            timeLine.add(menuTween, 0.5);
            timeLine.add(stacksTween, 3);
        },
        { scope: container }
    );
    return (
        <div ref={container}>
            <div className="container">
                <nav className="nav">
                    <Logo />
                    <div className="nav__content">
                        <Menu>
                            <MenuItem content={<IoHomeOutline />} />
                            <MenuItem content="About" />
                            <MenuItem content="Projects" />
                            <MenuItem content="Contact me" />
                        </Menu>
                        <div>
                            <Button>Hire me</Button>
                            <Button>
                                <FaUser />
                            </Button>
                        </div>
                    </div>
                    <button className="burger__menu">
                        <Menu>
                            <MenuItem content={<CgMenuLeftAlt />} />
                        </Menu>
                    </button>
                </nav>
                <Header />
            </div>
            <div className="stacks">
                <div className="container">
                    <div className="stacks__content">
                        <p>HTML</p>
                        <img src={star5} alt="star 5" />
                        <p>CSS</p>
                        <img src={star5} alt="star 5" />
                        <p>Javascript</p>
                        <img src={star5} alt="star 5" />
                        <p>React</p>
                        <img src={star5} alt="star 5" />
                    </div>
                </div>
            </div>
            <div className="container">
                <main>
                    <section>
                        <SectionTitle text="My working process" />
                        <Steps />
                    </section>
                    <section>
                        <SectionTitle text="My recent projects" />
                        <Projects />
                    </section>
                    <section>
                        <SectionTitle text="My certificates" />
                        <Certificates />
                    </section>
                    <section className="contacts">
                        <div className="contacts__left">
                            <SectionTitle text="Have idea about projects?" />
                            <p>
                                Write anything here something about yourself to
                                showcase what actually you doing or targeting
                                etc.
                            </p>
                            <Button>Send us a message</Button>
                        </div>
                        <div
                            style={{ backgroundImage: `url(${decoration})` }}
                            className="contacts__right"
                        ></div>
                    </section>
                </main>
                <footer>
                    <Logo />
                    <Menu>
                        <MenuItem content={<FaGithub />} />
                        <MenuItem content={<FaTelegram />} />
                        <MenuItem content={<FaVk />} />
                        <MenuItem content={<CiPhone />} />
                    </Menu>
                    <div>
                        <Button>Hire me</Button>
                        <Button>
                            <FaUser />
                        </Button>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default App;
