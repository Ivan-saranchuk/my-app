import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";


export const withSuspense = (Component) => {
    
      return(props) => {
          return <React.Suspense fallback={<Preloader />}>
              <Component {...props} />
          </React.Suspense>
      }
    }


