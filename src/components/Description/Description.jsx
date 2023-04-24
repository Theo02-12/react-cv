import React from "react";
import './Description.css'
import Photo from './photo.jpg'
import Infos from "./Infos/Infos";
import About from "./About-me/About-me";

const Description = () => {
    return(
        <div className="description-moi">
            <div className="img-and-infos">
                <img src={Photo} />

                <div>
                    <h3>À propos de moi</h3>
                    <Infos />
                </div>
            </div>

            <div className="text-about">
                <About />
            </div>
            <div className="div-button">
                <button>me contacter</button>
                <button>Mon CV</button>
            </div>
        </div>
    )
};

export default Description;
