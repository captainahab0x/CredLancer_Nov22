import React from 'react'

const HomeWelcome = () => {
    return (
        <>
            <div className="contain">
                <div className="banner-welcome">
                    <div className="landing-banner"><img src="./assets/images/banner-bg.png" height="500" alt="snuck-group" /></div>
                    <div className="landing-welcome container">
                        <div className="landing-content">
                            <h1>🦆Hello and welcome to SNUCK SOL</h1>
                            <p>Snucks is a unique pixel collection made up of a duck & snake. It’s uniqueness it’s because it’s rear combination
                                Snucks was inspired by Movies,Art,cartoons. It’s unique because of the animals combination (duck and snake) used it’s a rear combination in the NFT space. </p>
                        </div>
                        <div className="landing-buy-nft">
                            <button className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root active css-qiwsbp"
                                tabIndex="0" type="button">Buy on LMNFT launchpad<span
                                    className="MuiTouchRipple-root css-w0pj6f"></span></button>
                        </div>
                        <div className="landing-content" style={{ marginTop: "2rem" }}>
                            <p>Snuck Sols currently has 1359 Unique Holders</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWelcome;
