import React from "react";
import '../App.css';
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
            <div className="popularcourses">
                <h2 className="pchead">Popular courses</h2>
                
            </div>
            <ul className="pcul">
                <li className="pcli">
                <img className="progimage" src="https://th.bing.com/th/id/OIP._Lo8ut2FXbxJJpWGM3Z4jwHaGV?w=200&h=180&c=7&r=0&o=5&pid=1.7"alt="pythonimage"></img>   
                </li>
                
                <li className="pcli">
                <img className="progimage" src="https://th.bing.com/th/id/OIP.aRqmY89NAHfWoymwSaySHAHaEK?w=247&h=180&c=7&r=0&o=5&pid=1.7"alt="Javaimage"></img>   
                </li>
                <li className="pcli">
                <img className="progimage" src="https://th.bing.com/th/id/OIP.PHBTJoshbg880IH9z_PB6QAAAA?w=170&h=180&c=7&r=0&o=5&pid=1.7"alt="Javascriptimage"></img>   
                </li>
                <li className="pcli">
                <img className="progimage" src="https://th.bing.com/th/id/OIP.bC0H7fv9qqC6wLyG0LPqGQFvCp?w=220&h=127&c=7&r=0&o=5&pid=1.7"alt="bootstrapimage"></img>   
                </li>
            </ul>
            <ul className="pclink">
                <li className="pclinkli">
                    <a href="/python">Python.pdf</a>
                    <p>Title:Python<br/>Author:Guido van Rossum<br/>Edition:1st<br/>Year:Mar-2011</p>
                </li>
                <li className="pclinkli">
                    <a href="/java">Java.pdf</a>
                    <p>Title:Java<br/>Author:James Gosling<br/>Edition:1st<br/>Year:May-1996</p>
                </li>
                <li className="pclinkli">
                    <a href="/javascript">Javascript.pdf</a>
                    <p>Title:Javascript<br/>Author:Brendan Eich<br/>Edition:6th<br/>Year:Apr-2007</p>
                </li>
                <li className="pclinkli" >
                    <a href="/bootstrap">Bootstrap.pdf</a>
                    <p>Title:Bootstrap<br/>Author:Mark otto<br/>Edition:2nd<br/>Year:Feb-2018</p>
                </li>
            </ul>
            <ul className="pcul">
                <li className="pcli">
                <img className="acaimage" src="https://www.logsign.com/uploads/ensuring_network_security_e34d6ce4bb.png"alt="networkimage"></img>   
                </li>
                
                <li className="pcli">
                <img className="acaimage" src="https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg"alt="Machineimage"></img>   
                </li>
                <li className="pcli">
                <img className="acaimage" src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/Data-Science-Innovations.jpeg"alt="Datascienceimage"></img>   
                </li>
                <li className="pcli">
                <img className="acaimage" src="https://images.prismic.io//intuzwebsite/21a68fa0-00a6-4513-95a4-d06900a4c3dd_Frame+14443%402x.png?w=2400&q=80&auto=format,compress&fm=png8"alt="iotimage"></img>   
                </li>
            </ul>
            <ul className="pclink">
                <li className="pclinkli">
                    <a href="/network">Network Security.pdf</a>
                    <p>Title:Network Security<br/>Author:William Stallings<br/>Edition:5th<br/>Year:2006</p>
                </li>
                <li className="pclinkli">
                    <a href="/machine">Machine learning.pdf</a>
                    <p>Title:Machine Learning<br/>Author:Tom Mitchell<br/>Edition:2nd<br/>Year:2013</p>
                </li>
                <li className="pclinkli">
                    <a href="/data">Datascience.pdf</a>
                    <p>Title:Data Science <br/>Author:Vijay Kotu<br/>Edition:2nd<br/>Year:Dec-2018</p>
                </li>
                <li className="pclinkli">
                    <a href="/iot">IOT.pdf</a>
                    <p>Title:Internet Of Things<br/>Author:Ammar Rayes<br/><br/>Edition:2nd<br/>Year:2019</p>
                </li>
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