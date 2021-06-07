import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Jason Fletcher <i className='fab fa-typo3'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
          </div>
          
        </div>
      </nav>
    </div>
    
  )
}










// const Navbar = () => {
//   return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">Jason Fletcher</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">About</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Skills</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Projects</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Resume</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Contact</a>
    //         </li>


    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  // )
// }

export default Navbar
