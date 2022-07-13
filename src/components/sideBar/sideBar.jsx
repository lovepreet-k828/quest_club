import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';

function SideBar({ setSideBar, sideBar, setModal, modal }) {

  return (
    <div className="sidenav" style={{ width: `${sideBar}px` }}>
      <button className='sideClose' onClick={() => setSideBar(0)}
        style={{
          backgroundColor: "#111", color: 'white', border: 'none', cursor:"pointer",
          fontSize: "40px", display: "block", marginLeft: "auto", marginRight: '10%'
        }}>&times;</button>
      <Link to="/quest_club/" >HOME</Link>
      <Link to="/quest_club/aboutUs">ABOUT</Link>
      <Link to="/quest_club/ourTeam" >TEAM</Link>
      <button style={{ backgroundColor: "#111", border: "none",cursor:"pointer" }} onClick={() => { setModal(!modal) }}>REGISTER</button>
    </div>
  )
}

export default SideBar