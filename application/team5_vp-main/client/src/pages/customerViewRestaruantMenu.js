
import React, {useState} from "react";
import "./customerViewRestaurantMenu.css";
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
                     


        <h2 className='head'>Resturant Name</h2>

      </div>

      <div className='head-black '>
        <h3> Our Menu </h3>
      </div>
      <div className="sidenav">
        <p>Search filter</p>
      </div>
      <div className="mergin">


        {/* <CardDeck style={{display: 'flex', flexDirection: 'row', margin: '5rem', flexWrap: "wrap"}}> */}
        <CardColumns >

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
                  </Card.Body>
                </Col>
              </Row>

            </Card>


          )}
        </CardColumns>
        {/*</CardDeck>*/}

      </div>







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
  )
};

const mapStateToProps = (state) => {

  return {
    restaruant_menu: state.customerReducer.restaruant_menu,
    cart: state.customerReducer.cart,
  };
};


export default connect(mapStateToProps)(CustomerViewRestaruantMenu);
