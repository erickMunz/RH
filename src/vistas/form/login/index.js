import React from "react";
import {Form, Button} from "semantic-ui-react";
import Validator from "validator";
import MensError from "../../mensajes/errores";
import Proptypes from "prop-types";

class FormLog extends React.Component {
    state={
        data:{
            correo: '',
            contrasena:''
        },
        loading: false,
        errores: {}
    }
    onChange = e => this.setState({
        data:{...this.state.data, [e.target.name]:e.target.value}
    });
    onSubmit = () => {
        const errores = this.validate(this.state.data);
        this.setState({errores});
        if(Object.keys(errores).length===0){
            this.props.submit(this.state.data);
        }
    }
    validate = data =>{
        const errores = {};
        if(!data.contrasena||data.contrasena==="") {
            
            errores.contrasena="No puede estar en blanco";
        }
        if(data.correo===""){
            errores.correo="No puede estar en blanco";
        }
        if(!Validator.isEmail(data.correo)) errores.correo="Escribe un email valido por favor";
        return errores;
    }
    render(){
        const {data, errores} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={errores.correo}>
                    <label htmlFor="correo">Email</label>
                    <input type="email" id="correo" name="correo" placeholder="correo@correo.com" value={data.correo} onChange={this.onChange}/>
                {errores.correo && <MensError texto={errores.correo}/>}
                </Form.Field>
                <Form.Field error={errores.contrasena}>
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Escribe una contraseña por favor" value={data.contrasena} onChange={this.onChange}/>
                    {errores.contrasena && <MensError texto={errores.contrasena}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}
FormLog.proptypes ={
    submit: Proptypes.func.isRequired
}
export default FormLog;