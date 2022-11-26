import React from 'react'
import Header from '../components/layout/Header'
import SnuckMain from '../components/Snuck/SnuckMain.js'
import '../assets/css/home.css'
import Footer from '../components/layout/Footer'
const Snuck = () => {
    return (
        <>
            <div className="home-layout min-h-screen overflow-unset">
                {/* Marketplace Header */}
                <Header />
                {/* Main Content */}
                <div className="main-part flex">
                    <SnuckMain />
                </div>
                {/* Marketplace Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Snuck;