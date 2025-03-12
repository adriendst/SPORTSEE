import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { UserData } from "../../App";
import { FormatedUserPerformance } from "../../formatData/formatPerformance";

function PerformanceRadarChart({ userPerformance, userData }: { userPerformance: FormatedUserPerformance[], userData : UserData }) {
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize : 10 }} />
                    <Radar
                        name={userData.userInfos.firstName}
                        dataKey="A"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceRadarChart;
