import React,{useState} from "react"
import "../styling/RestaurantOrderPage.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/DelivererMainMenu.css";
import InfoCard from "../components/InfoCard"

const RestaurantOrderPage = () =>{
    
    return(
        <div>
        <div className="Title">
        <p><b>Orders in Queue</b></p>
        </div>

        <h1 className='overHeading'>
        <div className = 'orderSection'>

        <div className='infoSheet'>
        <InfoCard
        foodName = '1xDouble Cheeseburger'
        orderNumber = ' 11285'
        specialInstructions = 'none'
        deliveryTime = '11:30pm'
        price='$20.97'
        ></InfoCard>
        <button className ='confirmButton'>Ready</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        foodName = '1xCrunchwrap Supreme'
        orderNumber = ' 11286'
        specialInstructions = 'More diablo sauce'
        deliveryTime = '1:30am'
        price='$13.02'
        ></InfoCard>
        <button className ='confirmButton'>Ready</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        foodName = '1xPhilly CheeseSteak'
        orderNumber = ' 11287'
        statusFulfilled = ''
        specialInstructions = 'none'
        deliveryTime = '11:20'
        price='$23.35'
        ></InfoCard>
        <button className ='confirmButton'>Ready</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        foodName = '1xPhilly CheeseSteak'
        orderNumber = ' 11287'
        statusFulfilled = ''
        specialInstructions = 'none'
        deliveryTime = '11:20'
        price='$23.35'
        ></InfoCard>
        <button className ='confirmButton'>Ready</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        foodName = '1xPhilly CheeseSteak'
        orderNumber = ' 11287'
        statusFulfilled = ''
        specialInstructions = 'none'
        deliveryTime = '11:20'
        price='$23.35'
        ></InfoCard>
        <button className ='confirmButton'>Ready</button>
        </div>

        
        </div>
        </h1>
        <hr></hr>
        </div>
    )
}

export default RestaurantOrderPage