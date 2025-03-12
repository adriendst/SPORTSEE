import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FormatedActivity } from "../../formatData/formatActivity";
import "./DailyActivityBarChart.css";

function DailyActvityBarChart({ userActivity }: { userActivity: FormatedActivity[] }) {
    const [domain, setDomain] = useState<number[]>([]);
    const [ticks, setTicks] = useState<number[]>([]);

    useEffect(() => {
        const minWeight = Math.min(...userActivity.map((entry) => entry.weight)) - 1;
        const maxWeight = Math.max(...userActivity.map((entry) => entry.weight)) + 1;

        setDomain([minWeight, maxWeight]);
        setTicks(Array.from({ length: maxWeight - minWeight + 1 }, (v, i) => i + minWeight));
    }, [userActivity]);

    return (
        <div className="barChart">
            <h3>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userActivity}>
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis dataKey="dayNumber" tickLine={false} tickMargin={15} />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        domain={domain}
                        ticks={ticks}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={30}
                    />
                    <YAxis yAxisId="left" orientation="left" hide />

                    <Tooltip
                        contentStyle={{ backgroundColor: "rgba(230, 0, 0, 1)" }}
                        labelFormatter={() => ""}
                        formatter={(value, name, item, index, payload) => {
                            return `${value}${name.toString().split("(")[1].slice(0, -1)}`;
                        }}
                    />
                    <Legend
                        iconType="circle"
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ paddingBottom: "30px" }}
                    />
                    <Bar
                        name="Poids (kg)"
                        yAxisId="right"
                        dataKey="weight"
                        fill="#282D30"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        yAxisId="left"
                        dataKey="burnedCalories"
                        fill="#E60000"
                        barSize={7}
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DailyActvityBarChart;
