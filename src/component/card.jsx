import React from "react";
import { Link } from "react-router-dom";
function Card (props){
    return(
        <div className="grid grid-cols-4 gap-x-0 ml-40 mr-40  ">

            {
                props.datav.map((items, index) => {
                    return(
                        <div className="flex p-6 m-3 ml">
                            <img className=" w-[200px] h-[200px] rounded-full " src={items.image} alt=""/>
                            <h1 className="p-1">{items.firstname}<p>{items.title}</p></h1>
                            
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Card