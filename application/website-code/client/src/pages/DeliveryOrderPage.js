import React,{useEffect,useState} from "react";
import "../styling/DeliveryOrderPage.css"
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "../components/InfoCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Modal from 'react-modal';
import MapContainer from "../components/MapContainer";
import { setId } from "../redux/actions/customerActions";


const DeliveryOrderPage = () =>{
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();

    const { auth } = useSelector((state) => ({ ...state }));

    const handleClick = () => {
        history.push("/HP/DeliveryOrderDetail")

    }

    useEffect(() => {
        loadMenu();
        
      }, []);
      
      const loadMenu = async () => {
        const url = `/api/v1/orders/deliveryOrders`;
        try{
        axios.get(url).then((res) => {
          
          console.log(res)
          setOrders(res.data.orders)
         
        })}catch (err) {
          console.log(err);
          //setMenu(0);
        }
      };
    
    return(
        <div>

        <div className="Title">
        <p><b>Current available orders in your area</b></p>
        </div>

        <h1 className='overHeading'>
        <div className = 'orderSection'>

        {orders.map((orders) => 
        
       < div className='infoSheet'>
         {console.log(orders)}
        <InfoCard
        restaurantName="Nation's Giant Hamburgers"
        restaurantAddress='612 Willem Ave. Berkley, CA 48067'
        orderNumber={orders.id}
        specialInstructions={orders.comments}
        deliveryTime='11:30pm'
        deliveryAddress={orders.delivery_address}
        ></InfoCard>
        <button className ='confirmButton' onClick={()=>{dispatch(setId(orders));handleClick()}}>Check Status</button>
        </div>
        )}

       

        </div>
        </h1>
        <hr></hr>



        <Modal isOpen={modalIsOpen} >
        
        <div className="modal-form">
          
       
          
        <MapContainer name={"612 Willem Ave. Berkley, CA 48067"} />
          <br></br>
          <br></br>
          <button className="buttonClass" onClick={() => {setModalIsOpen(false);}}> Cancel </button>
          </div>

          



         
          
        </Modal>
        </div>
    )
}

export default DeliveryOrderPage
