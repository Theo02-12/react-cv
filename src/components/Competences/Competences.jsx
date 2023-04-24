import React from "react";
import './Competences.css';
import Front from "./Front-end/Front-end";
import Back from "./Back-end/Back-end";
import Responsive from "./Responsive/Responsive";
import Maquette from "./Maquettage/Maquettage";
import Environnement from "./Environnement/Environnement";

const Competences = () => {
    return(
        <div className="mes-competences" id="competences">
            <div className="skill-content">
                <h2 className="title-competences">Compétences</h2>
                <Front />
                <Back />
                <Responsive />
                <Maquette />
                <Environnement />
            </div>
        </div>
    )
};
export default Competences;