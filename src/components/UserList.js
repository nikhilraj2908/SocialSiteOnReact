import React from 'react';
import UserCard from './UserCard';

const UserList = () => (
  <div className="user-list">
    <div>
      <a style={{ textDecoration: 'none' }} href="#"><span id="lblArtist" className="fw-bold me-3"> Artists</span></a>
      <a style={{ textDecoration: 'none' }} href="#"><span className="text-secondary">Photographers</span></a>
    </div>
    <br />
    <UserCard id="card1" imgSrc="/images/dp1.png" name="Thomas Edward" username="@thewildwithyou" backgroundImg="/images/img1.png" />
    <UserCard id="card2" imgSrc="/images/dp2.png" name="Crish Doe" username="@thewildwithyou" backgroundImg="/images/img2.png" />
    <UserCard id="card3" imgSrc="/images/dp3.png" name="Emilie Jones" username="@thewildwithyou" backgroundImg="/images/img3.png" />
    <UserCard id="card4" imgSrc="/images/dp.png" name="Jessica Williams" username="@thewildwithyou" backgroundImg="/images/img4.png" />
  </div>
);

export default UserList;
