import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/customerViewRestaurantMenu.css";
import "../styling/cart.css";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import { deleteCart } from "../redux/actions/customerActions";



const CustomerCart = ({ cart, dispatch }) => {
    const [total, setTotal] = useState(cart.length);//Total number of order

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

    return (
        <div>
            <div className='jumbotron hero-bg'>


                <h2 className='head'>Cart total: {total}</h2>



            </div>

            <section className="order-section">
                <div className="order-content">
                    <div className="wrapper2">
                        {cart.map((cart) =>
                            <div className="card card-width">
                                <img className="card-img-top" src="https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg" alt="burger"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{cart.name}</h5>
                                    <h6 className="card-title">{cart.description}</h6>
                                    <h6 className="card-title">QTYx1</h6>
                                    <button className="bottun " onClick={handleDelete}><p className="text-color">Delete</p></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </section>

            <div className='jumbotron hero-bg'>

                <h2 className='head'>Check Out Total:</h2>
                <div className = "order-form">
                <form >
                    
                    <input type="radio" id="male" name="gender" value="male" checked></input>
                    <label for="male" className='head'>Pickup</label><br></br>
                    <input type="radio" id="female" name="gender" value="female"></input>
                    <label for="female" className='head'>Delivery</label><br></br>
                </form>

                <label for="cars" className='input'>Choose a Delivery Times:</label>
                <input className='input'></input>

                <select name="cars" id="cars">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>

                <br></br>
             <Button className='' to='#'>
                Order
                </Button>
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
    };
};

export default connect(mapStateToProps)(CustomerCart);