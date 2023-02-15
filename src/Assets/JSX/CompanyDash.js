import React, {Component} from 'react';
import '../CSS/dashboard.css';


export class CompanyDash extends Component{
    render(){
        return(
            <div id='dashboard_body'>
            <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
   
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          Bhavishya Dwar
        </a>
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">Jobs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Companies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Services</a>
          </li>
        </ul>
        
      </div>
      

      <div className="d-flex align-items-center">
        
        
  

        <div className="dropdown">
          <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">2</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div>
        
        <div className="dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
              className="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    
  </nav>
  </header>

    <main>
        <div className="container-fluid">

          <br/><br/>
          <br/>
          <div id="profile">
            <br />
            <div className="card" id='sty_1' >
              <div className="card-body">
                <img id="profileimage" src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1676081222~exp=1676081822~hmac=467801bff8371b5cfe04491cd2f0d8ce854a076185c6a0250dd626c85ebd35a7" alt="profile"/>
                <div id="profile_body">
                <h4 className="card-title"  > Name  : H.N.K. Technologies</h4>
                
                
                <h4 className="card-title" > E-Mail  : hnkservices@hnktech.com</h4>
                <h4 className="card-title" > Location  : Hyderabad</h4>
                <br/><br/>
                <a href="#" className="btn btn-primary" id="editprof_1" ><b>Edit Profile</b></a>
                <a href="#" className="btn btn-primary" id="editprof_2" ><b>Add a Job</b></a>
                </div>
              </div>
            </div>
          {/* </center> */}
          </div>
          <br/><br/>
          </div>
            <div id="stud_appl">
                <br/>
                {/* <center> */}
                    <h2 id='sty_2'>Job Requests</h2>
                {/* </center> */}
                <br/>
                <br/><br/>
                <div className="card" id='sty_1' >
              <div className="card-body">
                    <h4 className='text-black'>Futher job requests</h4>       
                    </div>
            </div>
        </div>
    </main>

    <div>
        <br/>
        <br/>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    

    </div>
        );
    }
}
export default CompanyDash;