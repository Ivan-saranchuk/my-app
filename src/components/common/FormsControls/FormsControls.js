import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";
import { required } from "../../../utils/validators/validators";

export const Textarea = ({ input, meta, ...props }) => {

  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        {props.types === "input" ? <input {...input} {...props} /> : <textarea {...input} {...props} />}
      </div>

      {hasError && <span className={styles.errorText}>{meta.error}</span>}

    </div>
  )
}

export const Input = ({ input, meta: {touched, error}, ...props }) => {

  const hasError = touched && error;

  return(
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
    <div>
      {props.types === "input" ? <input {...input} {...props} /> : <textarea {...input} {...props} />}
    </div>

    {hasError && <span className={styles.errorText}>{error}</span>}

  </div>
  )
 
}

export const createField = (placeholder, name, validators, component, props={}, text = " ") => (
  <div>
    <Field placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    /> {text}
  </div>
)