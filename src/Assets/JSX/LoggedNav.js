import React, {Component} from "react";
import '../CSS/RegisterCom.css';

export class LoggedNav extends Component{
    render(){
        return(
          <div>
          <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="header">
              <a className="navbar-brand" href="index.html"><h5><b>&nbsp;BhavishyaDwaar.com</b></h5></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Dashboard.html"><h5>Jobs</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="companies.html"><h5>Companies</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contests.html"><h5>Recommended Contests</h5></a>
              </li>
            </ul>
              <form className="d-flex" role="search">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                    <a href="login.html"><button type="button" className="btn btn-light"><b>Login</b></button></a>
                      &nbsp;
                    </li>
                    <h2></h2>
                    <li className="nav-item">
                      <a href="register.html"><button type="button" className="btn btn-light"><b>Register</b></button></a>
                      &nbsp;
                      </li>
                    </ul>
                  </form>
                </div>
              
            </nav>  
      </header>
    
        <main>
            <br/><br/>
            <img src="bdimgs\register2.png" id="register_img" alt="image" width="400vw" height="350vh" align="left"/>
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
export default LoggedNav;