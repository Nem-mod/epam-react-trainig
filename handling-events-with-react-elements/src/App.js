import './App.css';
import React, {useState} from "react";

import './index.css'
import {Slider} from "./Slider";
function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    const changeTheme  = () => {
        setDarkTheme(prevState => !prevState);
        if (!darkTheme)
            document.body.classList.add('dark');
        else
            document.body.classList.remove('dark');

    }
    return (
        <div className="App">
            <Slider onClickHandler={changeTheme}/>
            {
                React.createElement('h1',
                    {
                        style: {
                            color: '#999',
                            fontSize: '19px'
                        }
                    },
                    'Solar system planets')
            }

            <ul className={`planets-list ${ darkTheme ? 'planets-list_dark' : ''}`}>
                <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Uranus</li>
                <li>Neptune</li>
            </ul>

        </div>
    );
}

export default App;
