import React from 'react';
function Universe() {
    return ( 
       <div className="container mt-6">
        <div className="row text-center">
            <h1>The VibeVest Universe</h1>
            <p>
                Extend your trading and investment experience even further with our
                partner platforms
            </p>
            <div className='col-4 p-3 mt-5'>
                <img src='assets/images/smallcaseLogo.png' style={{width:'270px',height:'auto', marginBottom:'10px'}}/>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                 <img src='assets/images/streakLogo.png' style={{width:'270px',height:'auto', marginBottom:'10px'}}/>
                <p className='text-small text-muted'>Algo & strategy platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                 <img src='assets/images/sensibullLogo.svg' style={{width:'270px',height:'auto', marginBottom:'10px'}}/>
                <p className='text-small text-muted'>Options Trading platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                 <img src='assets/images/image.png' style={{width:'150px',height:'auto', marginBottom:'10px'}}/>
                <p className='text-small text-muted'>Asset Management</p>
            </div>
            <div className="col-4 p-3 mt-5">
                 <img src='assets/images/goldenpiLogo.png' style={{width:'270px',height:'auto', marginBottom:'10px'}}/>
                <p className='text-small text-muted'>Bonds trading platform</p>
            </div>
            <div className="col-4 p-3 mt-5">
                 <img src='assets/images/dittoLogo.png' style={{width:'270px',height:'auto', marginBottom:'10px'}}/>
                <p className='text-small text-muted'>Insurance</p>
            </div>
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>
                Signup Now
            </button>
        </div>
       </div>
     );
}

export default Universe;