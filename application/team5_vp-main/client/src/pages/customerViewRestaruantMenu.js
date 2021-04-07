
import React from "react";
import "./customerViewRestaurantMenu.css";
import { connect } from "react-redux";
import { Button, Card, CardColumns } from "react-bootstrap";




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
         <h2 className='head'>Resturant Name</h2>



         <CardColumns >

        {restaruant_menu.map((restaruant_menu) =>
          <Card>


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

      </CardColumns>
        





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
