import React from "react";
import FormLog from "../form/login";



class Login extends React.Component {
    submit = data =>{
        console.log("submit");
        console.log(data);
    }
    render(){
        return(
        <div>
            <h1>Inicio de sesion</h1>    
            <FormLog submit={this.submit}/>
        </div>
        );
    }
}

export default Login;