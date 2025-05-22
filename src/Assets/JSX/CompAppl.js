import React , {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/applications.css';

const CompAppl = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/Login");
    }

    const auth = localStorage.getItem('company');
    const compid = JSON.parse(auth)._id;

    const [appl, setAppl] = useState([]);

    useEffect(() => {
      getAppl();
    }, []);

    const backend_uri = process.env.REACT_APP_BACKEND_URI;

    const getAppl = async () => {
        let result = await fetch(`${backend_uri}compNotify/${compid}`);
        
        result = await result.json();
        if(result != "error"){
        setAppl(result);
        }
        else{
        console.error("Error incurred!");
        }
    
    }

    const decline = async (stid, jid, name) => {
        let result = fetch(backend_uri + "decline", {
            method : 'post',
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
        
            alert(`Declined ${name}'s Application!`);
            window.location.reload(true);
        
            result = await result.json();

    }

    const accept = async (stid, jid, name) => {
        let result = await fetch(backend_uri + 'accept', {
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
        });
  
        result = await result.json();
        
        alert(`Accepted ${name}'s Application!`);
        window.location.reload(true);
        result = await result.json();

      }

    return(
        <div>

            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" id='hemanthnav2'>

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
                <Link to='/CompanyDash/JobsPosted' className="nav-link active">Jobs Posted</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to='/CompanyDash/Requests'>Applications</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to='/CompanyDash/Accepted'>Accepted</Link>
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
                    <Link to='/CompanyDash' className="dropdown-item">My profile</Link>
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
                <br />
                <br />
                <hr />

                    
                    <div id='stud_appl'>
                    <div className="row">
                    
                    {
                    appl.map((item) =>

                        item.students.map((st) =>
                    
    
                    <div className="col col-lg-4 col-md-6">
                    <div className="card jobcard" id='sty_appl'>
                        <div className="card-body" id="cardBody">
                        {/* <h5 className="card-title"><img src='https://yt3.googleusercontent.com/ytc/AL5GRJVez8i3_M6BCO7UQawLDIoK2PSe9PmjTP5Bi0IKqA=s900-c-k-c0x00ffffff-no-rj' alt="img" className="compimg"/> Microsoft</h5> */}
                        <p className="card-text">
                        Job Role : {item.jobid.position}<br/>
                        Name : {st.name}<br/>
                        Roll Number : {st.rollno}<br/>
                        Email :  {st.email}<br/> 
                        Phone : {st.phone} <br/> 
                        Resume : To be added <br/>
                       </p>
                       
                       <span className='applbtn'>
                       <button className="btn btn-primary"  onClick={() => accept(st._id, item.jobid._id, st.name)}>Accept</button> 
                       &nbsp; &nbsp;
                      <button className="btn btn-outline-danger" onClick={() => decline(st._id, item.jobid._id, st.name)}>Decline</button>
                      </span>

                        </div>
                    </div>
                    </div>

                        )

                    )}

    
                    </div>
                    </div>
                        <br /><br /><br /><br />
            </main>


        </div>
    );
}
export default CompAppl;