import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../CSS/RegisterSt.css';
import register from "../PIC/register.png";

export class RegisterSt extends Component{
    render(){
        return(

            <><header>
                <div id='returnBG'>
                <div id='m_1'>
                    <Link to='/Register'  id='nolink_1'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16" href='https://www.w3schools.com'>
                      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" id='i_1'/>
                    </svg> Return</Link>
                    </div>
                    </div>
            </header>
            <main>
                    <br /><br />
                    <img src={register} id="register-img" alt="image" width="450vw" height="400vh" align="left" />
                    <div class="content">
                        <div class="space"><h2>Let's get started!</h2></div>
                        <br />
                        <form action="/action_page.php" method="get">
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Full Name</h6>
                                    <input type="text" class="form-control" placeholder="Ankit Sharma" aria-label="First name" required />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Email Id</h6>
                                    <input type="email" class="form-control" placeholder="example@email.com" aria-label="First name" required />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Password</h6>
                                    <input type="password" class="form-control" placeholder="Must be atleast 6 characters" aria-label="First name" required />
                                </div>
                            </div>
                            <br />
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <h6>&nbsp;Select Programming Languages</h6>
                                        <select class="form-select" data-mdb-placeholder="This is a placeholder">
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label class="form-label select-label">Programming Language</label>
                                    </div>

                                    <div class="col">
                                        <h6>&nbsp;Select Technologies</h6>
                                        <select class="form-select">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <h6>&nbsp;Select Development</h6>
                                        <select class="form-select">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>


                                </div>
                            </div>

                            <br />
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp;Upload Resume (.pdf file less than 2MB)</h6>
                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="inputGroupFile02" required />
                                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" required />
                                        <label class="form-check-label" for="gridCheck">
                                            By checking this box, you agree to our <a href="#">Terms and Conditions</a>.
                                        </label>
                                    </div>
                                    <br />
                                    <a href="#"><button type="submit" class="btn btn-dark"><b>Register Now</b></button></a>
                                </div>
                            </div>

                        </form>
                    </div>

                </main></>

    

        );
    }
}
  export default RegisterSt;