import React from 'react';
import './profile-card.scss';

const ProfileCard = () => {
  const img = require(`../../assets/img/profile-card.jpg`);
  const profileBackground = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="profile-card">
      <div className="header" style={profileBackground}></div>
      <div className="content">
        <div className="avatar" style={profileBackground}></div>
        <h3>Walker</h3>
        <h5>Nasvhille, Tennesse</h5>
        <div className="stats">
          <div>
            <h2>2</h2>
            <span>Shot</span>
          </div>
          <div>
            <h2>234</h2>
            <span>Followers</span>
          </div>
          <div>
            <h2>327</h2>
            <span>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
