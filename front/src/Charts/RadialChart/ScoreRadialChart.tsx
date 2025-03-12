import { Cell, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { UserScore } from "../../DashBoard/DashBoard";
import "./ScoreRadialChart.css";

function ScoreRadialScore({ userScore }: { userScore: UserScore[] }) {
    return (
        <div className="radialChart">
            <h3>Score</h3>
            <div className="score">
                <span>{userScore[1]?.score} %</span>
                <span>de votre objectif</span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius={55}
                    outerRadius={80}
                    data={userScore}
                    startAngle={90}
                    endAngle={450}
                    barCategoryGap={0}
                    
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="score" isAnimationActive={false}>
                        {userScore.map((entry, index) => (
                            <Cell key={`cell-${index}`} stroke={entry.fill} strokeWidth={entry.name ==="background"? 0 : -10} />
                        ))}
                    </RadialBar>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreRadialScore;
