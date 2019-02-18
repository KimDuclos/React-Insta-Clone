import React from 'react';
import logo from '';
import './SearchBar.css';

const SearchBar = () => {
return (
    <div className="searchBox">
        <div className="imageBox">
            <img src={logo} className='logoImg'/>  {/*logo*/}
        </div>

    <div>
        <input type="text" placeholder="search"/> {/*search box*/}
    </div>

        <div className="navSection">
            <div className="nav">
                <div>COMPASS GOES HERE</div>
            </div>
            <div className="nav">
                <div>HEART GOES HERE</div>
            </div>   
            <div className="nav">
                <div>CIRCLE GOES HERE</div>
            </div> 
        </div>
    </div>
)};