import React from "react";

function HuanNguyen() {
  let pic = "https://i.imgur.com/q8mUEcu.jpg";
  return (
    <div className='container top-20'>
      <header className=''>
        <h1>Huan NguyenKim</h1>
        <p className='secondary-heading secondary-color font-xsm margin-top-10 '>
          Team Member
        </p>
      </header>
      <section className='individual-about-section individual-about-section-rest top-20'>
      <img src={pic} alt="Huan's photo" />
        <ul className='top-20'>
          <li>Hello ladies and gentlemen!</li>
          <li>My name is Huan NguyenKim</li>
          <li>I'm a Computer Science major at SFSU</li>
          <li>I love the military</li>
        </ul>
      </section>
    </div>
  );
}

export default HuanNguyen;
