import React from 'react';
import logo from '../../assets/logo.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="topHeader">

      {/* box to hold logo, search box, nav icons */}
      <div className="imgBox">
        <i className="fab fa-instagram fa-2x"></i>
        <p className="line">|</p>
        <img src={logo} className="logo" alt="logo"/>
      </div>

      {/* search box with placehold and icon placeholder */}
      <div className="searchContainer">
        <input type="text" placeholder="Search" className="searchBox"/>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>

      {/* navigation icon container */}
      <div className="nav">

        {/* compass icon */}
        <div className="navIcons">
          <i className="fa fa-compass fa-2x" />
        </div>

        {/* heart icon */}
        <div className="navIcons">
          <i className="fa fa-heart fa-2x" />
        </div>

        {/* user circle icon */}
        <div className="navIcons">
          <i className="fa fa-user-circle fa-2x" />
        </div>

      </div>
    </div>
  );
};

export default SearchBar;