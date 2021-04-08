
import React from "react";
import "./customerViewRestaurantMenu.css";
import { connect } from "react-redux";
import { Button, Card, CardColumns, CardDeck } from "react-bootstrap";
import Navbar from "../utility/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";




const customerViewRestaruantMenu =   ({restaruant_menu})  => {
  //console.log(14,props)
 
// function dispatch(){
//   props.dispatch(itemListA())

// }

//console.log(15,props.itemlist)
    //console.log(15,props.itemlist[0])
    //dispatch();
    var s = ' '
     return (
        <div>
          <div className='jumbotron bg-dark'>
            
          
         <h2 className='head'>Resturant Name</h2>

         </div>

         <div className='head'>
           <h3> Our Menu </h3>
         </div>
         

         <CardDeck style={{display: 'flex', flexDirection: 'row', margin: '5rem', flexWrap: "wrap"}}>

        {restaruant_menu.map((restaruant_menu) =>
          <Card style={{ width: '18rem', margin: '1rem' }}>

            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{restaruant_menu.name}</Card.Title>
              <Card.Text>
            
              Price: ${restaruant_menu.price}
              </Card.Text>
             <Button variant="primary">Add</Button> 
             
             {/*} <Link variant="primary" onClick={() => dispatch(setItemID(itemList.product_id))} to={`${match.path}/itemPage`}>Check</Link>*/}
            </Card.Body>

          </Card>


        )}

</CardDeck>

     
        





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
  };
};


export default connect(mapStateToProps)(customerViewRestaruantMenu);
