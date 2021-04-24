
import React, {useState} from "react";
import "../styling/customerViewRestaurantMenu.css";
import { connect } from "react-redux";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import { setCart } from"../redux/actions/customerActions";
import Navbar from "../utility/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';

const handleAddToCart = (e) => {
  let item = {
    product_name: e
  }

 // dispatch(setCart(e));
};


const CustomerViewRestaruantMenu = ({dispatch, restaruant_menu }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  
  return (
    <div>
      <div className='jumbotron bg-dark'>
      <Modal isOpen={modalIsOpen}>
                      <h2>Item added</h2>
                      <button onClick={() => setModalIsOpen(false)}> close </button>
                      </Modal>
                     


<<<<<<< HEAD
        <h2 className='head'>Resturant Name</h2>
=======
        <h2 className='customer-head'>Resturant Name</h2>
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3

      </div>

      <div className='head-black '>
        <h3> Our Menu </h3>
      </div>
<<<<<<< HEAD
      <div className="sidenav">
        <p>Search filter</p>
      </div>
      <div className="mergin">


        {/* <CardDeck style={{display: 'flex', flexDirection: 'row', margin: '5rem', flexWrap: "wrap"}}> */}
        <CardColumns >
=======


      <section className="order-section">
                <div className="order-content">
                    <div className="wrapper2">
                        {restaruant_menu.map((restaruant_menu) =>
                        <button  className="customer-buttom" onClick={() => {dispatch(setCart(restaruant_menu));  setModalIsOpen(true);}}>
                            <div className="card card-width">
                                <img className="card-img-top" src="https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg" alt="burger"></img>
                                <div className="customer-card-body">
                                    <h5 className="card-title">{restaruant_menu.name}</h5>
                                    <h6 className="card-title">{restaruant_menu.description}</h6>
                                  
                                   {/* <button className="bottun " onClick={() => {dispatch(setCart(restaruant_menu));  setModalIsOpen(true);}}><p className="text-color">Add</p></button>*/}
                                </div>
                            </div>
                            </button>
                        )}
                    </div>
                </div>

            </section>


    {/*  <div className="sidenav">
        <p>Search filter</p>
      </div>
      <div className="mergin">*/}


        {/* <CardDeck style={{display: 'flex', flexDirection: 'row', margin: '5rem', flexWrap: "wrap"}}> */}
       {/* <CardColumns >
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3

          {restaruant_menu.map((restaruant_menu) =>
            <Card border="dark" style={{ margin: '1rem' }}>
              <Row>
                <Col xs={2}>
                  <Card.Img variant="top" style={{ height: '180px', width: '180px' }} src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg' />
                </Col>
                <Col xs={10}>
                  <Card.Body>
                    <Card.Title>{restaruant_menu.name}</Card.Title>
                    <Card.Text>
                      {restaruant_menu.description}<br></br>
              Price: ${restaruant_menu.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => {dispatch(setCart(restaruant_menu));  setModalIsOpen(true);}} >Add</Button>
                    
                    {/*} <Link variant="primary" onClick={() => dispatch(setItemID(itemList.product_id))} to={`${match.path}/itemPage`}>Check</Link>*/}
<<<<<<< HEAD
                  </Card.Body>
=======
            {/*      </Card.Body>
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
                </Col>
              </Row>

            </Card>


          )}
<<<<<<< HEAD
        </CardColumns>
=======
        </CardColumns>*/}
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
        {/*</CardDeck>*/}

      </div>







<<<<<<< HEAD
      {/* {
              props.itemList.map(item=>
              <div>
                 <a href={'http://localhost:3001/api/items?itemId='+item.product_id}> 
                  {item.product_name}
                 </a> *
                {s}is selling for ${item.price}
              </div>)
              } */}


    </div>
=======
    


   
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
  )
};

const mapStateToProps = (state) => {

  return {
    restaruant_menu: state.customerReducer.restaruant_menu,
    cart: state.customerReducer.cart,
  };
};


export default connect(mapStateToProps)(CustomerViewRestaruantMenu);
