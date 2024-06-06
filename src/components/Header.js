import React from 'react';

const Header = () => (
  <header>
    <div className="row py-3">
      <div className="col-2 text-center">
        <div className="logo w-100">
          <h3>LOGO</h3>
        </div>
      </div>
      <div className="col-7">
        <div className="search_bar input-group">
          <span className="bi bi-search input-group-text" id="search_icon"></span>
          <input type="text" className="form-control" id="search_input" placeholder="&nbsp;&nbsp;&nbsp; Search here..." />
          <span className="bi bi-sliders input-group-text" id="filter_icon">&nbsp;Filters</span>
        </div>
      </div>
      <div className="col-3 text-center">
        <button className="btn btn-success h-100 w-100">Become a Seller</button>
      </div>
    </div>
  </header>
);

export default Header;
