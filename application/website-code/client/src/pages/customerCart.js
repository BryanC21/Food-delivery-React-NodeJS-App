import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/customerViewRestaurantMenu.css";
import "../styling/cart.css";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import { deleteCart } from "../redux/actions/customerActions";
import { useHistory } from "react-router-dom";
import "../styling/StandardStyle.css";




const CustomerCart = ({ cart, isLoggedIn, dispatch }) => {
    const [total, setTotal] = useState(cart.length);//Total number of order
    const history = useHistory();

    console.log(cart);

    const handleDelete = () => {
        let item = { name: "burger", description: "Taste good", price: "17.99" };
        console.log(cart.pop());
        setTotal(cart.length);


        dispatch(deleteCart(cart));
        console.log("delete")
    };

    useEffect(() => {//Rerender each time the number of order reduce
        console.log("render");
    }, [cart.length]
    );

    const handleClick = () => {
        console.log(isLoggedIn)
        if (isLoggedIn === false) {
            history.push('/HP/CustomerSignIn')

        }

    }

    return (
        <div>
            <div className='jumbotron hero-bg'>


                <h2 className='head'>Cart total: {total}</h2>



            </div>

            <div className='menu-background'>

            <section className="order-section">
                <h3 className="menu-head-h3">Summary</h3>
                <div className="menu-order-content">
                    <div className="wrapper2">
                        {cart.map((cart) =>
                            <div className="card card-width">
                                <img className="card-img-top" src="https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg" alt="burger"></img>
                                <div className="customer-card-body">
                                    <h5 className="customer-card-title">{cart.name}</h5>
                                    <h6 className="card-title">{cart.description}</h6>
                                    <h6 className="card-title">QTYx{cart.quatity}</h6>
                                    <button className="bottun " onClick={handleDelete}><p className="text-color">Delete</p></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </section>
            </div>

            <div className='jumbotron hero-bg'>

                <h2 className='head'>Check Out Total:</h2>
                <div className="order-form">
                    <form >

                        <input type="radio" id="p" name="deliveryType" value="Pickup" checked></input>
                        <label for="male" className='head'>Pickup</label><br></br>
                        <input type="radio" id="d" name="deliveryType" value="Delivery"></input>
                        <label for="female" className='head'>Delivery</label><br></br>
                    </form>

                    <label for="cars" className='input'>Choose a Delivery Times:</label>
                    <input className='input'></input>

                    <select name="cars" id="cars">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <br></br>
                    <button className='cart-button' onClick={(e) => handleClick()}>Check Out</button>

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