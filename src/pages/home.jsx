import React from "react";
import Header from '../component/header'
import App from "../App";
const home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className=" text-white text-center h-[100vh]">
                <p>Home</p>
                <div>
                 <App></App>
                </div>
            </div>
        </div>
    )
}

export default home