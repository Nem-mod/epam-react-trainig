import img from '../../resources/img.png'
import img1 from '../../resources/img_1.png'
import img2 from '../../resources/img_2.png'
import './Community.css'
import {useEffect, useState} from "react";

const baseCommunityState = {
    data: [
        {
            imgUrl: img,
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            name: 'MARY SMITH',
            position: 'Lead Designer at Company Name'
        },
        {
            imgUrl: img1,
            about: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
            name: 'John Smyth',
            position: 'Creative Director in Company Name'
        },
        {
            imgUrl: img2,
            about: 'Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name: 'Maryanne Smyth',
            position: 'Buyer at Company Name'
        },
    ]
}

export const Community = () => {
    const [communityData, setCommunityData] = useState(baseCommunityState);
    const [isVisible, setIsVisible] = useState(true);
    const fetchCommunityData = async () => {
        try {
            const response = await fetch('/community');
            const data = await response.json();
            setCommunityData(data);
        } catch (error) {
            //console.error('Failed to fetch community data:', error);
        }
    };

    useEffect(() => {
        fetchCommunityData()
    }, [])
    return (
        <div className='community'>
            <button
                className={'hide-btn'}
                onClick={() => {setIsVisible((prevState) => !prevState)}}>
                { isVisible ? 'Hide section' : 'Show section'}
            </button>
            <div className="community__header">
                <h1 className="title">Big Community of <br/> People Like You</h1>
                {isVisible &&
                    <h2 className="subtitle">We’re proud of our products, and we’re really excited when we get feedback from
                        our users.</h2>
                }

            </div>
            {isVisible &&
                <div className="community__main">
                    <div className="community__cards">
                        {communityData && communityData.data.map(element => {
                            return (
                                <div key={element.name} className="community__card">
                                    <div className="card-photo"><img src={element.imgUrl} alt="peson"/></div>
                                    <div className="card-about">{element.about}</div>
                                    <div className="card-info">
                                        <div className="name">{element.name}</div>
                                        <div className="position">{element.position}</div>
                                    </div>
                                </div>
                            )
                        })}
                        {/*<div className="community__card">*/}
                        {/*    <div className="card-photo"><img src={img1} alt="person"/></div>*/}
                        {/*    <div className="card-about">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris*/}
                        {/*        nisi ut.*/}
                        {/*    </div>*/}
                        {/*    <div className="card-info">*/}
                        {/*        <div className="name">John Smyth</div>*/}
                        {/*        <div className="position">Creative Director*/}
                        {/*            in Company Name*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="community__card">*/}
                        {/*    <div className="card-photo"><img src={img2} alt="person"/></div>*/}
                        {/*    <div className="card-about">Aliquip ex ea commodo consequat. Duis aute irure dolor in*/}
                        {/*        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.*/}
                        {/*    </div>*/}
                        {/*    <div className="card-info">*/}
                        {/*        <div className="name">Maryanne Smyth</div>*/}
                        {/*        <div className="position">Buyer at*/}
                        {/*            Company Name*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                    </div>
                </div>
            }
        </div>
    )
}
