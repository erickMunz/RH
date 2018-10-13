import React from "react";
import {Route} from "react-router-dom";
import Login from "./vistas/Login";
import Register from "./vistas/Registro";
import quiz from "./vistas/quiz"


const App =() =>(
  <div className="ui container">
    <Route path="/" exact component={Login}/>
    <Route path="/registrar" exact component={Register}/>
    <Route path="/quiz" exact component={quiz}/>
  </div>
);

export default App;