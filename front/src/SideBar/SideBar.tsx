import "./SideBar.css";

function SideBar() {
    return (
        <div className="sideBar">
            <nav className="sideNav">
                <a className="sideBarButton" href="#">
                    <img src="/src/assets/yoga.png" />
                </a>
                <a className="sideBarButton" href="#">
                    <img src="/src/assets/natation.png" />
                </a>
                <a className="sideBarButton" href="#">
                    <img src="/src/assets/velo.png" />
                </a>
                <a className="sideBarButton" href="#">
                    <img src="/src/assets/muscu.png" />
                </a>
            </nav>
            <div className="mention">Copiryght, SportSee 2020</div>
        </div>
    );
}

export default SideBar;
