import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/DelivererMainMenu.css";
import "../styling/RestaurantOrderPage.css"
import InfoCard from "../components/InfoCard"

const RestaurantOrderPage = () =>{
    
    return(
        <div>
        <div className="text-center">
        <h1><b>Orders in Queue</b></h1>
        <hr></hr>
        </div>

        <h1 className='overHeading'>
        <div className = 'orderSection'>

        <InfoCard
        foodName = '1xDouble Cheeseburger'
        orderNumber = '11285'
        specialInstructions = 'none'
        deliveryTime = '11:30pm'
        price='$20.97'
        ></InfoCard>

        <InfoCard
        foodName = '1xCrunchwrap Supreme'
        orderNumber = '11286'
        specialInstructions = 'More diablo sauce'
        deliveryTime = '1:30am'
        price='$13.02'
        ></InfoCard>

        <InfoCard
        foodName = '1xPhilly CheeseSteak'
        orderNumber = '11287'
        specialInstructions = 'none'
        deliveryTime = '11:20'
        price='$23.35'
        ></InfoCard>

        
        </div>
        </h1>
        <hr></hr>
        </div>
    )
}

export default RestaurantOrderPage