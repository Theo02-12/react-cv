import React from 'react';
import './Content.css'

import Icons from '../IconsSkill/Icons'

const Content = () => {
    return (
        <div className='content-name-infos'>
            <div className='title'>
                <h1>Bonjour, je m'appelle Théo et je suis</h1>
                <h2>Développeur web et web mobile</h2>
                <h3>Je suis à la recherche d'un stage.</h3>
            </div>
            <Icons />
        </div>

        
    )
};

export default Content