import React from 'react'
import './RightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <span>John</span>
            </div>
            <div className="buttons">
              <button style={{ background: "skyblue", color: "white", borderColor: "skyblue", borderRadius: "2px", cursor: "pointer" }}>follow</button>
              <button style={{ background: "red", color: "white", borderColor: "red", borderRadius: "2px", cursor: "pointer" }}>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <span>John</span>
            </div>
            <div className="buttons">
              <button style={{ background: "skyblue", color: "white", borderColor: "skyblue", borderRadius: "2px", cursor: "pointer" }}>follow</button>
              <button style={{ background: "red", color: "white", borderColor: "red", borderRadius: "2px", cursor: "pointer" }}>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p>
                <span>John</span> changed their cover picture
              </p>
            </div>
            <span className='time'>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p>
                <span>John</span> changed their cover picture
              </p>
            </div>
            <span className='time'>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p>
                <span>John</span> changed their cover picture
              </p>
            </div>
            <span className='time'>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <p>
                <span>John</span> changed their cover picture
              </p>
            </div>
            <span className='time'>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <div className="online" />
              <span>John</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> 
              <div className="online" />
              <span>John</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> 
              <div className="online" />
              <span>John</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> 
              <div className="online" />
              <span>John</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> 
              <div className="online" />
              <span>John</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
