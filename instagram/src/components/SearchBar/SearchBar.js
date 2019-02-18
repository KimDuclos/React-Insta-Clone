import React from 'react';
import './SearchBar.css';
import logo from '../../assets/logo.png';
import compass from '../../assets/compass.svg';
import heart from '../../assets/heart.svg';
import userIcon from '../../assets/userIcon.svg';

const SearchBar = () => {
return (
    <div className="searchBox">
        <div className="imageBox">
            <img src={logo} className='logoImg' alt='logo'/>  {/*logo*/}
        </div>

    <div>
        <input type="text" placeholder="search"/> {/*search box*/}
    </div>

        <div className="navSection">
            <div className="nav">
                <img src={compass} className="compassIcon" alt="compass"/>
            </div>
            <div className="nav">
                <img src={heart} className='heart' alt='heart'/>
            </div>   
            <div className="nav">
                <img src={userIcon} alt='userIcon'/>
            </div> 
        </div>
    </div>
)};

export default SearchBar;