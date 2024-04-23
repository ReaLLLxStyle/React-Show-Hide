import React from "react";
import { Link } from "react-router-dom";

const header = () => {
    return (
        <div className='bg-fuchsia-900 text-white p-4 flex gap-4'>
            
            <Link to={'/main'}>LogOut</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            
        </div>
    )   
}

export default header