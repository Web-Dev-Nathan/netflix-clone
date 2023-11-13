import React from 'react'
import "./second.css"

const Second = ({ h1text ,h5text ,order,img,visible,invisible,tv}) => {
  return (
    <div className="second-sec d-flex align-items-center justify-content-around">
      <div className={`position-relative d-md-flex align-items-center mb-5`}>
        <div className={`text-white text-center w-100 order-${order}`}>
          <h1 className=" mb-4">{h1text}</h1>
          <h5 className=" text-center">{h5text}</h5>
        </div>
        <div className="container text-center mt-md-5 w-100 position-relative">
          <img src={img} width="450px" className={`${visible}`} alt="tv" />
          {/* <div>
            <img src={img} className="img" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Second