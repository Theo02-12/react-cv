import React from 'react';
import Banner from './components/Navbar/Banner';
import Content from './components/Content/Content'
import Description from './components/Description/Description';
import './App.css';
import Competences from './components/Competences/Competences';
import Parcours from './components/Parcours/Parcours';

const App = () => {
    return (
        <>
            <div className='bg-modif'>
                <Banner />
                <Content />
            </div>
            <Description />
            <Competences />
            <Parcours />
        </>
    )
}
export default App