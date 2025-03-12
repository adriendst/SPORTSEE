import { UserData } from "../App";

export type FormatedCardsData = {
    icon: string;
    iconColor: string;
    unit: string;
    quantity: number;
    content: string;
};

const content = {
    calorieCount: ["Calories", "kCal", "rgba(255, 0, 0)"],
    carbohydrateCount: ["Glucides", "g", "rgba(253, 204, 12)"],
    lipidCount: ["Lipides", "g", "rgba(253, 81, 129)"],
    proteinCount: ["Proteines", "g", "rgba(74, 184, 255)"],
};

export const formatCardsData = (userData: UserData) => {
    const formatedCardsData: FormatedCardsData[] = [];
    Object.keys(userData.keyData).forEach((key) => {
        const contentKey = key as keyof typeof content;

        formatedCardsData.push({
            icon: `${key.split("Count")[0]}Icon`,
            unit: content[contentKey][1],
            quantity: userData.keyData[contentKey],
            content: content[contentKey][0],
            iconColor : content[contentKey][2]
        });
    });

    return formatedCardsData;
};
