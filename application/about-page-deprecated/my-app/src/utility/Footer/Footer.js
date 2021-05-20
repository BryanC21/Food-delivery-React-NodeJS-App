import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub);

function Footer() {
  return (
    <div className='footer primary-background'>
      <div className='container'>
        <header>
          <h1 className='primary-heading white-color font-sm'>
            © 2021 Team5, CSC648.
          </h1>
        </header>

        <div className='fa-icon display-flex justify-end '>
          <a href='https://github.com/CSC-648-SFSU/Team05'>
            <FontAwesomeIcon
              className='fa-icon-github white-color'
              icon={faGithub}
              size='2x'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
