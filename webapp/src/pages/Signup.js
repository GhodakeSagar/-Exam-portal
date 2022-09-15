import React from 'react'

//import imeges from "./imeges/Online.png";




export default function signup() {

const submit=(e)=>{
    e.preventDefault();
    alert("sumbit form")
}




  return (
    <div className="container" >
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="container text-center ">
                    <img src="./images/online.png" alt="" />
                </div>
                <h1 className="text-center">Register Here</h1>

                <form className='container mg' onSubmit={submit}>
                      
                {/* user name filed */}
                <div id="float-label">
                       <input type="text" id="float-label input" placeholder='Enter User Name' />

                       <label htmlFor="User Name" id="float-label label">User Name </label>
                 </div>


                    {/* password filed */}
                 <div id="float-label" clasName="mg">
                       <input type="password" id="float-label input" placeholder='Enter Password' />

                       <label htmlFor="Password" id="float-label label"> Password </label>
                 </div>

                 <div id="float-label" clasName="mg">
                       <input type="text" id="float-label input" placeholder='Enter Fist Name' />

                       <label htmlFor="email" id="float-label label">First Name </label>
                 </div>

                 <div id="float-label">
                       <input type="text" id="float-label input" placeholder='Enter Last Name' />

                       <label htmlFor="email" id="float-label label">Last Name </label>
                 </div>


                 <div id="float-label">
                       <input type="Email" id="float-label input" placeholder='Enter Email Id' />

                       <label htmlFor="email" id="float-label label">Email  </label>
                 </div>


                 <div id="float-label">
                       <input type="number" id="float-label input" placeholder='Enter Mobile No' />

                       <label htmlFor="email" id="float-label label">Phone NO </label>
                 </div>


                <div className='container text-center '>
                <input class="btn btn-primary" type="submit" value="Register"/>

                <input class="btn btn-danger inline" type="reset" value="Clear"/>
                </div>


                </form>

            </div>

        </div>
    </div>
  )
}
