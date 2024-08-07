import React, { useContext } from 'react'
import "./NavBar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {
  const {toggleDarkMode, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  console.log(currentUser, "currentUser");


  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Friend Book</span>
        </Link>
        <div className='nav_icons'> <HomeOutlinedIcon /> </div>
         <div className='nav_icons'> {darkMode ? <WbSunnyOutlinedIcon onClick={toggleDarkMode} /> : <DarkModeOutlinedIcon onClick={toggleDarkMode} />} </div>
         <div className='nav_icons'> <GridViewOutlinedIcon /> </div>
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
