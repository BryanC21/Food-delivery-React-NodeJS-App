import React from "react";
import AWS from "../../images/logos/aws-2.jpg";
import MySQL from "../../images/logos/MySQL.svg";
import ReactImg from "../../images/logos/react.png";
import ReduxImg from "../../images/logos/redux-logo.png";
import NodeImg from "../../images/logos/nodejs.png";
import ExpressImg from "../../images/logos/express.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUsers);

function Home() {
  return (
    <>
      <section className='hero section-background-color'>
        <div className='hero-about container wrapper-two '>
          <header className='flex-column '>
            <h1 className='primary-color font-xl'>Team5</h1>
            <p className='secondary-heading secondary-color left-20 '>
              A team of JavaScript developers
            </p>
          </header>
          <div className='primary-color font-users-icon'>
            <FontAwesomeIcon className='font-user-1' icon={faUsers} size='8x' />
            <FontAwesomeIcon
              className='font-users-2'
              icon={faUsers}
              size='8x'
            />
          </div>
        </div>
      </section>
      <section className='stack-section top-20 '>
        <header className='flex-row justify-center'>
          <h1 className='primary-color font-md'>Software Stack</h1>
        </header>
        <div className='section-img container  wrapper-two'>
          <div className='aws-img'>
            <img src={AWS} alt='Amazon Web Services' />
          </div>
          <div className='mysql-img'>
            <img src={MySQL} alt='MySQL' />
          </div>
          <div className='react-img'>
            <img src={ReactImg} alt='React.js' />
          </div>
          <div className='redux-img'>
            <img src={ReduxImg} alt='Redux' />
          </div>
          <div className='node-img'>
            <img src={NodeImg} alt='Node.js' />
          </div>
          <div className='express-img'>
            <img src={ExpressImg} alt='Express.js' />
          </div>
        </div>
      </section>
      <section
        id='about-team'
        className='about-team-section section-background-color'
      >
        <header className='flex-column justify-center top-20 align-item-center'>
          <h1 className='primary-color font-md'>Who Are We?</h1>
          <p className='secondary-heading secondary-color top-20'>
            We are a JavaScript development team that is passionate about
            gaming!
          </p>
        </header>
        <div className='about-team-card container wrapper-three'>
          <div className='card'>
            <h1>Byran</h1>
            <Link to='/about/BryanCaldera'>Read More</Link>
          </div>
          <div className='card'>
            <h1>Marco</h1>
            <Link to='/about/MarcoMarino'>Read More</Link>
          </div>
          <div className='card'>
            <h1>Calvin Tan</h1>
            <Link to='/about/CalvinTan'>Read More</Link>
          </div>
          <div className='card top-20'>
            <h1>John To </h1>
            <Link to='/about/JohnTo'>Read More</Link>
          </div>
          <div className=' card top-20'>
            <h1>Denny Feng </h1>
            <Link to='/about/DennyFeng'>Read More</Link>
          </div>
          <div className='card top-20'>
            <h1>Huan Nguyen </h1>
            <Link to='/about/HuanNguyen'>Read More</Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
