import React from 'react'
import './sideBtn.css';
function Sidebtn({ sideBar, setSideBar, style, color }) {
  const handleClick = () => {
    if (sideBar === 0) {
      setSideBar(200);
    }
    else {
      setSideBar(0);
    }
  }

  if (!color) color = 'white';
  return (
    <div id="ma" style={style}>
      <span onClick={handleClick}
        style={{ fontSize: '20px', cursor: 'pointer', zIndex: '0', borderTopLeftRadius: '0%', border: 'none', color: `${color}` }}>
        &#9776;</span>
    </div>
  )
}

export default Sidebtn