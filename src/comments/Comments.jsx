import React, { useContext } from 'react'
import './Comments.scss'
import { AuthContext } from '../context/authContext';


const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  const comments = [
    {
      id: 1,
      desc: "Mashallah raza bhai",
      name: "Moiz",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "Nice Pic",
      name: "Noman",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className='comments'>

      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='write a comment' />
        <button>Send</button>
      </div>
      {comments.map(comment=>(
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments
