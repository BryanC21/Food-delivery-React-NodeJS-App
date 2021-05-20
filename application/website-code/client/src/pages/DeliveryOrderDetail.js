import React, { useState, useEffect } from 'react'
import InfoCard from '../components/InfoCard'
import MapContainer from '../components/MapContainer'
import "../styling/orderDetails.css"
import { connect, useSelector } from "react-redux";
import axios from 'axios';



function DeliveryOrderDetail({ selectedID }){
    const { auth } = useSelector((state) => ({ ...state }));
    const [restaruant, setRestaurant] = useState({})


    useEffect(() => {
        claimOrder();
        loadRestaurant();
        
      }, []);

      const claimOrder = async () => {
        const url = `/api/v1/orders/setOrderDeliverer?orderid=${selectedID.id}&delivererid=${auth.userID}`;
        

        try{
            axios.get(url).then((res) => {
                console.log(res)
                setRestaurant(res.data.orders)  
           
            
             
            }) }catch (err) {
              console.log(err);
              
            }

      }

      const loadRestaurant = async () => {
        const url = `/api/v1/restaurants/getRestaurantByID`;
        const data = {
            id: selectedID.fk_restaurant_id,  
        }
        try{
        axios.post(url, data).then((res) => {
          console.log(res)
          setRestaurant(res.data.orders)   
        })}catch (err) {
          console.log(err);
          
        }
      };

    console.log(selectedID)
    
    return(
        <div className="wrapperD">

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
            
            <br></br>
            <button className ="cancelOrder">Order Completed</button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        selectedID: state.customerReducer.selectedID,
    };
};



export default connect(mapStateToProps)(DeliveryOrderDetail);