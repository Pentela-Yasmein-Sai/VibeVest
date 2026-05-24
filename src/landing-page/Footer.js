import React from 'react';
function Footer() {
    const styles ={
        logo: {
            display:'flex',
            alignItems:'center',
            gap: '15px',
            padding: '10px',
        },
        a : {
            textDecoration: 'none',
        },
        footer: {
            textDecoration:'none',
            padding: '20px',
            marginLeft: '70px',
        }
    };
    return ( 
        <footer style={{ backgroundColor: 'rgb(250,250,250)'}}>
            <div className='container border-top mt-5'>
                <div className='row mt-5'>
                    <div className='col'>
                      <div style={styles.logo}> <img src='assets/images/logo2.jpg' style={{width:'30%'}} /><h3>VibeVest</h3></div> 
                        <p>
                            &copy; 2024-2030, VibeVest Broking Ltd. All rights reserved.
                        </p>
                    </div>
                    <div className='col'>
                        <p>Company</p>
                        <a href='' style = {styles.a}>About</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Products</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Pricing</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Referral programme</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Careers</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>VibeVest.Tech</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Press & media</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>VibeVest cares (CSR)</a>
                        <br/><br/>
                    </div>
                    <div className='col'>
                        <p>Support</p>
                        <a href='' style = {styles.a}>Contact</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Support Portal</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Z-Connect blog</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>List of charges</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>Downloads & resources</a>
                        <br/><br/>
                    </div>
                    <div className='col'>
                        <p>Account</p>
                        <a href='' style = {styles.a}>Open an account</a>
                        <br /><br/>
                        <a href='' style = {styles.a}>Fund transfer</a>
                        <br/><br/>
                        <a href='' style = {styles.a}>60 day challenge</a>
                        <br/><br/>
                    </div>
                </div>
                <div className='mt-5 text-muted' style={{fontSize:'14px'}}>
                    <p>
                        VibeVest Broking Ltd. : Member of NSE & BSE - SEBI Registration no. :
                        INZ000031633 CDSL: Depository services through VibeVest Securities
                        Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                        through VibeVest Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration
                        no.: INZ000038238 Registered Address: VIbeVest Broking Ltd.,
                      #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                        complaints pertaining to securities broking please write to
                        complaints@vibevest.com, for DP related to dp@vibevest.com. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed
                        by SEBI | ICF 
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES
                        portal. Mandatory details for filing complaints on SCORES: Name,
                        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                        Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read 
                        all the related documents carefully before investing.
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of VibeVest and offering such services, please
                        create a ticket here.
                   </p> <br/>
                   <div className='mt-3'>
                    <a href='#' style={styles.footer} >NSE</a>
                    <a href='#' style={styles.footer}>BSE</a>
                    <a href='#' style={styles.footer}>MCX</a>
                    <a href='#' style={styles.footer}>T&C</a>
                    <a href='#' style={styles.footer}>Policies & Procedures</a>
                    <a href='#' style={styles.footer}>Privacy Policy</a>
                    <a href='#' style={styles.footer}>Disclosure</a>
                   </div><br/>
                </div>
            </div>
        </footer>
     );
}

export default Footer;