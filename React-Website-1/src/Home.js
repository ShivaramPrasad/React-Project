import React, { Component } from "react";

class Home extends React.Component {
 render() {
   return (
     <div>
       <h2>LOGIN PAGE</h2>
       <br></br><br></br><br></br>
       <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <br></br><br></br>
    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <br></br>
    <button type="submit">Login</button>
  
        </div>
   );
 }
}

export default Home