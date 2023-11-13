import React, { useState, useEffect } from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    const [state, setstate] = useState(false);
    

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setstate(!state)
            }else {
                setstate(state)
            }
       })
          
          
        
        }, [])
        
  return (
    <div className={`header fixed-top  ${state && "nav-black"}`}>
      <div className="container d-flex justify-content-between align-items-center ">
        <Link to="/">
          <img
            className=" mt-3"
            width="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
          />
        </Link>

        <div className="d-flex justify-content-between invisible">
          <Link to="/Home">
            <button className="px-3 sign_button">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header