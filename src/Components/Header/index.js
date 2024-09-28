import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping, faEnvelope ,faHome,faMagnifyingGlass,faSignInAlt, faFemale,faHeart} from '@fortawesome/free-solid-svg-icons';
import "./index.css";



function Header(){
    return (
        <div className="Header">
            <div className="Container">
                <div><h1>Flone.</h1></div>
                <div>
                <ul className="links">
                              <li><a>Home</a>
                              <FontAwesomeIcon icon={faHome} style={{ marginLeft:  '5px', width: "15px" }}/></li>
                              <li><a>Shop</a>
                              <FontAwesomeIcon icon={faCartShopping} style={{ marginLeft: '5px' }}/></li>
                              <li><a>Collection</a></li>
                              <li><a>Pages</a></li>
                              <li><a>Blog</a></li>
                              <li><a>Contact us</a>
                              <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '5px' }}/></li>
                              
                </ul>
                </div>
                <div className="icons">
                    <button className="Button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    <button><FontAwesomeIcon icon={faFemale}/></button>
                    <button><FontAwesomeIcon icon={faHeart}/></button>
                    <button><FontAwesomeIcon icon={faFemale}/></button>
                </div>
            </div>
        </div>
    )
};

export default Header;