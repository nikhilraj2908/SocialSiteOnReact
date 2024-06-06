import React from 'react';

const Sidebar = () => (
  <div className="col-2 sidebar">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-house-door"></span> Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-bell"></span> Notifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-heart"></span> Shop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-chat"></span> Conversation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-wallet2"></span> Wallet</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-box-arrow-in-down"></span> Subscription</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-person"></span> My Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-gear"></span> Settings</a>
      </li>
    </ul>
    <ul className="nav log-out">
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="bi bi-box-arrow-left"> Logout</span></a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
