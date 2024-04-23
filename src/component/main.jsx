import React from "react";
import Header from '../component/header'
import App from "../App";
import { useState } from "react";

const Main = () => {

    const [data, setData] = useState(true)

    const hide = () => {
        setData(false)
    }
    const show = () => {
        setData(true)
    }

    return (
        <div className="text-center ">

            <div className="">

            { data ? <h1 className="text-fuchsia-700 font-bold mt-10 text-5xl">INSTAGRAM</h1> : <Header /> }
            
            { data ? <button onClick={hide} className="border boder-black bg-fuchsia-700 text-white p-3 mt-10 w-[80px]">Show</button> : <button onClick={show} className="border boder-black bg-fuchsia-700 text-white p-3 mt-10 w-[80px]">Hide</button>}

            </div>
        </div>
    )
}

export default Main