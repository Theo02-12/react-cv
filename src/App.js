import React from 'react';
import Banner from './components/Navbar/Banner';
import Content from './components/Content/Content'
import Description from './components/Description/Description';
import './App.css';
import Competences from './components/Competences/Competences';

const App = () => {
    return (
        <div>
            <div className='bg-modif'>
                <Banner />
                <Content />
            </div>
            <Description />
            <Competences />
        </div>
    )
}
export default App