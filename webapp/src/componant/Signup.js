import React, { useEffect, useState } from 'react'

export const Signup = () => {

const [data,setData]=useState({
    name:'',
    password:'',
    fname:'',
    lname:'',
    email:'',
    phone:'',

})

const [error,setError]=useState({
    errors:{},
    isError:false
})

//handel change
const  handelChange=(event,property)=>{
setData({...data,[property]:event.target.value})
}
const resetData=()=>{
    setData({
        name:'',
        password:'',
        fname:'',
        lname:'',
        email:'',
        phone:'',
    })
    

}

const submitForm=(event)=>{
    event.preventDefault()
    alert("submit")
}



  return (
    <div className="container" >
        <div className="row">

         {/* {JSON.stringify(data)} */}
            <div className="col-md-6 offset-md-3">
                <div className="container text-center ">
                    <img src="./images/online.png" alt="" />
                </div>
                <h1 className="text-center">Register Here</h1>

                <form className='container mg' onSubmit={submitForm} >
                      
                {/* user name filed */}
                <div id="float-label">
                       <input type="text" id="float-label input" placeholder='Enter User Name'
                       onChange={(e)=>handelChange(e,'name')}
                       value={data.name}
                       
                       />

                       <label htmlFor="name" id="float-label label">User Name </label>
                 </div>


                    {/* password filed */}
                 <div id="float-label" clasName="mg">
                       <input type="password" id="float-label input" placeholder='Enter Password'
                       onChange={(e)=>handelChange(e,'password')}
                       value={data.password}
                       />

                       <label htmlFor="Password" id="float-label label"> Password </label>
                 </div>


                    {/* first name filed */}
                 <div id="float-label" clasName="mg">
                       <input type="text" id="float-label input" placeholder='Enter Fist Name'
                       onChange={(e)=>handelChange(e,'fname')} 
                       value={data.fname}
                       />

                       <label htmlFor="fname" id="float-label label">First Name </label>
                 </div>


                   {/* last name filed */}
                 <div id="float-label">
                       <input type="text" id="float-label input" placeholder='Enter Last Name'
                       onChange={(e)=>handelChange(e,'lname')}
                       value={data.lname}
                       />

                       <label htmlFor="lname" id="float-label label">Last Name </label>
                 </div>


                 {/* Email filed */}
                 <div id="float-label">
                       <input type="Email" id="float-label input" placeholder='Enter Email Id'
                       onChange={(e)=>handelChange(e,'email')}
                       value={data.email}

                       />

                       <label htmlFor="email" id="float-label label">Email  </label>
                 </div>


                 {/* Phone no  filed */}
                 <div id="float-label">
                       <input type="number" id="float-label input" placeholder='Enter Mobile No'
                       onChange={(e)=>handelChange(e,'phone')}
                       value={data.phone}
                       />

                       <label htmlFor="phone" id="float-label label">Phone NO </label>
                 </div>


                 {/* Buttons filed */}
                <div className='container text-center '>
                <input className="btn btn-primary" type="submit" value="Register"/>

                <input className="btn btn-danger inline" type="reset" value="Clear" onClick={resetData}/>
                </div>


                </form>

            </div>

        </div>
    </div>
  )
}
