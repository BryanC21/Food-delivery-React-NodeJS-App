import React from "react";
import pic from "../../images/MarcoTempPic.png";

function MarcoMarino() {
  return (
    <div className='container top-20'>
      <h1>Marco Marino</h1>
      <br></br>
      <section className='individual-about-section individual-about-section-rest top-20'>
        <img src={pic} alt='MarcoTempPic' />
        <ul className='top-20'>
          <li>Role: Github Master</li>
          <li>Major: Computer Science</li>
          <li>Career Goal: Game Programming</li>
        </ul>
      </section>
    </div>
  );
}
export default MarcoMarino;
