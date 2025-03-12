import { UserActivity } from "../DashBoard/DashBoard";

export type FormatedActivity = {
    dayNumber: number;
    weight: number;
    burnedCalories: number;
};

export const formatActivity = (userActivity: UserActivity) => {
    const formatedActivity: FormatedActivity[] = [];
    userActivity.sessions.forEach((session, index) => {
        formatedActivity.push({
            dayNumber: index + 1,
            weight: session.kilogram,
            burnedCalories: session.calories,
        });
    });

    return formatedActivity;
};
