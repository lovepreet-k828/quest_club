import React from 'react';
import Sidebtn from '../sideBtn/Sidebtn';
import Card from './card';
import './styleTeam.css';

function Team({ sideBar, setSideBar }) {

    const data= [{
        position: "Faculty coordinators",
     members: [{ name: 'Dr Gyan Prakash', image: 'DR Gyan.jpg' },
    { name: 'Dr Shyamkiran Kaur', image: 'Dr SK.jpg' }]},

    {position: "Heads",
    members: [{ name: 'Abhishek Kalia', image: 'abhishek.jpg', batch: '2021-22' },
    { name: 'Saket Jha', image: 'saket.jpg', batch: '2021-22' }]},

    {position: "Co-Heads",
    members: [{ name: 'Aditya V. Shrivastav', image: 'aditya.jpg', batch: '2021-22' },
   { name: 'Jaikirat Singh', image: 'jaikirat.jpg', batch: '2021-22' }]},

   {position: "Publicity Head",
   members: [{ name: 'Ankit Jaiswal', image: 'ankit.jpg', batch: '2021-22' }]}]

    const center = { display: 'flex', justifyContent: 'center', color: 'wheat', width: "100%" }
    return (
        <div className="teamContainer" style={{
            backgroundImage: 'url("images/congruent_outline.png")',
            paddingLeft: `${sideBar}px`, transition: "0.5s",
        }}>


            < Sidebtn sideBar={sideBar} setSideBar={setSideBar} style={{ paddingLeft: '10%', paddingTop: "5%" }} />

            <h1 style={center}>Quest Team</h1>
            {
                data.map((section)=>{
                    return (
                        <>
                        <h2 style={center}>Our {section.position}</h2>
            <div className="container">
            {section.members.map((member) => < Card member={member} />)}
            </div>
                        </>
                    )
                })
            }

           
        </div>
    )
}

export default Team