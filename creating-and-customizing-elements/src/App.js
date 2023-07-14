import './App.css';
import React from "react";

import './index.css'
function App() {

    return (
        <div className="App">
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

            <ul className={'planets-list'}>
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
