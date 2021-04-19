import React,{useState} from "react";
import "./DeliveryOrderPage.css"
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "../components/InfoCard";


const DeliveryOrderPage = () =>{
    
    return(
        <div>

        <div className="text-center">
        <h1><b>Current available orders in your area</b></h1>
        </div>

        <h1 className='overHeading'>
        <hr></hr>
        <div className = 'orderSection'>

        <InfoCard
        restaurantName="Nation's Giant Hamburgers"
        orderNumber='11285'
        specialInstructions='none'
        deliveryTime='11:30pm'
        deliveryAddress='5824 Aleghany Rd.'
        ></InfoCard>

        <InfoCard
        restaurantName='Taco Bell'
        orderNumber = '11286'
        specialInstructions = 'More diablo sauce'
        deliveryTime = '1:30am'
        deliveryAddress='5537 Brunswick Ave.'
        ></InfoCard>

        <InfoCard
        restaurantName='The Philly Cheesesteak Shop'
        orderNumber = '11287'
        specialInstructions = 'none'
        deliveryTime = '11:20'
        deliveryAddress='9898 Clayton Dr.'
        ></InfoCard>

        </div>
        </h1>
        <hr></hr>
        </div>
    )
}

export default DeliveryOrderPage
