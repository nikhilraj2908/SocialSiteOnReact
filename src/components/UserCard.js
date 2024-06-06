import React from 'react';

const UserCard = ({ id, imgSrc, name, username, backgroundImg }) => (
  <div className={`card mb-4`} id={id} style={{ backgroundImage: `url(${backgroundImg})`, color: 'white' }}>
    <div className="card-body">
      <div className="d-flex align-items-center body_elements">
        <button className="btn position-relative">
          <img src={imgSrc} className="mr-1" alt="Artist" />
          <span className="bi bi-dot text-success position-absolute badge" style={{ fontSize: '60px' }}></span>
        </button>
        <div>
          <h6 className="mb-0">{name}</h6>
          <span>{username}</span>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
