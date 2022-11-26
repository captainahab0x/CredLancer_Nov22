import React from 'react'
import ColorBarIcon from '../../assets/icons/color-bar.svg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
const TokenomicsMain = () => {
    ChartJS.register(ArcElement, Tooltip);
    const data = {
        labels: ['DEX Liquidity', 'Team', 'Staking', 'Project Development', 'Charity', 'Airdrop'],
        datasets: [
            {
                label: '# of Votes',
                data: [4, 2, 5, 5, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <>
            <div class="tokenomics-section">
                <div class="container">
                    <div class="tokenomics">
                        <div className="token-allocation">
                            <div className="title text-center">
                                <span>Token Allocation</span>
                            </div>
                            <div className="doughnut-chart">
                                <Doughnut width="300" height="300" innerRadius={70}
                                    outerRadius={80}
                                    fill="#8884d8" data={data} options={options} />
                                {/* <div className="white-circle"></div> */}
                                <div className="dex-content">
                                    <div className="dex-title"><span>DEX Requidity</span></div>
                                    <div className="dex-line"></div>
                                    <div className="dex-title"><span>20%</span></div>
                                </div>
                                <div className="team-content">
                                    <div className="team-title"><span>Team</span></div>
                                    <div className="team-line"></div>
                                    <div className="team-title"><span>10%</span></div>
                                </div>
                                <div className="staking-content">
                                    <div className="staking-title"><span>Staking</span></div>
                                    <div className="staking-line"></div>
                                    <div className="staking-title"><span>25%</span></div>
                                </div>
                                <div className="pd-content">
                                    <div className="pd-title"><span>Project Development</span></div>
                                    <div className="pd-line"></div>
                                    <div className="pd-title"><span>25%</span></div>
                                </div>
                                <div className="charity-content">
                                    <div className="charity-title"><span>Charity</span></div>
                                    <div className="charity-line"></div>
                                    <div className="charity-title"><span>10%</span></div>
                                </div>
                                <div className="airdrop-content">
                                    <div className="airdrop-title"><span>Airdrop</span></div>
                                    <div className="airdrop-line"></div>
                                    <div className="airdrop-title"><span>10%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TokenomicsMain;