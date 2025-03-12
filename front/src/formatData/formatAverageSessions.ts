import { UserAverageSessions } from "../DashBoard/DashBoard";

const day = ["L", "M", "M", "J", "V", "S", "D"];

export type FormatedAverageSessions = {
    name: string;
    sessionLength: number;
};

export const formatAverageSessions = (userAverageSessions: UserAverageSessions) => {
    const formatedAverageSessions: FormatedAverageSessions[] = [];
    userAverageSessions.sessions.forEach((session) => {
        formatedAverageSessions.push({
            name: day[session.day - 1],
            sessionLength: session.sessionLength,
        });
    });

    return formatedAverageSessions;
};
