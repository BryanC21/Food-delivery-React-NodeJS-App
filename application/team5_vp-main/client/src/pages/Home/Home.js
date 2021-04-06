import React from "react";
import { Link } from "react-router-dom";
import Chef from "../../images/cooked.svg";

function Home() {
  return (
    <div>
      <header>
        <div className='  hero jumbotron jumbotron-fluid '>
          <div className=' hero-content container'>
            <h1 className='display-1 primary-color-font logo-font'>
              State
              <span className='secondary-color-font'>Unii</span>
            </h1>
            <p className='h6 white-color-font'>
              Convenient meals delivered or picked up at one's disposal.
            </p>
            <Link className='btn btn-outline-success py-2 my-2' to='#'>
              Register for Free
            </Link>
          </div>
        </div>
      </header>
      <section className='restaurant-section jumbotron jumbotron-fluid'>
        <div className='restaurant-content  container-fluid'>
          <div>
            <h1>Local Restaurants</h1>
            <p className='lead'>
              Select your favorite restaurants to start ordering
            </p>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='card card-width text-white primary-color-bg mb-3'>
                <img
                  className='card-img-top'
                  src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/breakfast_o1qakz.jpg'
                  alt='Breakfast'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Morning Club</h5>
                  <p className='card-text'>Park Merced, 94132</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card card-width text-white primary-color-bg mb-3'>
                <img
                  className='card-img-top'
                  src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/korean_b17ap5.jpg'
                  alt='Korean'
                />
                <div className='card-body'>
                  <h5 className='card-title'>K-Blast</h5>
                  <p className='card-text'>333 Eucalyptus Dr, 94132</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card card-width text-white primary-color-bg mb-3'>
                <img
                  className='card-img-top'
                  src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/chinese_uyayjh.jpg'
                  alt='Chinese'
                />
                <div className='card-body'>
                  <h5 className='card-title'>DimSum</h5>
                  <p className='card-text'>265 Winston Dr, 94132</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='card card-width text-white primary-color-bg mb-3'>
                <img
                  className='card-img-top'
                  src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/Italian_bmuhgo.jpg'
                  alt='Italian'
                />
                <div className='card-body'>
                  <h5 className='card-title'>ItalianCusine</h5>
                  <p className='card-text'>Daly City Bart, 94132</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card card-width text-white primary-color-bg mb-3'>
                <img
                  className='card-img-top'
                  src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1616095822/American_hef5n1.jpg'
                  alt='American'
                />
                <div className='card-body'>
                  <h5 className='card-title'>BreakfastPerrfect</h5>
                  <p className='card-text'>Stonestown, 94132</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card card-width text-white primary-color-bg mb-3'>
                <img
                  className='card-img-top'
                  src='https://res.cloudinary.com/dis7ep3yq/image/upload/v1607472716/j2nbz4j9mr7spa1cytx2.jpg'
                  alt='American'
                />
                <div className='card-body'>
                  <h5 className='card-title'>CoffeeSynergy</h5>
                  <p className='card-text'>Stonestown, 94132</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='chef-section jumbotron jumbotron-fluid'>
        <div className='chef-content'>
          <div className='container'>
            <div className='row'>
              <div className='chef-about col-sm-6 white-color-font '>
                <h2>Your Next Meal Awaits You. </h2>
                <p className='lead'>
                  Neighborhood chefs are waiting to cook your meal that will
                  satisfy your cravings.
                </p>
              </div>
              <div className='col-sm-6'>
                <img className='chef-img' src={Chef} alt='chef' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
