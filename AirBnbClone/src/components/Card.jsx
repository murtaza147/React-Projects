import React from "react";

export default function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.card.coverImg} />
            <div className="card--stats">
                <img className="card--star" src="star.png" />
                <span>{props.card.stats.rating} &nbsp;</span>
                <span className="grey">({props.card.stats.reviewCount}) • {props.card.location}</span>
            </div>
            <p className="card--title">{props.card.description}</p>
            <p className="card--price"><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}
