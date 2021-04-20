import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "../components/MapContainer";
import InfoCard from "../components/InfoCard";
import Footer from "../utility/Footer/Footer"
import "../styling/orderDetails.css"

function RestaurantDeliveryOrderDetail(){
    return(
        <div>
            
            <InfoCard
            img = "https://lh3.googleusercontent.com/proxy/f9p-M0vcGTigRVAOvMViiuUjODWgNfEQJ_gEhpXzkMW6vTju8NxY-THoNrpuHCo79NxY8aaKQA9HWl5dDLLeESFBF5gXsFx5lHrq"
            foodName = "#1 Combo meal with fries and drink"
            orderNumber = "15"
            orderersInfo = "321 Car Drive"
            deliveryTime = "3:00PM"
            deliverersName = "Thomas"
            statusFulfilled = "Delivered"
            price = "$5.99"
            specialInstructions = "Extra onions"
            ></InfoCard>
            <MapContainer name = "321 Car Drive"></MapContainer>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <button className = 'cancelOrder'>Cancel Order</button>
        </div>
    )
}

export default RestaurantDeliveryOrderDetail