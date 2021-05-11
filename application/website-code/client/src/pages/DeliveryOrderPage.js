import React,{useState} from "react";
import "../styling/DeliveryOrderPage.css"
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "../components/InfoCard";


const DeliveryOrderPage = () =>{
    
    return(
        <div>

        <div className="Title">
        <p><b>Current available orders in your area</b></p>
        </div>

        <h1 className='overHeading'>
        <div className = 'orderSection'>

        <div className='infoSheet'>
        <InfoCard
        restaurantName="Nation's Giant Hamburgers"
        restaurantAddress='612 Willem Ave. Berkley, CA 48067'
        orderNumber='11285'
        specialInstructions='none'
        deliveryTime='11:30pm'
        deliveryAddress='5824 Aleghany Rd. Berkley, CA 48067'
        ></InfoCard>
        <button className ='confirmButton'>Accept Order</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        restaurantName='Taco Bell'
        restaurantAddress='600 Willem Ave. Berkley, CA 48067'
        orderNumber = '11286'
        specialInstructions = 'More diablo sauce'
        deliveryTime = '1:30am'
        deliveryAddress='5537 Brunswick Ave. Berkley, CA 48067'
        ></InfoCard>
        <button className ='confirmButton'>Accept Order</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        restaurantName='The Philly Cheesesteak Shop'
        restaurantAddress='703 Willem Ave, Berkley, CA 48067'
        orderNumber = '11287'
        specialInstructions = 'none'
        deliveryTime = '11:20'
        deliveryAddress='9898 Clayton Dr. Berkley, CA 48067'
        ></InfoCard>
        <button className ='confirmButton'>Accept Order</button>
        </div>

        <div className='infoSheet'>
        <InfoCard
        restaurantName='The Philly Cheesesteak Shop'
        restaurantAddress='703 Willem Ave, Berkley, CA 48067'
        orderNumber = '11287'
        specialInstructions = 'none'
        deliveryTime = '11:20'
        deliveryAddress='9898 Clayton Dr.'
        ></InfoCard>
        <button className ='confirmButton'>Accept Order</button>
        </div>

        </div>
        </h1>
        <hr></hr>
        </div>
    )
}

export default DeliveryOrderPage
