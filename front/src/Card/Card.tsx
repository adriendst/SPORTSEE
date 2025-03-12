import { FormatedCardsData } from "../formatData/formatCardsData";
import "./Card.css";

function Card({ data }: { data: FormatedCardsData }) {
    return (
        <div className="card">
            <div className="cardContent">
                <div className="cardIcon" style={{ backgroundColor: data.iconColor.split(")")[0] + ",0.1)" }}>
                    <img src={`/src/assets/${data.content.toLocaleLowerCase()}.png`}></img>
                </div>
                <div className="cardData">
                    <span className="cardNumber">
                        {data.quantity}
                        {data.unit}
                    </span>
                    <span className="cardUnit">{data.content}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
