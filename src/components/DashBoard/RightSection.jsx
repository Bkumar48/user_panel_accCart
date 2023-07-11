import React, { useEffect } from 'react'
import profile1 from '../assets/dashboard/profile-1.jpg'
import logo from '../assets/sidebar/logo.png'
const RightSection = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className='right-section'>
      <div className="nav">
        <button id='menu-btn'>
          <span className='material-icons-sharp'
            onClick={() => {
              const asideElement = document.querySelector('aside');
              asideElement.style.display = 'block';
            }}
          >
            menu
          </span>
        </button>
        <div className="dark-mode" onClick={() => {
            document.body.classList.toggle('dark-mode-variables');
            setDarkMode(!darkMode);
          }}>
          <span className={!darkMode ? 'material-icons-sharp active' : 'material-icons-sharp'} >
            light_mode
          </span>
          <span className={darkMode ? 'material-icons-sharp active ' : 'material-icons-sharp '}>
            dark_mode
          </span>
        </div>
        <div className="profile">
          <div className="info">
            <p>Hey, <b>Bittu</b></p>
            <small className='text-muted'>User</small>
          </div>
          <div className="profile-photo">
            <img src={profile1} alt='profile' />
          </div>
        </div>
      </div>
      <div className='user-profile'>
        <div className="logo">
          <img src={profile1} alt='profile' />
          <h2>Bittu Kumar</h2>
          <p> Fullstack Developer</p>
        </div>
      </div>
      <div class="reminders">
        <div class="header">
          <h2>Reminders</h2>
          <span class="material-icons-sharp">
            notifications_none
          </span>
        </div>

        <div class="notification">
          <div class="icon">
            <span class="material-icons-sharp">
              volume_up
            </span>
          </div>
          <div class="content">
            <div class="info">
              <h3>Workshop</h3>
              <small class="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <span class="material-icons-sharp">
              more_vert
            </span>
          </div>
        </div>

        <div class="notification deactive">
          <div class="icon">
            <span class="material-icons-sharp">
              edit
            </span>
          </div>
          <div class="content">
            <div class="info">
              <h3>Workshop</h3>
              <small class="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <span class="material-icons-sharp">
              more_vert
            </span>
          </div>
        </div>

        <div class="notification add-reminder">
          <div>
            <span class="material-icons-sharp">
              add
            </span>
            <h3>Add Reminder</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightSection
