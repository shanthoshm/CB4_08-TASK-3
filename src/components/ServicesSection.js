import React from "react";
import '../index.css';
import CustomerCare from '../images/customerCare.jfif';
import BlockATM from '../images/blockATM.jfif';
import Fastag from '../images/fastag.jfif';
import Life from '../images/lifeInsurrances.jfif';
import LoanRepay from '../images/loanRepayment.jfif';
import MutualFund from '../images/mutualFund.jfif';

function ServicesSection(){
    return(
        <section id ="Services-section">
      
      <div className="service-section">
      <div className="head">
        <h1>Our Bank Services</h1>
    </div>
    
    <div className="main-grid">
        <div className="sub-div">
            <div><img src={CustomerCare} alt="Customer-support" /></div>
            <div><button className="service-buttons">Customer Support</button></div>
        </div>
        <div className="sub-div">
            <div><img src={BlockATM} alt="Block-Atm-card" /></div>
            <div><button className="service-buttons">Block ATM card</button></div>
        </div>
        <div className="sub-div">
            <div><img src={Fastag} alt="fastag" /></div>
            <div><button className="service-buttons">YourBank FASTAG</button></div>
        </div>
        <div className="sub-div">
            <div><img src={MutualFund} alt="mutual fund" /></div>
            <div><button className="service-buttons">YourBank Mutual Fund</button></div>
        </div>
        <div className="sub-div">
            <div><img src={Life} alt="Issuarances" /></div>
            <div><button className="service-buttons">Life Issuarances</button></div>
        </div>
        <div className="sub-div">
            <div><img src={LoanRepay} alt="E-pay" /></div>
            <div><button className="service-buttons">Loan Repayment</button></div>
        </div>
    </div>
    </div>

    </section>
    );
}

export default ServicesSection;