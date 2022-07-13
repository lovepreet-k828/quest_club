import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SideBar from './components/sideBar/sideBar.jsx';
import Main from './components/main/main.jsx';
import About from './components/about/about.jsx';
import Team from './components/team/team.jsx';
import Register from './components/register/register.jsx';

function App() {

  const [sideBar, setSideBar] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Router>
        <div style={{ backgroundColor: 'black', display:"flex" }}>
          < SideBar sideBar={sideBar} setSideBar={setSideBar} setModal={setModal} modal={modal}/>
          {modal && < Register setModal={setModal} />}
          <Routes>
            <Route path='/quest_club/' element={<Main sideBar={sideBar} setSideBar={setSideBar} />} />
            <Route path='/quest_club/aboutUs' element={<About sideBar={sideBar} setSideBar={setSideBar} />} />
            <Route path='/quest_club/ourTeam' element={<Team sideBar={sideBar} setSideBar={setSideBar} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;