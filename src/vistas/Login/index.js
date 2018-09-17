import React from "react";
import FormLog from "../form/login";
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from "../../actions/auth";
class Login extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/"));
    render(){
        return(
        <div>
            <h1>Inicio de sesion</h1>    
            <FormLog submit={this.submit}/>
        </div>
        );
    }
}
Login.propTypes = {
    history: Proptypes.shape({
        push: Proptypes.func.isRequired
    }).isRequired,
    login:Proptypes.func.isRequired
};

export default connect(null,{login})(Login);