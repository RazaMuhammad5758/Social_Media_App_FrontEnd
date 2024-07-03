import React, { useState } from 'react'
import './SubPost.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

const SubPost = ({post}) => {


  const [CommentOpen, setCommentOpen] = useState(false);

  const liked = false;
  return (
    <div className='subpost'>
      <div className="container">

        <div className="user">
          <div className="userinfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color:'inherit'}}>
                <span className='name'>{post.name}</span>
              </Link>
                <span className='date'>1 min ago</span>
            
            </div>
          </div>
            <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">

          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            123 likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!CommentOpen)}>
            <TextsmsOutlinedIcon />
            123 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            123 shares
          </div>
        </div>
        {CommentOpen && <Comments/>}
      </div>
    </div>
  )
}

export default SubPost
