import React from "react"
import InfoCard from "../components/InfoCard"
import "../styling/orderDetails.css"

function RestaurantPickupOrderDetails(props){
    return(
        <div className = "delivery-wrapper">
            <InfoCard
                img = "https://holeinthewall.yqme.com.au/MC/holeinthewall.yqme.com.au/Content/Assets/HITW_slide_1000x360_b%20(1)%20(1).jpg"
                foodName = "Ham and Lettuce Sandwich"
                orderNumber = "31"
                orderersInfo = "Terry will come pick up his sandwich"
                pickupTime = "12:00PM"
                statusFulfilled = "Awaiting pickup"
                price = "$4.99"
                specialInstructions = "N/a"
            >
            </InfoCard>
        <br></br>
        <button className = "confirmButton">Cancel Order</button>
        </div>
    )
}

export default RestaurantPickupOrderDetails