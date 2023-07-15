import React from "react";
import './Loby.css'
import 'bootstrap/dist/css/bootstrap.css';
import {  Link } from "react-router-dom";
const Loby = () => {
    return (
        <div className="loby">
       
            <div className="container1">
            <div className="gridrow"><img className="py-3" src="/img/delbuttom.svg" alt="del"/></div>
                <div className="gridrow d-flex justify-content-center"><img className="img-fluid" src="/img/group.svg" alt="img" /></div>
                <div className="gridrow text-center">
                    <h2 className="pt-5 fw-bold">Hello </h2>
                    <p className="fs-5 px-2"> in this activity, we will practice converstion in a smooth and fun way. compolete the dialogue by choosing option on the screen.</p>
                </div>
                <div className="gridrow d-flex justify-content-center align-items-end pb-5">
                    <Link to="/Home" className="btn btn-warning  w-50  fw-bold ">let's start</Link>
                </div>
            </div>
            </div>
    )
}
export default Loby;