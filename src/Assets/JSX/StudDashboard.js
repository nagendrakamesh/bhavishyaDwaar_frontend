import React , {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/dashboard.css';
import '../CSS/loggednav.css'


const StudDashboard = () => {

  const auth = localStorage.getItem("student");
  const sid = JSON.parse(auth)._id;
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  }

    const [appl, setAppl] = useState([]);

    useEffect(() => {
      getAppl();
    }, []);

  
  const backend_uri = process.env.REACT_APP_BACKEND_URI;

  const getAppl = async () => {
    let result = await fetch(`${backend_uri}applydjobs/${sid}`);
    
    result = await result.json();
    if(result != "error"){
      setAppl(result);
    }
    else{
      console.error("Error incurred!");
    }
    
  }


  // const date_format = (date) => {
  //   let temp = "";
  //   temp = temp + date.charAt(8) + date.charAt(9) + "-" + date.charAt(5) + date.charAt(6) + "-";
  //   temp = temp + date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
  //   return (temp);
    
  // }



  const withdraw = async (stid, jid) => {
    let result = await fetch(backend_uri + 'studentwithdraw', {
      method : "post",
          body : JSON.stringify({
              stid, jid
          }),
          headers : {
              mode: 'no-cors',
              'Content-Type' : 'application/json',
              "Access-Control-Allow-Origin" : "*",
              "Access-Control-Allow-Credentials" : true 
          }
    }).then( err => {
      if(err){
        throw (err);
      }
    }).catch( err => {
      console.log(err);
    });

    alert("Withdrew Successfully!");
    window.location.reload(true);

    result = await result.json();
    
    navigate('/StudentDash');
  }




const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;

        return(
            <div id='dashboard_body'>
            <header>
            <nav id='hemanthnav' className="navbar navbar-expand-lg navbar-dark bg-body-tertiary-dark">
   
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

    <main>
        <div className="container-fluid">

          <br/><br/>
          <br/>
          <div id="profile">
            <br />
            <div className="card" id='sty_1' >
              <div className="card-body">
                <div className='d-none d-md-block d-lg-block'> <img id="profileimage" src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1676081222~exp=1676081822~hmac=467801bff8371b5cfe04491cd2f0d8ce854a076185c6a0250dd626c85ebd35a7" alt="profile"/> </div>
                <div id="profile_body">
                <h4 className="card-title"  > Name  : {JSON.parse(auth).name}</h4>
                
                <h4 className="card-title" > Roll No  : {JSON.parse(auth).rollno}</h4>
                
                <h4 className="card-title" > E-Mail  : {JSON.parse(auth).email}</h4>
                <br/><br/>
                <Link className="btn btn-primary" to='/StudentDash/EditProfile' id="editprof_1" ><b>Edit Profile</b></Link>
                <a href="#" className="btn btn-primary" id="editprof_2" ><b>Update Resume</b></a>
                </div>
              </div>
            </div>
          {/* </center> */}
          </div>
          <br/><br/>

            <div id="stud_appl">
                <br/>
                
                    <h2 id='sty_2'>My applications</h2>
                {/* </center> */}
                <br/>

                {
                 
                  
                <div className="row">
                  {
                  appl.map((item, index) =>


                <div className="col col-lg-3 col-md-6" key={index}>
                <div className="card jobcard" id='sty_31'>
                    <div className="card-body" id="cardBody">
                      <h5 className="card-title"><img src={item.jobid.logo} alt="img" className="compimg"/> {item.jobid.name}</h5>
                      <p className="card-text">Position : {item.jobid.position} <br/> 
                        Location : {item.jobid.location} <br/> 
                        Applied On : {formattedToday} <br/>
                       </p>
                      <button className="btn btn-dark" id='withdraw' onClick={() => withdraw(sid, item.jobid._id)}>Withdraw</button>
                    </div>
                  </div>
                </div>
  

                // :

                // <h2>No Jobs Applied</h2>

              )};

                </div>
                }


                <br/><br/>
                <div id='cen'>
                    <Link to='/StudentDash/Jobs'><button type="button" className="btn btn-light" id='sty_7'><b>Browse for jobs</b></button></Link>
                    </div>
            </div>
        </div>
    </main>

    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    

    </div>
        );
    
}
export default StudDashboard;
