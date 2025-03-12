import { UserData } from "../App";
import { UserActivity, UserAverageSessions, UserPerformance } from "../DashBoard/DashBoard";

const getDataFromApi = import.meta.env.VITE_FETCH_API;

// une fonction avec 2 paramètres : userId, et le type de data (ex : USER_MAIN_DATA)

const dataTypeConversion = {
    MAIN_DATA: "",
    USER_ACTIVITY: "activity",
    USER_AVERAGE_SESSIONS: "average-sessions",
    USER_PERFORMANCE: "performance",
};

export const getData = async (userId: number, dataType: string) => {
    const key = dataType as keyof typeof dataTypeConversion;

    if (getDataFromApi)
        return await fetch(
            `http://localhost:3000/user/${userId}${dataTypeConversion[key] !== "" ? `/${dataTypeConversion[key]}` : ""}`
        )
            .then((response) => response.json())
            .then((response) => response.data);
    else
        return await fetch(`/data/${dataType}.json`)
            .then((response) => response.json())
            .then((response) =>
                response.find((user: UserData | UserActivity | UserAverageSessions | UserPerformance) => {
                    return user.userId === userId;
                })
            );
};
