import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" ><h4>InstaCoding</h4></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
         <Link to='/' className="nav-link" aria-current="page"><div style={{fontSize:'17px', fontWeight:'700', letterSpacing:'2px' }}>Home</div></Link>
        </li>
        <li className="nav-item">
         <Link to='/profile' className="nav-link" aria-current="page"><div style={{fontSize:'17px', fontWeight:'700', letterSpacing:'2px' }}>Profile</div> </Link>
        </li>
        <li className="nav-item">
         <Link to='/createpost' className="nav-link" aria-current="page"><div style={{fontSize:'17px', fontWeight:'700', letterSpacing:'2px' }}>Create Post</div></Link>
        </li>
        <li className="nav-item">
         <Link to='/login' className="nav-link" aria-current="page"><div style={{fontSize:'17px', fontWeight:'700', letterSpacing:'2px' }}>Sign In</div></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar