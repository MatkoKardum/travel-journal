import React from "react"
import location from "../assets/location.svg"

export default function Card(props) {
    return (
    <div className="card">
        <img src={props.item.imageUrl} className="card--photo" />
        <div className="wrapper">
            <div className="card--location">
                <img src={location} className="card--location_icon" />
                <span className="card--location_country">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} className="card--location_maps">View on Google Maps</a>
            </div>
            <h2 className="card--destination">{props.item.title}</h2>
            <h3 className="card--period">{props.item.startDate} - {props.item.endDate}</h3>
            <p className="card--description">{props.item.description}</p>
        </div>
    </div>
    )
}