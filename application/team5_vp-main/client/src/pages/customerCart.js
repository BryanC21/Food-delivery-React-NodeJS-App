import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customerViewRestaurantMenu.css";
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
            <div className='jumbotron bg-dark'>


                <h2 className='head'>Cart total: {total}</h2>



            </div>

            <CardColumns >

                {cart.map((cart) =>
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
                                </Card.Body>
                            </Col>
                        </Row>

                    </Card>


                )}
            </CardColumns>
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