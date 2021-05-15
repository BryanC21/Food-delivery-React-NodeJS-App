import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/DelivererMainMenu.css";
import InfoCard from "../components/InfoCard"
import MapContainer from '../components/MapContainer';
import { left } from '@popperjs/core';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';


const DelivererMainMenu = (props) => {
    const history = useHistory();
    const { auth } = useSelector((state) => ({ ...state }));

    const handleClick = () => {
        history.push("/HP/DeliveryOrderPage")

    }
    
    return (
        <div>
            <div className = 'heading'>

                {/*
            <h1 >
                {props.name}
                Placeholder Name
                </h1>*/}

               <h1>
               {auth.email}, Welcome
               
                </h1>

            <h6>
                Number of Orders Completed: {props.numberOfOrders}
            </h6>

        <div>
            {/*
            <button className = 'button'>
                Customer Reviews
            </button>
            */}

            <button className = 'button' onClick = {()=> handleClick()}>
                Orders
            </button>
            {/*
            <button className = 'button'>
                My Performance
            </button>
            */}
        </div>
        </div>
        <div>
            <h1 className = 'orderHeading'>
                Completed Orders
                <div className = 'orderSection'>
                <InfoCard 
                img = "https://prods3.imgix.net/images/articles/2017_05/Facebook-hawaiian-pizza-origins.jpg" 
                restaurantName = "Circular Table" 
                foodName = "Pineapple Pizza"
                orderNumber = "2"
                deliveredTime = "10:00PM"
                deliveredDate = "4/1/2021"
                statusFulfilled = "Delivered"
                ></InfoCard>
                <InfoCard 
                img = "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg"
                restaurantName = "Inside and Outside"
                foodName = "Double Double"
                orderNumber = "10"
                deliveredTime = "9:00AM"
                deliveredDate = "3/21/2019"
                statusFulfilled = "Delivered"
                ></InfoCard>
                
                
                
                </div>
                
            </h1>
        </div>
        </div>
    );
}

export default DelivererMainMenu