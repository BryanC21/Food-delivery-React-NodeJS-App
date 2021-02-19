import React from "react";
import pic from "../../images/DF_1.JPG";
function DennyFeng() {
  return (
    <div className='individual-about container'>
      <header className='about-header'>
        <h1 className='primary-color'>Denny Feng</h1>
        <p className='secondary-heading secondary-color font-xsm margin-top-10 '>
          Lead Backend of Team5
        </p>
      </header>
      <section className='individual-about-section about-wrapper-two'>
        <p className='secondary-heading secondary-color width margin-top-10'>
          Hello, I'm a Computer Science Student, with a passion for MERN stack
          development and design. My motto is to design first then turn my
          designs into working applications. Forgot pre-build templates, and
          find yourself a DevSigner!
        </p>
        <img src={pic} alt='Denny Feng' />
      </section>
    </div>
  );
}

export default DennyFeng;
