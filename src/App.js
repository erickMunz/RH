import React from "react";
import {Route} from "react-router-dom";
import Login from "./vistas/Login";
import Register from "./vistas/Registro";


const App =() =>(
  <div className="ui container">
    <Route path="/" exact component={Login}/>
    <Route path="/registrar" exact component={Register}/>
  </div>
);

export default App;