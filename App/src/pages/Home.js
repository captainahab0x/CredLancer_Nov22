import React from 'react'
import Header from '../components/layout/Header'
import '../assets/css/home.css'
import Footer from '../components/layout/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import ImgSliderBox from '../components/Home/ImgSliderBox'
import ImgCard from '../components/Common/ImgCard'
import LancerInfoCard from '../components/Common/LancerInfoCard'
import LatestQuestsSlideBox from '../components/Home/LatestQuestsSlideBox'
import LogoSlideBox from '../components/Home/LogoSlideBox'


const Home = () => {
    return (
        <>
            <div className="home-layout min-h-screen overflow-unset">
                <Header />
                <div className="main-part flex">
                    <div className='first-section'>
                        <Container>
                            <div className='d-block'>
                                <Row>
                                    <h1 className='section-title center mt-5'>Completed Quests</h1>
                                </Row>

                                <Row className='quests-slide-bar'>
                                    <ImgSliderBox />
                                </Row>

                                <Row className='mt-5'>
                                    <Col md={6}>
                                        <div className='single-img-card'>
                                            <ImgCard img='./assets/images/1.png' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h1 className='white'> What is a Soul Bound Verification?</h1>
                                        <div className='pink-text-card mt-5'>
                                            <h1 className='font-farmily-normal white'>
                                                Soul Bound Tokens are <br />
                                                non-tranferable digital proof
                                                of skills, contributions, or
                                                quest completions.
                                                <br /><br />
                                                They cannot be tranfered. </h1>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Container>
                    </div>


                    <div className='lancers-section'>
                        <Container>
                            <Row>
                                <h1 className='lancers-title center mt-5'>Our Lancers</h1>
                            </Row>
                            <Row>
                                <LancerInfoCard img='./assets/images/avatar/default.png' title='On-chain Verified Credentials' desc='Maintain identity privacy, Opt-in on what credentials & badges are displayed on profile' />
                                <LancerInfoCard img='./assets/images/avatar/default.png' title='Smart Contract Payouts ' desc='Lancers can join various organizations. Bid on Projects/Tasks Showcase Experience Level & Rates rate  ' />
                                <LancerInfoCard img='./assets/images/avatar/default.png' title='Super ideas' desc='Multi-sig Safe Vault with project budgets Programmed payouts Payment speed history visible' />
                            </Row>
                        </Container>
                    </div>
                    <div className='second-section'>
                        <Container>
                            <Row>
                                <Row>
                                    <h7 className='font-farmily-normal white'>OUR PORTFOLIO</h7>
                                    <h1 className='font-farmily-normal white mt-3'>Take A Look At The Latest Quests</h1>
                                    <LatestQuestsSlideBox />
                                </Row>
                            </Row>
                            <Row className='logo-info-row'>
                                <LogoSlideBox />
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home;