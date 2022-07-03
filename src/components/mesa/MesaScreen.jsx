import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const imgsCarousel = [
  {
    name: "Cañasgordas - 2019",
    url: "https://i.imgur.com/Gl6gcwy.jpg",
  },
  {
    name: "Ebéjico - 2021",
    url: "https://i.imgur.com/uFV0ojf.jpg",
  },
  {
    name: "Dabeiba - 2022",
    url: "https://i.imgur.com/MgWwYel.jpg",
  },
];

export const MesaScreen = () => {
  return (
    <div className="screen-main home-main">
      <div className="home-main-firts">
        
        <div className="box">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
        <div className="back-color"></div>
        <Carousel
          className="back-container"
          interval={2000}
          navButtonsAlwaysInvisible={true}
          indicators={false}
        >
          {imgsCarousel.map((data, i) => (
            <div
              className="back-container-img"
              style={{ backgroundImage: `url(${data.url})` }}
            ></div>
          ))}
        </Carousel>
        
        <div className="home-main-firts-content">
          <img src="https://i.imgur.com/HcBRR1s.png" alt="logo" />
          {/* <div className="text">
            <p>Porque los Jovenes mas que una Promesa, Somos una Realidad.</p>
            <span className="text-bar"></span>
          </div> */}
        </div>

      </div>
      <h1>fasd</h1>
      <h1>fasd</h1>
      <h1>fasd</h1>
      <h1>fasd</h1>
      <h1>fasd</h1>
    </div>
  );
};
