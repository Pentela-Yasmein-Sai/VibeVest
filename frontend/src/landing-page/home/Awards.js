import React from 'react';
function Awards() {
    return ( 
       <div className='container mt-5'>
           <div className='row'>
            <div className='col-6 p-5'>
                <img src = "assets/images/largestBroker.svg"/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>Largest Stock Broker in India</h1>
                <p className='mb-5'>2+ million VibeVest clients contribute to over 15% of all retail order volumes in India daily by trading & investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Future & Options</p>
                            </li>
                            <li>
                                <p>Commodity Derivatives</p>
                            </li>
                            <li>
                                <p>Currency Derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct Mutual Funds</p>
                            </li>
                            <li>
                                <p>Bonds & Govt. Securities</p>
                            </li>
                        </ul>
                    </div>
                    <img src="assets/images/pressLogos.png" style = {{width:"90%"}}/>
                </div>
            </div>
       </div>
       </div>
     );
}

export default Awards;