import React, { useEffect, useState } from 'react'
import profile1 from '../assets/dashboard/profile-1.jpg'
import logo from '../assets/sidebar/logo.png'
import jwt_decode from "jwt-decode";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
const RightSection = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const token = sessionStorage.getItem('token') || null;
  const [decoded, setDecoded] = useState(null);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/getUser/?userId=${decoded?.user_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setDecoded(jwt_decode(token));
  }, [token]);

  useEffect(() => {
    if (decoded) {
      getUser();
    }
  }, [decoded]);

  const { firstName, lastName } = data;
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
            <p>Hey, <b>{firstName}</b></p>
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
          <h2>{firstName + " " + lastName}</h2>
          <p> Fullstack Developer</p>
        </div>
      </div>
      <div className="reminders">
        <div className="header">
          <h2>Reminders</h2>
          <span className="material-icons-sharp">
            notifications_none
          </span>
        </div>

        <div className="notification">
          <div className="icon">
            <span className="material-icons-sharp">
              volume_up
            </span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <span className="material-icons-sharp">
              more_vert
            </span>
          </div>
        </div>

        <div className="notification deactive">
          <div className="icon">
            <span className="material-icons-sharp">
              edit
            </span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">
                08:00 AM - 12:00 PM
              </small>
            </div>
            <span className="material-icons-sharp">
              more_vert
            </span>
          </div>
        </div>

        <div className="notification add-reminder">
          <div>
            <span className="material-icons-sharp">
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
