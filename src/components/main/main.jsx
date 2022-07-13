import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css';
import Sidebtn from '../sideBtn/Sidebtn';

function Main({ sideBar, setSideBar }) {
    const color = 'black';
    return (
        
            <div className="header" style={{ paddingLeft: `${sideBar}px`, transition: "0.5s",
            backgroundImage:'url("images/background.jpg")' 
        }}>
                            
                                < Sidebtn sideBar={sideBar} setSideBar={setSideBar} color={color} style={{ paddingLeft: '10%', paddingTop:"5%" }}/>
                                <div className="banner">
                                <div className="topIcon">
                                    <img src="images/quest-logo.jpg" alt="questLogo" style={{ borderRadius: '20em' }} />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', }}>

                                    <div className="welcomeNote">Welcome to the Quizzing Club of NITJ!</div>
                                    <div className="wcIcon" style={{padding:"1%"}}>
                                        <img src="images/quest-logo.jpg" alt="questLogo" style={{ borderRadius: '20em' }} />
                                    </div>
                                </div>
                            </div>

                <div className="icon">
                    <a href="https://www.facebook.com/QuriousCreatures" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://instagram.com/nitjquizclub?utm_medium=copy_link" className="insta"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
    
    )
}
export default Main