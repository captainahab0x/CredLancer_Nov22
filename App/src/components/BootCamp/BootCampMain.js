import React from 'react'

const BootCampMain = () => {
    return (
        <>
            <div className="main-content">
                <div className="container">
                    <div className="home-banner-container">
                        <div className="home-banner">
                            <div className="home-banner-content bootcamp-banner">
                                <h1>Send Your Apes On Bootcamp To Earn More <span>$SNUCK</span></h1>
                                <p>Make your Apes work for you by sending them on a Bootcamp of your choice! The higher the intensity of
                                    the bootcamp, the more $SNUCK they will earn you. If you decide to send them on our most hard-core
                                    Military Bootcamp, you will earn a staggering 2x more $SNUCK</p>
                                <div className="home-banner-staking active">
                                    <button className="active" tabIndex="0" type="button">Buy $SNUCK</button></div>
                            </div>
                            <div className="home-banner-image"></div>
                        </div>
                    </div>
                    <div className="bootcamp-select-container">
                        <div className="bootcamp-select-content">
                            <h3>Tier 1</h3>
                            <h3>CrossFit bootcamp</h3>
                            <div className="bootcamp-select-img"><img src="./assets/images/bootcamp/duck1.jpg" alt="" /></div>
                            <p>Staking vault that earns 1.5x more $SNUCK per Ape.<br />It costs <span>750 $SNUCK</span> to stake 1 Ape in
                                Tier 1 Vault</p>
                            <div className="bootcamp-select-btn"><button
                                className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-qiwsbp"
                                tabIndex="0" type="button">Select<span className="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                        </div>
                        <div className="bootcamp-select-content second">
                            <h3>Tier 2</h3>
                            <h3>MMA bootcamp</h3>
                            <div className="bootcamp-select-img"><img src="./assets/images/bootcamp/duck2.jpg" alt="" /></div>
                            <p>Staking vault that earns 1.75x more $SNUCK per Ape.<br />It costs <span>1125 $SNUCK</span> to stake 1 Ape
                                in Tier 2 Vault</p>
                            <div className="bootcamp-select-btn"><button
                                className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-qiwsbp"
                                tabIndex="0" type="button">Select<span className="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                        </div>
                        <div className="bootcamp-select-content third">
                            <h3>Tier 3</h3>
                            <h3>Military bootcamp</h3>
                            <div className="bootcamp-select-img"><img src="./assets/images/bootcamp/duck3.jpg" alt="" /></div>
                            <p>Staking vault that earns 2x more $SNUCK per Ape.<br />It costs <span className="text-white">1500
                                $SNUCK</span> to stake 1 Ape in Tier 3 Vault</p>
                            <div className="bootcamp-select-btn">
                                <button className="select-btn" tabIndex="0" type="button">Select</button>
                            </div>
                        </div>
                    </div>
                    <div className="bootcamp-status"><span>Apes needed until the price increases by 25%:</span>
                        <div className="bootcamp-staked">2223/3000</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BootCampMain;