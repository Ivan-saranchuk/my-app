import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required, email } from "../../utils/validators/validators";
import s from "./../common/FormsControls/FormsControls.module.css";
import { createField, Input } from "../common/FormsControls/FormsControls";



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (       
        <form onSubmit={handleSubmit}>
          
                {createField("Email", "email", [required, email], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                {createField(null, "rememberMe", [], "input", {type: "checkbox"}, "remember me")}

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {})}
            
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login}) (Login);