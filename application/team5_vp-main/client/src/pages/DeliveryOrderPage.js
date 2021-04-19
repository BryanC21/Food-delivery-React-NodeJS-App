import React,{useState} from "react";
import "./DeliveryOrderPage.css"
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import Navbar from "../utility/Navbar/Navbar"
import Footer from "../utility/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "../components/InfoCard";


const DeliveryOrderPage = ({orderCards}) =>{
    
    return(
        <div>
            <InfoCard
            img
            restaurant name
            order number
            special instructions
            delivery time
            delivery address
            restaurant address
            ></InfoCard>
        

        </div>
    )
}

export default DeliveryOrderPage