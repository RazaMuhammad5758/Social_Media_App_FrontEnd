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
              <img src="https://en.dailypakistan.com.pk/digital_images/extra-large/2023-08-08/imran-khan-biography-1691505311-9489.jpg" alt="" />
              <span>Imran Khan</span>
            </div>
            <div className="buttons">
              <button style={{ background: "skyblue", color: "white", borderColor: "skyblue", borderRadius: "2px", cursor: "pointer" }}>follow</button>
              <button style={{ background: "red", color: "white", borderColor: "red", borderRadius: "2px", cursor: "pointer" }}>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Najeeb Khan</span>
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
              <img src="https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Kareem</span> changed their cover picture
              </p>
            </div>
            <span className='time'>13 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4067766/pexels-photo-4067766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Arsal</span> changed their cover picture
              </p>
            </div>
            <span className='time'>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4101188/pexels-photo-4101188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Abraham</span> changed their cover picture
              </p>
            </div>
            <span className='time'>2 hrs ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/921284/pexels-photo-921284.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Eman</span> changed their cover picture
              </p>
            </div>
            <span className='time'>15 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Najeeb</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/246805/pexels-photo-246805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
              <div className="online" />
              <span>Hammad</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/6256894/pexels-photo-6256894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
              <div className="online" />
              <span>Eshaq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
              <div className="online" />
              <span>Ahmed</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/5026987/pexels-photo-5026987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
              <div className="online" />
              <span>Rahim</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
