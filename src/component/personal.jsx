import React from "react";
import { Link } from "react-router-dom";
function Personal (perso){
    return(
        <div className="grid grid-cols-2 gap-2">

            {
                perso.datap.map((items, index) => {
                    return(
                        <div>
                            <img className="w-[100%] h-[100] ml-10 mr-20" src={items.image} alt=""/>
                            
                            
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Personal
