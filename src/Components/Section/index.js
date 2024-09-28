import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';




class Section extends React.Component{
    constructor(){
        super();
        this.state = {
           count : 0
        }
        this.links = ["https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg",'https://img.freepik.com/free-photo/pretty-woman-holding-shopping-cart_1187-3494.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid','https://img.freepik.com/premium-photo/young-stylish-beautiful-girl-sunglasses-is-walking-with-multi-colored-shopping-bags_237672-360.jpg','https://st3.depositphotos.com/12985790/17379/i/450/depositphotos_173794118-stock-photo-young-woman-with-shopping-bags.jpg']
    }
    changeState1(){
        if(this.state.count === this.links.length -1){
            this.setState({
                count : 0
            })
        }
        else{
        this.setState({
            count : this.state.count + 1
        });
    }
    };


    changeState2(){
        if(this.state.count === 0){
           this.setState({
            count : this.links.length - 1
           })
        }
        else{
        this.setState({
            count : this.state.count - 1
        });
    }
    }

    render(){
        
        return(
            <div className="Section">
                <div className="img">
                    <img src={this.links[this.state.count]}></img>
                    <button className="rightButton" onClick={this.changeState1.bind(this)}><i className="fa fa-arrow-right"></i></button>
                    <button className="leftButton" onClick={this.changeState2.bind(this)}><i className="fa fa-arrow-left" ></i></button>

                </div>

                <div className="Text">
                    <div class = 'content'>
                     <pre>_________   Stylish   __________</pre>
                     <p style={{fontSize:"40px",marginBottom:"0px",marginTop:"0px"}}>Female Clothes</p>
                     <p style={{marginTop:"5px"}}>30% Of Summer Vacation</p>
                     <div><button className="text-content-button">Shop Now</button></div>
                </div>
                </div>
            </div>
        )
    }
};
export default Section;