import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import s from "./../common/FormsControls/FormsControls.module.css";
import { createField, Input } from "../common/FormsControls/FormsControls";



const LoginForm = ({handleSubmit, error}) => {
    return (       
        <form onSubmit={handleSubmit}>
          
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                { createField(null, "rememberMe", [], "input", {type: "checkbox"}, "remember me")}
            
            {/* <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me 
            </div> */}
           { error &&  <div className={s.formSummaryError}>
{error}
            </div>
           } 
            <div>
                <button>Login</button>
            </div>
        </form>
    )
   
    
}

const LoginReduxForm = reduxForm({ form: 'login'
  })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login}) (Login);