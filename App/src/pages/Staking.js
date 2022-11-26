import React from 'react'
import Header from '../components/layout/Header'
import StakingMain from '../components/Staking/StakingMain.js'
import '../assets/css/home.css'
import Footer from '../components/layout/Footer'
const Home = () => {
    return (
        <>
            <div className="home-layout min-h-screen overflow-unset">
                {/* Marketplace Header */}
                <Header />
                {/* Main Content */}
                <div className="main-part flex">
                    <StakingMain />
                </div>
                {/* Marketplace Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Home;