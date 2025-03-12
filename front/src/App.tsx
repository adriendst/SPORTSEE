import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import DashBoard from "./DashBoard/DashBoard";
import NavBar from "./NavBar/NavBar";
import { getData } from "./service/service";
import SideBar from "./SideBar/SideBar";

export type UserData = {
    userId: number;
    keyData: {
        calorieCount: number;
        carbohydrateCount: number;
        lipidCount: number;
        proteinCount: number;
    };
    todayScore: number;
    userInfos: {
        age: number;
        firstName: string;
        lastName: string;
    };
};

function App() {
    const [userData, setUserData] = useState<UserData>();
    let { userId } = useParams();

    useEffect(() => {
        getData(Number(userId), "MAIN_DATA").then((response) => setUserData(response));
    }, []);

    return (
        <>
            <NavBar />
            <div className="app">
                <SideBar />
                {userData ? <DashBoard data={userData} /> : <div>user non défini</div>}
            </div>
        </>
    );
}

export default App;
