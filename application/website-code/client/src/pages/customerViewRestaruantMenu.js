
import React, { useEffect, useState } from "react";
import "../styling/customerViewRestaurantMenu.css";
import { connect } from "react-redux";
import { setCart } from "../redux/actions/customerActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import "../styling/Customer.css";
import "../styling/StandardStyle.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const handleAddToCart = (e) => {
  let item = {
    product_name: e
  }

  // dispatch(setCart(e));
};




const CustomerViewRestaruantMenu = ({ dispatch, restaruant_menu, selectedID }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [select, setSelect] = useState({});
  const [quatity, setQuatity] = useState(1);
  const [price, setPrice] = useState(1);
  const [menu, setMenu] = useState([]);
  const history = useHistory();
  let i = 0;

  let order = {
    name: '',
    description: '',
    price: 0,
    quatity: 0,
  }


  function plusOne() {
    i++;
  }

  useEffect(() => {//Rerender each time the number of order reduce
    console.log(quatity);
    setPrice(quatity*price);
}, [quatity]
);

useEffect(() => {
  loadMenu();
  
}, []);

const loadMenu = async () => {
  const url = `/api/v1/restaurants//getAllMenuItems?restaurantId=${selectedID}`;
  try{
  axios.get(url).then((res) => {
    setMenu(res.data.menuItems);
    console.log(res.data.menuItems)
    if(res.data.menuItems == undefined){
      history.push("/HP/search_result_menu")
 
   }
  })}catch (err) {
    console.log(err);
    //setMenu(0);
  }
};


console.log("id is" + selectedID)

const handleAdd = () => {
  let order = {
    name: select.name,
    description: select.description,
    price: price,
    quatity: quatity,
  }

  dispatch(setCart(order));

};


if(menu == undefined){
  
  return(<div>
    <div className='jumbotron bg-dark'>
   
     



      <h2 className='customer-head'>Nothing</h2>

    </div>
    </div>
    );
}else{


  return (
    <div>
      <div className='jumbotron bg-dark'>
       



        <h2 className='customer-head'>Resturant Name</h2>

      </div>

      <div className='menu-background'>

      <div className='menu-head-h3'>
        <h3> Popular Items </h3>
      </div>


      <section className="order-section">
        <div className="menu-order-content">
          <div className="wrapper2">
            {menu.map((menu) =>
              <button className="customer-buttom" key={menu.id} onClick={() => {setModalIsOpen(true); setSelect(menu); setPrice(menu.price)}}>
                <div className="card card-width" >
                  <img className="card-img-top" src={menu.image} alt="burger"></img>
                  <div className="customer-card-body" >
                    <h5 className="customer-card-title" >{menu.items_name}</h5>
                    <p className="card-title" maxlength="12">{menu.description}</p>
                    <h6 className="card-title" >${menu.price}</h6>
                    {plusOne()}
                   

                    {/* <button className="bottun " onClick={() => {dispatch(setCart(restaruant_menu));  setModalIsOpen(true);}}><p className="text-color">Add</p></button>*/}
                  </div>
                </div>
              </button>
              
            )}
          </div>
        </div>
        

      </section>
      </div>

      <Modal isOpen={modalIsOpen} >
        
        <div className="modal-form">
       
          <h1 >{select.items_name}</h1>
          <h4>{select.description}</h4>
          <img src={select.image} alt="burger"></img>
          <br></br>
          <br></br>
          Qty <select name="quatity" id="quatity" onChange={(e) => setQuatity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
          <br></br>
          <br></br>
          <h4>Extra instructions</h4>
          <textarea rows="4" cols="90" maxlength="50" placeholder="Add any special requests (e.g.,food allergies, extra spicy, etc.) and the store will do its best to accommodate you."></textarea>
          <br></br>
          <br></br>
          <h4>If sold out</h4>
          <select name="If sold out" id="If sold out" >
          <option value="1">Go with merchant recommendation</option>
          <option value="2" selected>Refund this item</option>
          <option value="3">Contact me</option>
          <option value="4">Cancel entire order</option>
          </select>
          <br></br>
          <br></br>
          <button className="buttonClass" onClick={() => {setModalIsOpen(false); handleAdd(select); }}> Add to cart - ${price} </button>
          <button className="buttonClass" onClick={() => {setModalIsOpen(false);}}> Cancel </button>
          </div>

          



         
          
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











  )}
};

const mapStateToProps = (state) => {

  return {
    restaruant_menu: state.customerReducer.restaruant_menu,
    cart: state.customerReducer.cart,
    selectedID: state.customerReducer.selectedID,
  };
};


export default connect(mapStateToProps)(CustomerViewRestaruantMenu);
