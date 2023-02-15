import React, {Component} from "react";
import {Link} from 'react-router-dom';

import '../CSS/RegisterCom.css';
import regimg from '../PIC/register2.png';

export class RegisterCom extends Component{
    render(){
        return(
          <div>

          <header>
                <div id='returnBG'>
                <div id='m_1'>
                    <Link to='/Register'  id='nolink_1'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16" href='https://www.w3schools.com'>
                      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" id='i_1'/>
                    </svg> Return</Link>
                    </div>
                    </div>
            </header>
    
        <main>
            <br/><br/>
            <img src={regimg} id="register_img" alt="image" width="400vw" height="350vh" align="left"/>
            <div className="content">
            <div className="space"><h2>Join our Talented Family!</h2></div>
            <br/>
            <form action="/action_page.php" method="get">
            <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Company's Name</h6>
                  <input type="text" className="form-control" placeholder="Google Inc" aria-label="First name" required />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Email Id</h6>
                  <input type="email" className="form-control" placeholder="example@email.com" aria-label="First name" required />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Password</h6>
                  <input type="password" className="form-control" placeholder="Must be atleast 6 characters" aria-label="First name" required />
                </div>
              </div>
              <br/>
    
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Phone Number</h6>
                  <input type="number" className="form-control" placeholder="+91 9876543210" aria-label="First name" required />
                </div>
              </div>
              <br/>
    
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Select Company Type</h6>
                    <select className="form-select" required>
                      <option selected disabled>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
              </div>
              <br/>
    
              
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Company's Website link</h6>
                    <input type="text" className="form-control" placeholder="www.companyname.com" aria-label="First name" required />
                    <br/>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" for="gridCheck">
                          By checking this box, you agree to our <a href="#">Terms and Conditions</a>.
                        </label>
                      </div>
                      <br/>
                      <a href="#"><button type="submit" className="btn btn-dark"><b>Register Now</b></button></a>
                    </div>
              </div>
              
              </form>
            </div>
          
        </main>
      </div>
        );
    }
}
export default RegisterCom;