import React, { useContext } from 'react'
import './Stories.scss'
import { AuthContext } from '../context/authContext';

const Stories = () => {

    const {currentUser} = useContext(AuthContext);

    //TEMPORARY STORIES
const stories=[
    {
        id:1,
        name:"Ahmed",
        img: "https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id:2,
        name:"Moiz",
        img: "https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        name:"Noman",
        img: "https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        name:"John Doe",
        img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    
]

  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
