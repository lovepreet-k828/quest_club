import axios from 'axios';
import React, { useState } from 'react';
import './register.css';

function Register({ setModal }) {

  const [inputs, setInputs] = useState({name:"", email:""});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = String(event.target.value);
    setInputs(values => ({ ...values, [name]: value }))
    // console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, '<inputs are end here>', inputs["name"]);
    setModal(false);
    axios.post('/user/add/', inputs)
      .then(res => {
        // console.log('succsess', res);
        alert(res.data);
        setInputs({name:"", email:""});
      })
      .catch((err) => {
        // console.log('error : ', err)
        alert('Error: Internal error occured try again!');
        setInputs({name:"", email:""});
      });

  }

  return (
    <div className="register" style={{
      backgroundColor: "white", zIndex: "1",
      borderRadius: "5%", boxShadow: "5px 5px rgb(0,0,0,0.5)", position: 'fixed', display: 'flex', flexWrap: 'wrap'
    }}>
      <div className="moveimage" style={{ borderRadius: "5%", display: "flex", justifyContent: "center", width: "100%", backgroundColor: "white" }}>
        <img src="images/quest-logo2.jpg" alt="questLogo" style={{ flexGrow: "0", }} />
      </div>
      <div className="regContainer" style={{ backgroundColor: "white", borderRadius: "5%", flexGrow: "1", display: "flex", flexDirection: "column", width: "100%" }}>
        <button onClick={() => { setModal(false) }} style={{
          backgroundColor: "white", border: 'none', color: 'black', cursor:"pointer",
          fontSize: "40px", display: "block", marginLeft: "auto", marginRight: '10%'
        }}>&times;</button>
        <form onSubmit={handleSubmit}>
          <label for="nameId" style={{marginLeft:"15%", fontWeight:"bold"}}>Enter your name</label>
              <input type="text" id="nameId" placeholder="Name" className="input"
                value={inputs["name"]}
                onChange={handleChange}
                name="name" />

        <label for="emailId" style={{marginLeft:"15%", fontWeight:"bold"}}>Enter your E-mail</label>
              <input type="email" id="emailId" placeholder="E-mail" className="input"
                value={inputs["email"]}
                onChange={handleChange}
                name="email" />

          <input type='submit' className="button" 
          style={{ display: "flex", 
          marginLeft: "auto", marginRight: "auto", marginBottom: "2%",cursor:"pointer", }}
            value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Register