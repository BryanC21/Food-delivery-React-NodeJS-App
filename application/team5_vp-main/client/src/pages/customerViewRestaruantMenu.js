
import React, { useEffect, useState } from "react";
import "../styling/customerViewRestaurantMenu.css";
import { connect } from "react-redux";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";
import { setCart } from "../redux/actions/customerActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import "../styling/Customer.css";

const handleAddToCart = (e) => {
  let item = {
    product_name: e
  }

  // dispatch(setCart(e));
};




const CustomerViewRestaruantMenu = ({ dispatch, restaruant_menu }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [select, setSelect] = useState('');
  const [quatity, setQuatity] = useState(0);
  const [price, setPrice] = useState(1);
  let i = 0;


  function plusOne() {
    i++;
  }

  useEffect(() => {//Rerender each time the number of order reduce
    console.log(quatity);
    setPrice(quatity);
}, [quatity]
);


  return (
    <div>
      <div className='jumbotron bg-dark'>
       



        <h2 className='customer-head'>Resturant Name</h2>

      </div>

      <div className='head-black '>
        <h3> Our Menu </h3>
      </div>


      <section className="order-section">
        <div className="order-content">
          <div className="wrapper2">
            {restaruant_menu.map((restaruant_menu) =>
              <button className="customer-buttom" key={i} onClick={() => { dispatch(setCart(restaruant_menu)); setModalIsOpen(true); setSelect(restaruant_menu.name);}}>
                <div className="card card-width" >
                  <img className="card-img-top" src="https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg" alt="burger"></img>
                  <div className="customer-card-body" >
                    <h5 className="customer-card-title" >{restaruant_menu.name}</h5>
                    <h6 className="card-title" >{restaruant_menu.description}</h6>
                    <h6 className="card-title" >$7.99</h6>
                    {plusOne()}
                   

                    {/* <button className="bottun " onClick={() => {dispatch(setCart(restaruant_menu));  setModalIsOpen(true);}}><p className="text-color">Add</p></button>*/}
                  </div>
                </div>
              </button>
              
            )}
          </div>
        </div>

      </section>

      <Modal isOpen={modalIsOpen} >
        <div className="modal-form">
          <h2 >Item added</h2>
          <p>Food: {select}</p>
          <select name="quatity" id="quatity" onChange={(e) => setQuatity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
          <br></br>
          total: {price}
          </div>
          <button className="buttonClass" onClick={() => setModalIsOpen(false)}> Add </button>
          
        </Modal>


      {/*  <div className="sidenav">
        <p>Search filter</p>
      </div>
      <div className="mergin">*/}


      {/* <CardDeck style={{display: 'flex', flexDirection: 'row', margin: '5rem', flexWrap: "wrap"}}> */}
      {/* <CardColumns >

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
      {/*      </Card.Body>
                </Col>
              </Row>

            </Card>


          )}
        </CardColumns>*/}
      {/*</CardDeck>*/}

    </div>











  )
};

const mapStateToProps = (state) => {

  return {
    restaruant_menu: state.customerReducer.restaruant_menu,
    cart: state.customerReducer.cart,
  };
};


export default connect(mapStateToProps)(CustomerViewRestaruantMenu);
