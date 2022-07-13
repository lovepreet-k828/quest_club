import React from 'react';
import Sidebtn from '../sideBtn/Sidebtn';
import './styleAbout.css';

function About({ sideBar, setSideBar }) {

  const sections = [
    {
      heading1: 'Quizzing Year round',
      heading2: 'We dont take a break, for who loves to give up on addictions?',
      body: [`Quest has a legacy spanning a decade. `,
        'We give our members a platform to plan, organize and conduct quizzes.',
        'We have won quizzes at National and Regional levels.',],
      image: '1.1.jpg',
      color: 'white',
      st: {}
    },
    {
      heading1: 'Critical Thinking And Innovative Learnin',
      heading2: 'Grey matter(s)?',
      body: ['At quest there is no dearth of challenges. ',
        'We stimulate your imagination as well as your spirits.',
        'A buzzer or rapid fire we have it all.'],
      image: '2.jpg',
      color: 'black',
      st: { backgroundColor: "rgba(245, 255, 255, 0.9)" }
    },
    {
      heading1: 'Diversity',
      heading2: 'MELA, Pop, History, Sports or General',
      body: [' We all have different tastes.',
        'Quest is a society of diverse thoughts and opinions.',
        `You don't need to be a history buff to find your place, we have a place for every niche.`],
      image: '3.jpg',
      color: 'white',
      st: {}
    },
    {
      heading1: 'Fostering Camaraderie',
      heading2: 'Bonhomie Ehh?',
      body: ["One's a company.",
        "Two's a crowd.",
        "Three's a party", "", "We look after each other and when surrounded by friends there is never a dull moment,",
        "its always a party."],
      image: '4.jpg',
      color: 'black',
      st: { backgroundColor: "rgba(245, 255, 255, 0.9)" }
    },
  ]

  return (
    <div className='aboutContainer' style={{
      backgroundImage: 'url("images/congruent_outline.png")',
      transition: "0.5s", paddingLeft: `${sideBar}px`
    }}>
      < Sidebtn sideBar={sideBar} setSideBar={setSideBar} style={{ paddingLeft: '10%', paddingTop: '5%' }} />
      <div className="heading">
        <h1 className="title">Quest is NIT-Jalandhar's official Quiz Club</h1>
        <h2 className="title">Its the mecca of your quizzing Passion</h2>
      </div>

      {sections.map((section) => {
        return (
          <div className="aboutSection" style={section.st} >
            <div className="row" style={{ color: section.color }} >

              <div className="column-left">
                <h1 className="xlarge-font"><b>{section.heading1}</b></h1>
                <h1 className="large-font" style={{ color: 'mediumseagreen' }}><b>{section.heading2}</b></h1>
                <p><span style={{ fontSize: "24px" }}>
                  {section.body.map((line) => {
                    return (
                      <>
                        {line}<br />
                      </>
                    )
                  })}
                </span></p>
              </div>
              <div className="column-right">
                <img src={`images/img-about/${section.image}`} alt="memory" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
          </div>)
      })}

    </div>
  )
}

export default About