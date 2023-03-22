import React from 'react';
import {Link} from 'react-router-dom';

import '../CSS/editProf.css'
import mechtree from '../PIC/mechtree.png'

const CompEditProfile = () => {

    const auth = localStorage.getItem("company");

    return(

    <main id='StudEditProf_body' className='container-fluid'>
    
    <div className="row">

    <div className="col-lg-8">
    <div className="editprofile">
        <h2 id="editHeading">&nbsp;&nbsp; Edit Profile</h2>
    <div className="align-edit-profile">

    <br/>
    <span><b>&nbsp; Company Name </b> </span>
    <div className="input-group">
        <input type="text" className="form-control" placeholder={JSON.parse(auth).name} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; E-Mail  </b></span>
    <div className="input-group">
        <input type="email" className="form-control" value={JSON.parse(auth).email} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; New Password  </b></span>
    <div className="input-group">
        <input type="password" className="form-control" value={JSON.parse(auth).password} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>


    <br/>
    <span id="re-enter"><b>&nbsp; *Re-enter the above password</b></span>
    <div className="input-group">
        <input type="password" className="form-control" value={JSON.parse(auth).password} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; Location  </b> </span>
    <div className="input-group">
        <input type="text" className="form-control" value={JSON.parse(auth).location} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; Phone Number </b> </span>
    <div className="input-group">
        <input type="number" className="form-control" value={JSON.parse(auth).phone} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; Logo Link </b> </span>
    <div className="input-group">
        <input type="link" className="form-control" value={JSON.parse(auth).logo} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>

    <div className="row" id="editSave">

    <div className="col-4">
        <Link to='/CompanyDash' className="btn btn-dark"><b>Cancel</b></Link>
        <br/>
    </div>
    
    <div className="col-8">
        <a href="#" className="btn btn-primary" ><b>Save Changes</b></a>
        <br/>
    </div>

    </div>
    <br/>
    <br/>
    </div>
    </div>

    </div>



    <div className="col-lg-4">
        <br/><br/>
        <div className='d-none d-lg-block'>
            <img src={mechtree} alt="pic" id="mechtree"/>
        </div>
    </div>

    </div>
    <br />
    <br />
    </main>


    );
}
export default CompEditProfile;