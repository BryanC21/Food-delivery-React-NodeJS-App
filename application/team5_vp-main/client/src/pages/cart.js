import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customerViewRestaurantMenu.css";
import "./cart.css";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import { deleteCart } from "../redux/actions/customerActions";

function Cart({ cart, dispatch }) { ///////////////////////////////////////////Test page//////////////////////////////////////////////////////////////////////////////////
    const [total, setTotal] = useState(cart.length);
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
            <div className='jumbotron bg-dark'>


                <h2 className='head'>Check Out Total:</h2>



            </div>
        </div>

    );

}

const mapStateToProps = (state) => {

    return {
        restaruant_menu: state.customerReducer.restaruant_menu,
        cart: state.customerReducer.cart,
    };
};


export default connect(mapStateToProps)(Cart);