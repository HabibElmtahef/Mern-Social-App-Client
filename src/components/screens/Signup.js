import {React, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css'


const Signup = () => {
     const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Register = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/user/signup', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json()).then(data =>{
            if(data.error){
              toast.error(data.error)
           }
           else{
               toast.success(data.message)
               history.push('/login')
           }
        })
    }



    return (
        <div className="col-md-8 mx-auto py-5">
           <div className="card" style={{ borderRadius: "20px"}}>
               <h2 className="mx-auto pb-3 py-2">Sign Up</h2>
               <div className="container pb-4" style={{marginLeft: '100px'}}>
               <form onSubmit={(e) => Register(e)}>
               <div className="form-group d-flex ">
                   <h5 className='mr-4' >Username:</h5>
                   <input type="text" value={name} placeholder="Username" className="form-control" onChange={(e) => setName(e.target.value)} style={{width: "350px"}} />
               </div>
               <div className="form-group d-flex align-items-center justify-items-center">
                   <h5 className='mr-5' >Email:</h5>
                   <input type="email" value={email} placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)} style={{width: "350px", marginLeft:'20px'}} />
               </div>
               <div className="form-group d-flex align-items-center justify-items-center">
                   <h5 className='mr-4' >Password:</h5>
                   <input type="password" value={password} placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)} style={{width: "350px"}} />
               </div>
               <button className="btn" style={{backgroundColor:'black', width: '200px',display: 'flex', alignItems: 'center', marginLeft: '150px'}}>
                 <div style={{fontSize: '17px', color: 'white',margin: 'auto', letterSpacing: '4px', fontWeight: '600'}}>Sign Up</div></button>
               </form>
               <div className="py-3">If Have an Account,<Link to='/login'><span style={{color: 'gold'}}>Sign In Right Now</span></Link> </div>
               </div>
           </div>
           <ToastContainer/>
        </div>
    )
}

export default Signup
