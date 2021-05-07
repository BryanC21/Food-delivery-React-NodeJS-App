import React from 'react'
import InfoCard from '../components/InfoCard'
import MapContainer from '../components/MapContainer'
import "../styling/orderDetails.css"

function DeliveryOrderDetail(){
    return(
        <div >
            <InfoCard 
                img = "https://static.takeaway.com/images/restaurants/bg/NO73N7Q/categories/_0006_subway_takeaway_kat_sub2.png?timestamp=1618549301"
                restaurantName = "Subway"
                foodName = "BBQ Chicken Sandwich"
                orderNumber = "33"
                orderersInfo = "123 Street, 94132"
                deliveryTime = "10:00AM"
                statusFulfilled = "Delivered"
                specialInstructions = "N/a"
            ></InfoCard>
            <MapContainer name = "123 Street, 94132"></MapContainer>
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
            <button className="directions">Directions</button>
            <br></br>
            <button className ="cancelOrder">Cancel Order</button>
        </div>
    )
}

export default DeliveryOrderDetail