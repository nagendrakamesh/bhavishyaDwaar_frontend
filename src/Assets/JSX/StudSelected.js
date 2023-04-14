import React , {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/selected.css';

const StudSelected = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/Login");
    }

    const auth = localStorage.getItem('student');
    const stid = JSON.parse(auth)._id;

    const [appl, setAppl] = useState([]);

    useEffect(() => {
      getAppl();
    }, []);


    const getAppl = async () => {
        let result = await fetch(`http://localhost:5000/selected/${stid}`);
        
        result = await result.json();
        if(result != "error"){
        setAppl(result);
        }
        else{
        console.error("Error incurred!");
        }
    
    }

    return(
        <div>

    <header>
            <nav id='hemanthnav' className="navbar navbar-expand-lg navbar bg-body-tertiary">
   
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* <i className="fas fa-bars"></i> */}
        <span className='navbar-toggler-icon'></span>
      </button>
  
      
      <div className="collapse navbar-collapse" id="navbarNav">
        
        <Link className="navbar-brand mt-2 mt-lg-0" to='/'>
          Bhavishya Dwar
        </Link>
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='/StudentDash/Jobs' className="nav-link active">Jobs</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to='/StudentDash/CompanyList'>Companies</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to='/StudentDash/Selected'>Selected</Link>
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
            <Link to='/StudentDash' className="dropdown-item">My profile</Link>
            </li>
            <li>
              <Link className="dropdown-item" onClick={logout} to="/Login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    
  </nav>
  </header>

<br /><br /><hr /><br />
            <div id='stud_appl'>
                    <div className="row">
                    
                    {
                    appl.map((item) =>

                    <div className="col col-lg-4 col-md-6">
                    <div className="card jobcard" id='sty_sel'>
                        <div className="card-body" id="cardBody">
                        <h5 className="card-title"><img src={item.jobid.logo} alt="img" className="compimg"/> {item.jobid.name}</h5>
                        <p className="card-text">
                        Job Role : {item.jobid.position}<br/><hr />
                        You will receive an official mail from the company to your registered email regarding further selection and interview process.
                       </p>
                        </div>
                    </div>
                    </div>


                    )}
                </div>
                </div>
        </div>
    );
}
export default StudSelected;