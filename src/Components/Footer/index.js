import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './index.css';

function Footer(){
    return(
        <div className="footer">
            <div className="img1"></div>
            <div className="inputs">
                <p><FontAwesomeIcon icon="fa-solid fa-location-dot" />Chicago US</p>
                <p>Phone : +3371241241</p>
                <p>Email : asd@mail.ru</p>
                <form action="index.php">
                  <input type="text" name="Name" id="Name" placeholder="Name" required></input>
                  <input type="text" name="Email" id="Email" placeholder="Email"></input>
                  <input type="message" name="Email" id="Email" placeholder="Message" className="inp"></input>
                  <input type="submit" value="Send Message" className="inputSend" style={{color:'white',width:'100px',height:'30px',backgroundColor:'black'}}></input>
                </form>
            </div>
        </div>
    )
};

export default Footer;