import React, { useState } from 'react';
import './SubPost.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { RiShareForwardLine } from "react-icons/ri";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

const SubPost = ({ post }) => {
  const [CommentOpen, setCommentOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(123); // Initial like count
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

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
              <span className='date'>1 day ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" id='like' onClick={toggleLike}>
            {liked ? <FavoriteOutlinedIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />}
            <p>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</p>
          </div>
          <div className="item" onClick={() => setCommentOpen(!CommentOpen)}>
            <TextsmsOutlinedIcon />
            123 comments
          </div>
          <div className="item">
            <div id='share'><RiShareForwardLine /></div>
            <p>123 shares</p>
          </div>
        </div>
        {CommentOpen && <Comments />}
      </div>
    </div>
  );
};

export default SubPost;
