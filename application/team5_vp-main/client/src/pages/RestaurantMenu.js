import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardColumns, CardDeck, Row, Col } from "react-bootstrap";

const RestaurantMenu = (props) => {
  const restaurantName = props.restaurantName

  const [foodName, setFoodName] = React.useState('')
  const [cuisineType, setCuisineType] = React.useState('')
  const [pricing, setPricing] = React.useState('')
  const [description, setDescription] = React.useState('')

  return (
    <div>
<<<<<<< HEAD
=======
      {/*
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
      <br />
      <header className="text-center">
        <h1>Restaurant Menu for {restaurantName}</h1>
      </header>
      <br />
      <section className='jumbotron bg-light'>
        <div className='container-fluid '>
          <div className='row'>
            <div className="col-md text-center">
              <button
                className='btn btn-primary '
                type='submit'
              >View All Orders</button>
            </div>
            <div className="col-md text-center">
              <h2>View Order's Status</h2>
              <p>Locate all your customer's orders in a click of a button</p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
      */}
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3

      <section className='jumbotron bg-dark '>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-md text-center text-white align-self-center">
              <h2>Add your latest menu</h2>
              <p>Upload your newest menu item to attract customers</p>
            </div>
            <div className="col-md text-white text-center ">
              <form className='container border rounded' style={{ paddingBottom: '20px', paddingTop: '20px' }} onSubmit={(e) => e.preventDefault()}>
                <label>
                  Food Name:
                    <br></br>
                  <input type="text" style={{ width: "40vw" }} value={foodName} onChange={(e) => setFoodName(e.target.value)} />
                </label>
                <br />
                <label>
                  Cuisine Type:
                    <br></br>
                  <input type="text" style={{ width: "40vw" }} value={cuisineType} onChange={(e) => setCuisineType(e.target.value)} />
                </label>
                <br />
                <label>
                  Price:
                    <br></br>
                  <input type="text" style={{ width: "40vw" }} value={pricing} onChange={(e) => setPricing(e.target.value)} />
                </label>
                <br />
                <label>
                  Description:
                    <br></br>
                  <input type="text" style={{ width: "40vw" }} value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <br />
                <div className='text-center'>
                  <button className='btn btn-primary'>Submit Menu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
      {/*
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
      <section className='jumbotron bg-light'>
        <div className='container-fluid '>
          <div className='row'>
            <div className="text-center">
              <h2>View your menu</h2>
            </div>
            <div>
              <CardColumns >
                <Card border="dark" style={{ margin: '1rem' }}>
                  <Row>
                    <Col xs={2}>
                      <Card.Img variant="top" style={{ height: '180px', width: '180px' }} src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg' />
                    </Col>
                    <Col xs={10}>
                      <Card.Body>
                        <Card.Title>{'Pancakes'}</Card.Title>
                        <Card.Text>
                          {'Good food'}<br></br>Price: ${'10'}
                        </Card.Text>
                        <Button variant="primary" >Delete</Button>
<<<<<<< HEAD

                        {/*} <Link variant="primary" onClick={() => dispatch(setItemID(itemList.product_id))} to={`${match.path}/itemPage`}>Check</Link>*/}
=======
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
                      </Card.Body>
                    </Col>
                  </Row>

                </Card>
                <Card border="dark" style={{ margin: '1rem' }}>
                  <Row>
                    <Col xs={2}>
                      <Card.Img variant="top" style={{ height: '180px', width: '180px' }} src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg' />
                    </Col>
                    <Col xs={10}>
                      <Card.Body>
                        <Card.Title>{'Cheeseburger'}</Card.Title>
                        <Card.Text>
                          {'Good food'}<br></br>Price: ${'10'}
                        </Card.Text>
                        <Button variant="primary" >Delete</Button>
<<<<<<< HEAD

                        {/*} <Link variant="primary" onClick={() => dispatch(setItemID(itemList.product_id))} to={`${match.path}/itemPage`}>Check</Link>*/}
=======
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
                      </Card.Body>
                    </Col>
                  </Row>

                </Card>
              </CardColumns>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </div>
  );
}
export default RestaurantMenu;
=======
      */}
    </div>
  );
}
export default RestaurantMenu;
>>>>>>> 7e98124adcacce91992968a78454732ac64448e3
