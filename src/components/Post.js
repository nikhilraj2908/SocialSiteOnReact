import React from 'react';

const Post = () => (
  <div className="post">
    <div className="d-flex align-items-center mb-3">
      <img src="/images/dp.png" className="mr-3" alt="User Avatar" />
      <div className="ms-2">
        <h5 className="mb-0">Lara Leones</h5>
        <span>@thewallart</span>
      </div>
    </div>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <a href="#">Read More</a></p>
    <img src="/images/mainposter.png" className="w-100" alt="Post Image" />
    <div className=" mt-3">
      <span className="bi bi-heart pe-3"> 9.8k</span>
      <span className="bi bi-chat pe-3" > 8.6k</span>
      <span className="bi bi-share pe-3"> 7.2k</span>
    </div>
  </div>
);

export default Post;
