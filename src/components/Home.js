import React from "react";
import '../App.css';
import Bootstrap from "../pages/Bootstrap";
import Javascript from "../pages/Javascript";
import Python from "../pages/Python";
import Java from "../pages/Java";
import Machine from "../pages/Machine";
import Network from "../pages/Network";
import Data from "../pages/Data";
import Iot from "../pages/Iot";

function Home(){
    return(
        <div className="h0me">
            <div className="header">
                <img className="logo-prof" src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2983c58b93d94_3d-cv-education.png"alt="image"></img>
            </div>
                
            <div className="header-content">
                <h3 className="heading">Digital education, a virtual sensation!</h3>
                <p className="heading-p">"E learning - a lifeline for those with obstacles" Experience the future of learning with our innovative eLearning app through Exploring interactive courses, connect with educators, and dive into a world of knowledge from anywhere, anytime!</p>
            </div>
            <div className="popular">
                <h2 className="pchead">Popular courses</h2>
                
            </div>
            
            <ul className="pclink1">
                <li><Python/></li>
                <li><Bootstrap/></li>
                <li><Javascript/></li>
            </ul>
            <ul className="pclink2"> 
                <li><Machine/></li>
                <li><Network/></li>
                <li><Data/></li>
            </ul>
            
            <h2 className="abouthead">About us</h2>
            <div className="aboutcon">
                
                <p className="about">E Learner is the pinnacle of accessible education, offering a diverse array of courses tailored to suit every learner's needs. Our platform is a beacon of innovation, transforming the traditional learning experience into an interactive and engaging journey.<br/><br/>Our vision is to democratize education, ensuring that anyone, anywhere, can access high-quality learning resources.We are committed to fostering a community of lifelong learners who are inspired to explore new horizons and expand their knowledge</p>
                
                <img className="aboutimg" src="https://cdn3d.iconscout.com/3d/premium/thumb/people-discussion-about-business-8659916-6909666.png"alt="image"></img>
            </div>
        </div> 
    )
}
export default Home;