import React from "react";
import Carousel from "react-material-ui-carousel";
import MesaLogoWhite from "../../imgs/mesa_logo_white.svg";
import { BsArrowDownCircleFill } from "react-icons/bs";

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
          <img src={MesaLogoWhite} alt="logo" />
          <div className="text">
            <h1>Mesa Subregional de Juventud</h1>
            <p>Mas que una promesa, somos una realidad.</p>
          </div>
        </div>

        <BsArrowDownCircleFill className="arrow-icon" color="white" size={28} />
      </div>
      <h1>fasd</h1>
      <h1>fasd</h1>
      <h1>fasd</h1>
      <h1>fasd</h1>
      <h1>fasd</h1>
    </div>
  );
};
