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
               // setRestaurant(res.data.orders)  
           
            
             
            }) }catch (err) {
              console.log(err);
              
            }

      }

      const loadRestaurant = async () => {
        
        const url = `/api/v1/restaurants/getRestaurantByID?id=${selectedID.fk_restaurant_id}`;
        
        try{
        axios.get(url).then((res) => {
          console.log(res)
          setRestaurant(res.data.restaurant[0])   
          console.log(res.data.restaurant[0])
          console.log(restaruant.restaurant_name)
          
        })}catch (err) {
          console.log(err);
          
        }
      };

    console.log(selectedID)


    if(restaruant.restaurant_name != undefined){
    
    return(
        <div className="wrapperD">

            <InfoCard 
                restaurantName = {restaruant.restaurant_name}
                foodName = "BBQ Chicken Sandwich"
                orderNumber = {selectedID.id}
                orderersInfo = {restaruant.address}
                deliveryTime = "10:00AM"
                
               
            ></InfoCard>
           <MapContainer name = {restaruant.address}></MapContainer>
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
    
    }else{
        return( <div className="wrapperD"></div>)
    }
}

const mapStateToProps = (state) => {

    return {
        selectedID: state.customerReducer.selectedID,
    };
};



export default connect(mapStateToProps)(DeliveryOrderDetail);