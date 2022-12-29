import React from "react";

export default function Entry(props) {
    return (
        <div>
            <div className="entry--container">
                <img className="entry--img" src={props.entry.imageUrl}/>
                <div className="entry--text">
                    <img className="entry--path" src="marker.jpg"/>
                    <h2 className="entry--location">{props.entry.location} <a className="entry--maps" href={props.entry.googleMapsUrl} target="_blank">View on Google Maps</a></h2>
                    <h1 className="entry--title">{props.entry.title}</h1>
                    <h3 className="entry--date"><strong>{props.entry.startDate}</strong> - <strong>{props.entry.endDate}</strong></h3>
                    <p className="entry--description">{props.entry.description}</p>
                </div>
            </div>
            <hr className="entry--line"/>
        </div>
    )
}
