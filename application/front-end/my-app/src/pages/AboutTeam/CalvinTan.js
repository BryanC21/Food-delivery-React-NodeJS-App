import React from "react";
import pic from "../../images/SelfPortrait.PNG";

function CalvinTan() {
  return (
    <div className='container'>
      <h1> CalvinTan </h1>
      <br></br>
      <section className='individual-about-section individual-about-section-rest top-20'>
        <img src={pic} alt='SelfPortrait' />
        <p className='secondary-heading secondary-color width margin-top-10'>
          Hey my name is Calvin Tan and probably like everyone else I am a
          Computer Science major at SFSU.
        </p>
        <p className='secondary-heading secondary-color width'>
          {" "}
          With some luck this will also be my last semester.{" "}
        </p>
        <p className='secondary-heading secondary-color width '>
          This will be the first time for me working in a group setting for a CS
          class, very nervous but excited to learn what I can!
        </p>
      </section>
    </div>
  );
}
export default CalvinTan;
