import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "../components/MapContainer";
import InfoCard from "../components/InfoCard";
import Footer from "../utility/Footer/Footer"
import "../styling/orderDetails.css"
import { connect, useSelector } from "react-redux";
import axios from 'axios';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom'
import Logo from "../images/sfsu_map_color-1.png";

function RestaurantDeliveryOrderDetail({ selectedID }){

    const history = useHistory();
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { auth } = useSelector((state) => ({ ...state }));
    const [restaruant, setRestaurant] = useState({})
    const [foodName, setfoodName] = useState([])
    const [Name, setName] = useState("[]")
    


    useEffect(() => {
        loadRestaurant();
        loadOrderDetail();
        
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

      const handleComplete = async () => {
        const url = `/api/v1/orders/removeDeliveryOrder?id=${selectedID.id}`;
        

        try{
            axios.get(url).then((res) => {
                console.log(res)
                history.push("/HP/RestaurantOrderPage")
               // setRestaurant(res.data.orders)  
           
            
             
            }) }catch (err) {
              console.log(err);
              
            }

      }

      const loadOrderDetail = async () => {
        
        const url = `/api/v1/orders/getDeliveryOrder?id=${selectedID.id}`;
        
        try{
        axios.get(url).then((res) => {
          console.log(res.data.orders)

          var i;
          for( i = 0; i < res.data.orders.length; i++){
              
              console.log(res.data.orders[i].itemName)
              setfoodName(foodName.push(res.data.orders[i].itemName))

          }

          console.log(foodName)
          if(foodName != undefined && foodName != null){
          setName(foodName.toString())
          }
         
          
        }).catch((err) =>
        {
            console.log(err);
        })}catch (err) {
          console.log(err);
          
          
        }
      };

      const loadRestaurant = async () => {
        
        const url = `/api/v1/restaurants/getRestaurantByID?id=${selectedID.fk_restaurant_id}`;
        
        try{
        axios.get(url).then((res) => {
          console.log(res)
          setRestaurant(res.data.restaurant[0])   
          console.log(res.data.restaurant[0])
          console.log(restaruant.restaurant_name)
          
        }).catch((err) =>
        {
            history.push("/HP/DeliveryOrderPage")
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
                foodName = {Name}
                orderNumber = {selectedID.id}
                orderersInfo = {restaruant.address}
                deliveryAddress={selectedID.delivery_address}
                
               
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

export default connect(mapStateToProps)(RestaurantDeliveryOrderDetail); 