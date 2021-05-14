import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/customerViewRestaurantMenu.css";
import "../styling/cart.css";
import { deleteCart } from "../redux/actions/customerActions";
import { useHistory } from "react-router-dom";
import "../styling/StandardStyle.css";
import payimg from "../images/pay.png";




const CustomerCart = ({ cart, isLoggedIn, dispatch }) => {
    const [total, setTotal] = useState(0);//Total number of order
    const [totalPrice, setTotalPrice] = useState(0.00);
    const [title, setTitle] = useState("Summary")
    const [select, setSelect] = useState();
    const [method, setMethod] = useState("Delivery");
    const [payment, setPayment] = useState("credit");
    const history = useHistory();
    let count = 0;

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {

            count = parseFloat(cart[i].price) + count

        }

        count.toFixed(2)

        setTotalPrice(count)


    }
        , [cart.length]
    )
    //for(let i = 0; i < cart.length; i++){

    //  count = cart[0].price + count

    // }

    //setTotalPrice(count);

 

    const handleDelete = () => {
        
        console.log(select);
        console.log(cart.indexOf(select));

        cart.pop()
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
                                    <img className="card-img-top" src="https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg" alt="burger"></img>
                                    <div className="customer-card-body">
                                       
                                        <h5 className="customer-card-title">{cart.name}</h5>
                                        <h6 className="card-title">{cart.description}</h6>
                                        <h6 className="card-title">QTYx{cart.quatity}</h6>
                                        <button className="bottun" key="1"   onClick={() => { setSelect(cart);console.log(cart); console.log(select)}}><p className="text-color">Delete</p></button>
                                        
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
                    <form onSubmit={handleSubmit}>
                    <div className="order-form">
                        <h4>Method</h4>

                        <span>
                            <input type="radio" id="d" name="deliveryType" value="Delivery" onClick={()=>setMethod("Delivery")} checked></input>
                            <label className='head'>Delivery</label><br></br>
                            </span>

                            <span>
                            <input type="radio" id="p" name="deliveryType" value="Pickup" onClick={()=>setMethod("Pickup")}></input>
                            <label className='head'>Pickup</label><br></br>
                            </span>
                           
                        
                    </div>
                    <div className="order-form">
                        <h4>Time</h4>

                        <select>
                            <option value="AM">ASAP</option>
                            <option value="PM">30 minute</option>
                            <option value="PM">60 minute</option>
                            <option value="PM">120 minute</option>
                        </select>

                        <br></br>
                    </div>
                    <div className="order-form">
                        <h4>Address</h4>
                        <input className='input' placeholder="building, room"  required></input>
                    </div>

                    <div className="order-form">
                        <h4>Payment</h4>

                         <span>
                            <input type="radio" id="c" name="payment" value="credit"  onClick={()=>setPayment("credit")}  checked></input>
                            <label className='head'>Credit Card</label><br></br>
                            </span>

                            <span>
                            <input type="radio" id="pa" name="payment" value="payPal"  onClick={()=>setPayment("paypal")} ></input>
                            <label className='head'>PayPal</label><br></br>
                            </span>
                       


                    </div>
                    <button className='cart-button' onClick={() => console.log(method)}>Place Order</button>
                    </form>
                    <button className='cart-button' onClick={() => console.log(method)}>Place Order</button>

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