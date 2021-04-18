import React from "react";
import "./DeliveryOrderPage.css"
import { connect } from "react-redux";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import { setCart } from"../redux/actions/customerActions";
import Navbar from "../utility/Navbar/Navbar"
import Footer from "../utility/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';

const DeliveryOrderPage = (props) =>{
    return(
        <div>
        <Navbar />

        
        <Footer />
        </div>
    )
}

export default DeliveryOrderPage