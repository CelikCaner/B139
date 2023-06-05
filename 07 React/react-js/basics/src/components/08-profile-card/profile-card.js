import React from 'react';
import './profile-card.scss';

export default function ProfileCard() {
  const img = require(`../../assets/img/profile-card.jpg`);
  const profileBackground = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className="profile-card">
      <div className="header" style={profileBackground}>
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div className="avatar" style={profileBackground}></div>
        <h3>Walker</h3>
        <h5>Nashville, Tennesse </h5>
        <div>
          <div>
            <h2>2</h2>
            <span>Shot</span>
          </div>
          <div>
            <h2>234</h2>
            <span>Follower</span>
          </div>
          <div>
            <h2>327</h2>
            <span>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
}
