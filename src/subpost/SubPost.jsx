import React from 'react'
import './SubPost.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';

const SubPost = ({post}) => {
  return (
    <div className='subpost'>
      <div className="container">

        <div className="user">
          <div className="userinfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color:'inherit'}}>
                <span>{post.name}</span>
              </Link>
                <span className='date'>1 min ago</span>
            
            </div>
          </div>
            <MoreHorizIcon />
        </div>
        <div className="content"></div>
        <div className="info"></div>
      </div>
    </div>
  )
}

export default SubPost
