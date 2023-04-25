import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href="https://github.com/Theo02-12" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li className="linkedin"><a href="https://www.linkedin.com/in/théo-couvelard-4089111b5/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                <li className="paper"><i class="fa-solid fa-copy"></i></li>
            </ul>

            <h5>
                Théo Couvelard &copy; 2023
                <br />
                Tous droits réservés
            </h5>
        </footer>
    )
};

export default Footer;