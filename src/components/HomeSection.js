import React from "react";
import '../index.css';
import bank from '../images/Bank.png';

function HomeSection(){
    return (
        <section id="Home-section">
            <div>
            <p className="welcome-message">WELCOME TO OURBANK INTERNET BANKING PORTAL </p>
            </div>
        
            <div className="login-div">
               
                <div className="money-img">
                    <img src={bank} alt="bank" />
                </div>
                <div className="login">
                    <div className="form">
                        <form action="" >
                            <div className="form-items">
                                <label htmlFor="email">Email Id</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-items">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" id="password" />
                            </div>
                            <div className="form-items">
                                <button className="login-button">Log in</button>
                            </div>
                            <div className="sign-up form-items">
                                <p>
                                    Don't You have an account?{" "}
                                    <span className="span-signup">Sign Up</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;