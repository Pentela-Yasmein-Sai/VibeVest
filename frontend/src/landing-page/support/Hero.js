import React from 'react';

function Hero() {
    return (  
        <section className='container-fluid bg-primary py-5' id='supportHero'>
            <div className='container px-md-5'>
                <div className='row justify-content-between text-white g-4'>
                    <div className='col-lg-7 d-flex flex-column justify-content-between'>
                        <div className='mb-5'>
                            <h4 className='m-0 text-white'>Support Portal</h4>
                        </div>
                        
                        <div className='mb-4'>
                            <h1 className='fs-4 mb-4 lh-base'>
                                Search for an answer or browse help topics to create a ticket
                            </h1>
                            <input 
                                className='form-control form-control-lg py-3 shadow-sm' 
                                placeholder='Eg. how do I activate F&O'
                                style={{ borderRadius: '6px' }}
                            />
                        </div>
                
                        <div className='d-flex flex-wrap gap-4 align-items-center mt-2'>
                            <a href='' className='text-white text-decoration-underline'>Track account opening</a>
                            <a href='' className='text-white text-decoration-underline'>Track segment activation</a>
                            <a href='' className='text-white text-decoration-underline'>Intraday margins</a>
                            <a href='' className='text-white text-decoration-underline'>Kite user manual</a>
                        </div>
                    </div>

                    <div className='col-lg-4 d-flex flex-column justify-content-evenly text-start mt-3 mt-lg-0'>
                        <div className='mt-17'>
                            <a href='' className='text-white text-decoration-underline fs-5'>Track Tickets</a>
                        </div>
                        
                       
                        <div className='text-start mt-lg-3'>
                            <h1 className='fs-3 fw-normal mb-4'>Featured</h1>
                            <ol className='lh-lg ps-3 text-white'>
                                <li className='mb-2'>
                                    <a href='' className='text-white text-decoration-underline'>Current Takeovers and Delisting - January 2024</a>
                                </li>
                                <li>
                                    <a href='' className='text-white text-decoration-underline'>Latest Intraday leverages - MIS & CO</a>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;