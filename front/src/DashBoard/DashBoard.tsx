import { useEffect, useState } from "react";
import { UserData } from "../App";
import Card from "../Card/Card";
import DailyActvityBarChart from "../Charts/BarChart/DailyActvityBarChart";
import AverageSessionsLineChart from "../Charts/LineChart/AverageSessionsLineChart";
import PerformanceRadarChart from "../Charts/RadarChart/PerformanceRadarChart";
import ScoreRadialScore from "../Charts/RadialChart/ScoreRadialChart";
import { formatActivity, FormatedActivity } from "../formatData/formatActivity";
import { formatAverageSessions, FormatedAverageSessions } from "../formatData/formatAverageSessions";
import { formatCardsData, FormatedCardsData } from "../formatData/formatCardsData";
import { FormatedUserPerformance, formatUserPerformance } from "../formatData/formatPerformance";
import { getData } from "../service/service";
import "./DashBoard.css";

export type UserActivity = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};

export type UserAverageSessions = {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
};

export type UserPerformance = {
    userId: number;
    data: {
        value: number;
        kind: number;
    }[];
    kind: { [key: number]: string };
};

export type UserScore = {
    name: string;
    score: number;
    fill: string;
};

function DashBoard({ data }: { data: UserData }) {
    const [userActivity, setUserActivity] = useState<FormatedActivity[]>([]);
    const [userAverageSessions, setUserAverageSessions] = useState<FormatedAverageSessions[]>([]);
    const [userPerformance, setUserPerformance] = useState<FormatedUserPerformance[]>([]);
    const [userScore, setUserScore] = useState<UserScore[]>([]);
    const [cardsData, setCardsData] = useState<FormatedCardsData[]>([]);

    useEffect(() => {
        getData(data.userId, "USER_ACTIVITY").then((response: UserActivity) => {
            setUserActivity(formatActivity(response));
        });
        getData(data.userId, "USER_AVERAGE_SESSIONS").then((response: UserAverageSessions) =>
            setUserAverageSessions(formatAverageSessions(response))
        );
        getData(data.userId, "USER_PERFORMANCE").then((response: UserPerformance) =>
            setUserPerformance(formatUserPerformance(response))
        );

        setUserScore([
            { score: 100, name: "background", fill: "white" },
            { name: "score", score: data.todayScore * 100, fill: "#FF0000" },
        ]);

        setCardsData(formatCardsData(data));
    }, []);

    return (
        <div className="dashBoard">
            <div className="header">
                <div className="title">
                    Bonjour <span>{data.userInfos.firstName}</span>
                </div>
                <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
            </div>
            <div className="dashboardSections">
                <div className="graphics">
                    <DailyActvityBarChart userActivity={userActivity} />
                    <AverageSessionsLineChart userAverageSessions={userAverageSessions} />
                    <PerformanceRadarChart userData={data} userPerformance={userPerformance} />
                    <ScoreRadialScore userScore={userScore} />
                </div>
                <div className="cards">
                    {cardsData.map((cardData, index) => {
                        return <Card data={cardData} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
//UTILISER REHCARTS
