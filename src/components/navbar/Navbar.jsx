import React, { useContext } from 'react'
import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = ()=> {

  const{toggle,darkMode}=useContext(DarkModeContext);

  const{currentUser}=useContext(AuthContext);

  return (
    <div className='navbar'>
    <div className='left'>
    <Link to="/" style={{textDecoration:"none"}}>
      <span>GetSocial</span>
    </Link>
    <HomeOutlinedIcon/>
    {darkMode ?<LightModeOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
    <GridViewOutlinedIcon/>
    <div className='search'>
      <SearchOutlinedIcon/>
      <input type='text' placeholder='search'/>
    </div>
    </div>
    <div className='right'>
    <PersonOutlineOutlinedIcon/>
    <ChatBubbleOutlineOutlinedIcon/>
    <NotificationsOutlinedIcon/>
    <div className='user'>
     <img src={currentUser.profilePic} alt="user"></img>
     <span>{currentUser.name}</span>
    </div>
    </div>
    </div>
  )
}

export default Navbar