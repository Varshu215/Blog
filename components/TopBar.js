import "./topbar.css"

import { Link } from "react-router-dom"

export default function TopBar() {
  return (
    <div className="top">
       <div className="topLeft">
       <i className="topIcon fa-brands fa-facebook"></i>
       <i className="topIcon fa-brands fa-instagram"></i>
       <i className="topIcon fa-brands fa-twitter"></i>
       </div> 
       <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link to="/home">Home</Link></li>
            <li className="topListItem"><Link to="/login">Login</Link></li>
            <li className="topListItem"><Link to="/reg">Register</Link></li>
            <li className="topListItem"><Link to="/write">Write</Link></li>

        </ul>
        </div> 
       <div className="topRight">
     <img 
     className="topImg"
     src="https://cdn5.vectorstock.com/i/1000x1000/65/14/beautiful-female-profile-vector-29006514.jpg" alt="Profile"/>
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div> 
    </div>
  )
}
