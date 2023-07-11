import React from "react";
import plus from "../assets/dashboard/plus.png";
import profile1 from "../assets/dashboard/profile-1.jpg";
import profile2 from "../assets/dashboard/profile-2.jpg";
import profile3 from "../assets/dashboard/profile-3.jpg";
import profile4 from "../assets/dashboard/profile-4.jpg";
const Users = () => {
  return (
    <main>
    <div className="new-users">
      <h2>New Users</h2>
      <div className="user-list"> 
        <div className="user">
          <img src={profile1} alt="#" />
          <h2>Jack</h2>
          <p>4 min ago</p>
        </div>

        <div className="user">
          <img src={profile2} alt="#" />
          <h2>Jack</h2>
          <p>4 min ago</p>
        </div>

        <div className="user">
          <img src={profile3} alt="#" />
          <h2>Jack</h2>
          <p>4 min ago</p>
        </div>

        <div className="user">
          <img src={profile4} alt="#" />
          <h2>Jack</h2>
          <p>4 min ago</p>
        </div>

        <div className="user">
          <img src={plus} alt="#" />
          <h2>More</h2>
          <p>New users</p>
        </div>

      </div>
    </div>
    </main>
  );
};

export default Users;
