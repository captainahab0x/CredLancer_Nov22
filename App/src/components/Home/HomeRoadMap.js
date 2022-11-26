import React from 'react'
import RoadmapLogo from '../../assets/icons/roadmap-logo.svg'

const HomeLoadMap = () => {
    const roadsteps = [
        {
            "date": 'Q1-Q2 2020',
            "title": "PROJECT LAUNCH",
            "content": ["Discord & Twitter"]
        },
        {
            "date": 'Q1-Q2 2021',
            "title": "MARKET",
            "content": ["Marketing implementation"]
        },
        {
            "date": 'Q3 2021',
            "title": "INFORMATION",
            "content": ["Supply, mint price & mint date"]
        },
        {
            "date": 'NOV 2021',
            "title": "MINT",
            "content": ["all Info regarding our mint will be disclosed ASAP"]
        },
        {
            "date": 'DEC 2021',
            "title": "",
            "content": ["BUYBACK & FLOOR SWEEP CONTEST"]
        },
        {
            "date": 'Q1 2022',
            "title": "DAPP LAUNCH",
            "content": ["staking and raid 2 earn bot"]
        },
        {
            "date": '2022 AND FUTURE',
            "title": "TOKEN LAUNCH",
            "content": ["$duck token"]
        },
    ]
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex flex-column roadmap">
                    <div className="roadmap-title">
                        <h1>ROADMAP</h1>
                    </div>
                    <div className="roadmap-img text-center">
                        <img src={RoadmapLogo} alt="roadmap logo" />
                    </div>
                    <div className="roadmap-img"></div>
                    <div className="roadmap-description">
                        <span>Mytheria: Clashof Pantheons' ultimate goal is to provide an unique experience, full of fun and thrilling moments for all players.</span>
                    </div>
                    <div className="d-flex flex-row road-main position-relative">
                        {roadsteps.map((item, index) => (
                            <div className="road-step" key={index}>
                                {index % 2 == 0 ? (
                                    <div className="d-flex flex-row road-section">
                                        <div className="vertical-line even">
                                            <div className="rect-rotate-45"></div>
                                        </div>
                                        <div className="road-part even">
                                            {/* <div className="road-date">{item.date}</div> */}
                                            <div className="road-content even">
                                                <div className="road-title even">{item.title}</div>
                                                {item.content.map((el, index) => (
                                                    <div className="content-lists" key={index}>
                                                        <span>{el}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="d-flex flex-row road-section">
                                        <div className="vertical-line">
                                            <div className="rect-rotate-45"></div>
                                        </div>
                                        <div className="road-part odd">
                                            <div className="road-content odd">
                                                <div className="road-title odd">{item.title}</div>
                                                {item.content.map((el, index) => (
                                                    <div className="content-lists odd" key={index}>
                                                        <span>{el}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* <div className="road-date">{item.date}</div> */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="middle-thick-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomeLoadMap;