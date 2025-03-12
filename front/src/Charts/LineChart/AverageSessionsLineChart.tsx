import { useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FormatedAverageSessions } from "../../formatData/formatAverageSessions";
import "./AverageSessionsLineChart.css";

function AverageSessionsLineChart({ userAverageSessions }: { userAverageSessions: FormatedAverageSessions[] }) {
    const [xBeginArea, setXBeginArea] = useState<number>(50000);

    const onMouseMove = (e: any) => {
        if (e.isTooltipActive) setXBeginArea(e.activeCoordinate.x);
    };

    const onMouseLeave = () => {
        setXBeginArea(50000);
    };

    const rows = [];
    for (let i = 60; i < 100; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        const randomId = Math.floor(Math.random() * 1000000000000000);
        rows.push(<stop offset={`${i}%`} stopColor={`rgba(255,255,255,${(i + 1) / 100})`} key={i + randomId} />);
        rows.push(
            <stop offset={`${i + 1}%`} stopColor={`rgba(255,255,255,${(i + 1) / 100})`} key={i + randomId + 1} />
        );
    }
    return (
        <div className="lineChart">
            <h3>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userAverageSessions} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
                            {rows}
                        </linearGradient>
                    </defs>
                    <YAxis
                        hide
                        domain={[0, Math.max(...userAverageSessions.map((entry) => entry.sessionLength)) + 30]}
                    />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        type="category"
                        tick={{ fill: "rgba(255,255,255,0.5)" }}
                    />
                    <Tooltip
                        content={(props) => (
                            <div style={{ backgroundColor: "white", padding: "5px" }}>
                                {props.payload && Number(props?.payload[0]?.value)} min
                            </div>
                        )}
                        cursor={false}
                    />
                    <Line type="monotone" dataKey="sessionLength" stroke="url(#gradient)" dot={false} strokeWidth={2} />
                    <CartesianGrid
                        fill="black"
                        fillOpacity={0.1}
                        x={xBeginArea}
                        vertical={false}
                        horizontal={false}
                        height={1000}
                        width={1000}
                        y={-50}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessionsLineChart;
