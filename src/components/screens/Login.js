import {React, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/user/signin', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
            }).then(res => res.json()).then(data => {
                if(data.error){
              toast.error(data.error)
           }
           console.log(data)
           history.push('/')
        })
    }

    return (
        <div className="col-md-8 mx-auto py-5">
           <div className="card" style={{ borderRadius: "20px"}}>
               <h2 className="mx-auto pb-3 py-2">Sign In</h2>
               <div className="container pb-4" style={{marginLeft: '100px'}}>
               <form onSubmit={(e) => SignIn(e)}>
               <div className="form-group d-flex align-items-center justify-items-center">
                   <h5 className='mr-5' >Email:</h5>
                   <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" style={{width: "350px", marginLeft:'20px'}} />
               </div>
               <div className="form-group d-flex align-items-center justify-items-center">
                   <h5 className='mr-4' >Password:</h5>
                   <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" style={{width: "350px"}} />
               </div>
               <button className="btn" style={{backgroundColor:'black', width: '200px',display: 'flex', alignItems: 'center', marginLeft: '150px'}}>
                 <div style={{fontSize: '17px', color: 'white',margin: 'auto', letterSpacing: '4px', fontWeight: '600'}}>Sign In</div></button>
               </form>
               <div className="py-3">If you don't Have an Account,<Link to='/signup'><span style={{color: 'gold'}}>Sign Up Right Now</span></Link> </div>
               </div>
           </div>
           <ToastContainer/>
        </div>
    )
}

export default Login
