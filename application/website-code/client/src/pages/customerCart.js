import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/customerViewRestaurantMenu.css";
import "../styling/cart.css";
import { deleteCart } from "../redux/actions/customerActions";
import { useHistory } from "react-router-dom";
import "../styling/StandardStyle.css";
import payimg from "../images/pay.png";
import Modal from 'react-modal';
import axios from 'axios';




const CustomerCart = ({ cart, isLoggedIn, dispatch }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);// for modal
    const [total, setTotal] = useState(0);//Total number of order
    const [totalPrice, setTotalPrice] = useState(0.00);// total due
    const [title, setTitle] = useState("Summary")//Title Summary or Not thing in cart
    const [address, setAddress] = useState("")// address input field
    const [select, setSelect] = useState({});//item user selected will save to this
    //const [method, setMethod] = useState("Delivery");
    const method = useRef("Delivery");//delivery or pickup
    const pay = useRef("credit");// credit or paypal
    const show = useRef("")
    const id = useRef(89)
    const [type, setType] = useState("")
    const history = useHistory();//jump to different pages
    let count = 0;

    let theID = 0;
    

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {//calculate total due
            count = parseFloat(cart[i].price) + count
        }
        count.toFixed(2)
        setTotalPrice(count)
    },[cart.length])

    const handleItem = async () => {
        const data = {
            itemNames: ["toast", "bathwater", "Burger"], // save all item names in this array
            counts: [1, 2, 4], //for each item put count at same index
            P_or_D: "D", //write "P" if pickup order instead
            order_id: theID, //pickup or delivery order id that you are setting these items to
          };
          try {
            const res = await axios.post(
              "/api/v1/orders/setOrderItems",
              data
            );
            console.log("Success: ", res);
          } catch (err) {
            console.log("F? ",err);
          }

    }

    const handlecheckOut = async (event) => {
        event.preventDefault();
      
        if(method.current === "Delivery"){ //if delivery
            const data = {
                title: "Test delivery order",
                price: totalPrice,
                description: "yes",
                delivery_address: address,
            }

            try {
                const res = await axios.post("/api/v1/orders/createDeliveryOrder", data);
                console.log("Res", res.data.orders[0]);
                theID = parseInt(res.data.orders[0].id);
                console.log("------", theID)
                handleItem();
                
              } catch (err) {
                console.log(err);
              }

        console.log(data);
    }else{  //if pickup
        const data = {
            title: "Test Pickup order",
            price: totalPrice,
            description: "time: ASAP",
            pickup_address: "store",

        }
        
        
        try {
            const res = await axios.post("/api/v1/orders/createPickupOrder", data);
            console.log("Res", res);
            //history.push("/HP/DeliverySignIn");
          } catch (err) {
            console.log(err);
          }

    console.log(data);
    }


    console.log(method.current === "Delivery");

  //  console.log(data);
    }



    const handleDelete = () => {

        console.log(select);
        console.log(cart.indexOf(select));

        cart.splice(cart.indexOf(select), 1);

       // cart.pop()
      setTotal(cart.length);
     dispatch(deleteCart(cart));
        console.log("delete")
    };

    useEffect(() => {//Rerender each time the number of order reduce
        console.log("render");
        if (cart.length == 0) {
            setTitle("No food in cart")
        }
    }, [cart.length]
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(method)
        if (isLoggedIn === false) {
            // history.push('/HP/CustomerSignIn')

        }

    }

    function plusOne(e) {
        setSelect(e)
    }




    return (
        <div>


            <div className='menu-background'>

                <section className="order-section">
                    <h3 className="menu-head-h3">{title}</h3>
                    <div className="menu-order-content">
                        <div className="wrapper2">
                            {cart.map((cart) =>
                                <div className="card card-width">
                                    <img className="card-img-top" src={cart.image} alt="burger"></img>
                                    <div className="customer-card-body">

                                        <h5 className="customer-card-title">{cart.name}</h5>
                                        <h6 className="card-title">{cart.description}</h6>
                                        <h6 className="card-title">QTYx{cart.quatity}</h6>
                                        <button className="bottun" id="1" onClick={() => { setSelect(cart); console.log(cart); setModalIsOpen(true)}}><p className="text-color">Delete</p></button>

                                    </div>

                                </div>


                            )}
                        </div>
                    </div>

                </section>
            </div>

            <div className='jumbotron hero-bg'>


                <div className="checkout-wrapper">
                    <h2 className='head'>Amount Due: ${totalPrice.toFixed(2)}</h2>
                    <form onSubmit={handlecheckOut}>
                        <div className="order-form">
                            <h4>Method</h4>

                           






                            <span>
                                <label className='head'>
                                    <input type="radio" name="deliveryType" value="Delivery" checked={true} onClick={() => { method.current = "Delivery"; setType("")}} />
                            Delivery</label><br></br>
                            </span>

                            <span>
                                <input type="radio" name="deliveryType" value="Pickup" onClick={() => { method.current = "Pickup"; setType("hidden")}} />
                                <label className='head'>Pickup</label><br></br>
                            </span>



                        </div>
                        <div className="order-form">
                            <h4>Time</h4>

                            <select>
                                <option value="ASAP">ASAP</option>
                                <option value="30">30 minute</option>
                                <option value="60">60 minute</option>
                                <option value="120">120 minute</option>
                            </select>

                            <br></br>
                        </div>
                        <div className="order-form">
                            <h4>Address</h4>
                            <input className='input' placeholder="building, room" type={type} onChange={(e)=>setAddress(e.target.value)} required></input>
                        </div>

                        <div className="order-form">
                            <h4>Payment</h4>

                            <select onChange={(e) => pay.current = e.target.value}>
                                <option value="credit">Credit Card</option>
                                <option value="payPal">PayPal</option>
                            </select>

                            {/*   <span>
                            <input type="radio" name="payment" value="credit" checked={true}  onClick={()=>setPayment("credit")} />
                            <label className='head'>Credit Card</label><br></br>
                            </span>

                            <span>
                            <input type="radio" name="payment" value="payPal"  onClick={()=>setPayment("paypal")} />
                            <label className='head'>PayPal</label><br></br>
                            </span>*/}



                        </div>
                        <button className='cart-button'>Place Order</button>
                    </form>
                    <button className='cart-button' onClick={() => console.log(method.current + " " + pay.current)}>Place Order</button>

                </div>

            </div>

            {/*}
            <CardColumns >

                {cart.map((cart) => //Map customerReducer cart to card
                    <Card border="dark" style={{ margin: '1rem' }}>
                        <Row>
                            <Col xs={2}>
                                <Card.Img variant="top" style={{ height: '180px', width: '180px' }} src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg' />
                            </Col>
                            <Col xs={10}>
                                <Card.Body>
                                    <Card.Title>{cart.name}</Card.Title>
                                    <Card.Text>
                                        {cart.description}<br></br>
    Price: ${cart.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={handleDelete}>Delete</Button>

                                    {/*} <Link variant="primary" onClick={() => dispatch(setItemID(itemList.product_id))} to={`${match.path}/itemPage`}>Check</Link>*/}
            {/*}       </Card.Body>
                            </Col>
                        </Row>

                    </Card>


                )}
            </CardColumns>
                */}

<Modal isOpen={modalIsOpen} >
        
        <div className="modal-form">
        
          <h1 >{select.name}</h1>
          <h4>{select.description}</h4>
          <img src={select.image} alt="burger"></img>
          <br></br>
          <br></br>
          Qty {select.quatity}
          
          <br></br>
          <br></br>
        
          <br></br>
          <br></br>
          <button className="buttonClass" onClick={() => {setModalIsOpen(false); handleDelete()}}> Delete</button>
          <button className="buttonClass" onClick={() => {setModalIsOpen(false);}}> Cancel </button>
          </div>
        
          
        
        
        
         
          
        </Modal>
        </div>

    )
};



const mapStateToProps = (state) => {

    return {
        restaruant_menu: state.customerReducer.restaruant_menu,
        cart: state.customerReducer.cart,
        isLoggedIn: state.customerReducer.isLoggedIn,
    };
};



export default connect(mapStateToProps)(CustomerCart);