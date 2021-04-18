import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./DelivererMainMenu.css";
import InfoCard from "../components/InfoCard"
import MapContainer from '../components/MapContainer';
import { left } from '@popperjs/core';


const DelivererMainMenu = (props) => {
    
    return (
        <div>
            <div className = 'heading'>
            <h1 >
                {props.name}
                Placeholder Name
            </h1>

            <h6>
                Number of Orders Completed: {props.numberOfOrders}
            </h6>

        <div>
            <button className = 'button'>
                Customer Reviews
            </button>

            <button className = 'button'>
                Orders
            </button>

            <button className = 'button'>
                My Performance
            </button>
        </div>
        </div>
        <div>
            <h1 className = 'orderHeading'>
                Completed Orders
                <div className = 'orderSection'>
                <InfoCard 
                img = "https://prods3.imgix.net/images/articles/2017_05/Facebook-hawaiian-pizza-origins.jpg" 
                restaurantName = "Circular Table" 
                foodName = "Italian Crucifixion"
                orderNumber = "2"
                deliveredTime = "10:00PM"
                deliveredDate = "4/1/2021"
                statusFulfilled = "Delivered"
                ></InfoCard>
                <InfoCard 
                img = "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg"
                restaurantName = "Inside and Outside"
                foodName = "Daily Calorie Intake Special"
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