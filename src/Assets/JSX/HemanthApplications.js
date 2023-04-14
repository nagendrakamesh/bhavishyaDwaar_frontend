import React from "react";
import '../CSS/applications.css';

const Applications=()=>
{
    return(
        <div>
        <div id="stud_appl">
                <br/>
                {/* <center> */}
                    <h2 id='sty_2'>My applications</h2>
                {/* </center> */}
                <br/>
                <div className="row">


                  
                <div className="col col-lg-3 col-md-6">
                <div className="card jobcard" id='sty_31'>
                    <div className="card-body" id="cardBody">
                      <p className="card-text">
                        Job Role : Project Manager<br/>
                        Name : Hemanth<br/>
                        Roll Number : 21BD1A052V<br/>
                        Email :  hemanth@ps.com<br/> 
                        Phone : 7013762683 <br/> 
                        Resume : To be added <br/>
                       </p>
                       
                       <button className="btn btn-primary" >Accept</button> 
                       &nbsp;
                      <button className="btn btn-outline-danger">Decline</button>
                    </div>
                  </div>
                </div>

    

                </div>
            </div>
        </div>
            
    )
}
export default Applications;