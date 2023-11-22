import React from 'react'
import { Link } from "react-router-dom";
import "./Banner.css"
import Second from './second/Second';
import Toggle from './toggle/Toggle';


const Banner = () => {
  return (
    <div>
      <div className="banner w-100  d-flex justify-content-around">
        <div className="banner-fadeBottom w-100 banner-fadeBottom1 vh-100">
          <div className="text-center  w-100  text-white banner-text align-content-center ">
            <h1 className="my-4 container">
             
            </h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <Link to="/home">
              <button className="p-3 px-5 mt-4 start_button">
                Get Started{" >"}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Second
        h1text="Enjoy on your TV"
        h5text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        tv="video"
        invisible="invisible"
      />
      <Second
        h1text="Download your shows to watch offline"
        h5text="Save your favorites easily and always have something to watch."
        order="2"
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <Second
        h1text="Watch everywhere"
        h5text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        visible="invisible"
      />
      <Second
        h1text="Create profiles for kids"
        h5text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        order="2"
        img="https://occ-0-6422-2705.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
      />
      <Toggle />
    </div>
  );
}

export default Banner
