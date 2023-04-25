import React from "react";
import './Contact.css';
import Tel from "./Tel/Tel";
import Mail from "./Mail/Mail";
import Localisation from "./Localisation/Localisation";

const Contact = () => {
    return(
        <div className="contact" id="contact">
            <div className="contact-content">
                <h2 className="title-contact">Me contacter</h2>
                <h3>Actuellement en recherche de stage pour début septembre</h3>
                <Tel />
                <Mail />
                <Localisation />
            </div>
        </div>
    )
};

export default Contact;