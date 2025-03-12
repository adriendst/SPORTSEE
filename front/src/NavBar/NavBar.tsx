import Logo from "../assets/SportSeeLogo.png";
import "./navBar.css";

function NavBar() {
    return (
        <div className="navBar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="navTabs">
                <a className="tab" href="#">
                    Accueil
                </a>
                <a className="tab" href="#">
                    Profil
                </a>
                <a className="tab" href="#">
                    Réglage
                </a>
                <a className="tab" href="#">
                    Communauté
                </a>
            </nav>
        </div>
    );
}

export default NavBar;
