import React from 'react'
import InfoCard from '../components/InfoCard'
import MapContainer from '../components/MapContainer'
import "../styling/orderDetails.css"
import { connect } from "react-redux";


function DeliveryOrderDetail({ selectedID }){

    console.log(selectedID)
    
    return(
        <div >

            <InfoCard 
                restaurantName = "Subway"
                foodName = "BBQ Chicken Sandwich"
                orderNumber = {selectedID.id}
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
                <br></br>
                <br></br>
            <button className="directions">Directions</button>
            <br></br>
            <button className ="cancelOrder">Cancel Order</button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        selectedID: state.customerReducer.selectedID,
    };
};



export default connect(mapStateToProps)(DeliveryOrderDetail);