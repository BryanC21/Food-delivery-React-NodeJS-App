import React from "react"
import MapContainer from "./MapContainer"
import "../infoCard.css"

function InfoCard (props){
    return(
        <div className = "infoCard">
            {/*the style = display:props.etc makes sure the item only renders the element if the corresponding prop exists */}
            <img className = "imageContainer" src = {props.img}></img>

            <div style ={{padding:"10px"}}>
                <p style = {{display: props.restaurantName ? "block":"none"}}>Restaurant Name/Address: {props.restaurantName}</p>
                <p>Food Name: {props.foodName} </p>
                <p>Order Number:{props.orderNumber}</p>
                <p style = {{display: props.orderersInfo ? "block":"none"}}>Orderer's Info: {props.orderersInfo}</p>
                <p style = {{display: props.deliveryTime ? "block":"none"}}>Delivery Time: {props.deliveryTime}</p>
                <p style = {{display: props.deliveredTime ? "block":"none"}}>Delivered Time: {props.deliveredTime}</p>
                <p style = {{display: props.deliveredDate ? "block":"none"}}>Delivered Date: {props.deliveredDate}</p>
                <p style = {{display: props.deliveryDate ? "block":"none"}}>Delivery Date: {props.deliveryDate}</p>
                <p style = {{display: props.deliverersName ? "block":"none"}}>Deliverer's Name: {props.deliverersName}</p>
                <p>Status Fulfilled: {props.statusFulfilled}</p>
                <p style = {{display: props.price ? "block":"none"}}>Price: {props.price}</p>
                <p style = {{display: props.specialInstructions ? "block":"none"}}>Special Instructions: {props.specialInstructions}</p>
                </div>
        </div>
    )
}

export default InfoCard