import { UserPerformance } from "../DashBoard/DashBoard";

export type FormatedUserPerformance = { subject: string; A: number; fullMark?: number };

const trad = {
    intensity: "Intensité",
    speed: "Vitesse",
    strength: "Force",
    endurance: "Endurance",
    energy: "Energie",
    cardio: "Cardio",
};

export const formatUserPerformance = (userPerf: UserPerformance) => {
    const formatedUserPerf: FormatedUserPerformance[] = [];
    userPerf.data.forEach((data) => {
        const kindKey = userPerf.kind[data.kind] as keyof typeof trad;

        formatedUserPerf.push({
            subject: trad[kindKey],
            A: data.value,
        });
    });

    return formatedUserPerf.reverse();
};
