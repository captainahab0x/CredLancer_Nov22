import React from 'react'
import ColorBarIcon from '../../assets/icons/color-bar.svg'
const StakingMain = () => {
    return (
        <>
            <div class="main-content">
                <div class="container">
                    <div class="home-banner-container">
                        <div class="home-banner">
                            <div class="home-banner-content">
                                {/* <h1>Earn <span>$SNUCK</span> By Staking Your Snuck Sols</h1>
                                <p>Staking is when your sol is shredding in local Shredded sols Gym. It's up to you to decide for how
                                    long you want to send your sols to the gym - you can cancel the staking and receive earned rewards at
                                    any given time.</p> */}
                                <div class="process-bar">
                                    <h5>4313/5000 Sols Staked</h5>
                                    <div class="process-body">
                                        <div class="process-content">
                                            <img src={ColorBarIcon} alt="" /></div>
                                    </div>
                                </div>
                                <p>Staking 1 sol generates 10 $SNUCK per day. If you stake 3 sols, each sol will pump you x1.25 more
                                    $SNUCK!</p>
                                <div class="home-banner-staking">
                                    <button class="start-staking-btn" tabIndex="0" type="button" >Start staking</button>
                                    <img src="./Shredded sol NFT Staking_files/meat.50886310.svg" alt="" /></div>
                            </div>
                            <div class="home-banner-image"><img src="./Shredded sol NFT Staking_files/whey-token.1fa523f6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StakingMain;