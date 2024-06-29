import React, { useContext } from 'react';
import './LeftBar.scss';
import { Link } from 'react-router-dom';

// Importing assets
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);
  // Content items array for mapping
  const contentItems1 = [
    { src: Friends, label: 'Friends' },
    { src: Groups, label: 'Groups' },
    { src: Market, label: 'Marketplace' },
    { src: Watch, label: 'Watch' },
    { src: Memories, label: 'Memories' },
  ];

  const contentItems3 = [
    { src: Tutorials, label: 'Tutorials' },
    { src: Courses, label: 'Courses' },
    { src: Fund, label: 'Fund' },
  ];
  const contentItems2 = [
    { src: Events, label: 'Events' },
    { src: Gaming, label: 'Gaming' },
    { src: Gallery, label: 'Gallery' },
    { src: Videos, label: 'Videos' },
    { src: Messages, label: 'Messages' },
  ];

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="user">
              <img src={currentUser.profilePic} alt="User" />
              <span>{currentUser.name}</span>
            </div>
          </Link>

          {contentItems1.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        
        <hr />
        
        <div className="menu">
          <span>Your shortcuts</span>
          {contentItems2.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          {contentItems3.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
