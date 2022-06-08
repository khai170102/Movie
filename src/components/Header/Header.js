import React from 'react';
import {Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
    return (
        
         <header className="headersub" class="bg-black white-80 tc  avenir">
        {/* <a href="" className="bg-white-80 ba b--black dib pa3 w2 h2 br-100">
          
        </a> */}
        
        <nav class="bt bb tc mw7 center ">
        <div >
        
        <div className="logo">
         <span className='span1'>Ze</span>
         <span className='span2'>K</span>in
         </div>
         </div>
         
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l"
            href="/"
          >
            Home
          </a>
          
          
          
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow dib pa3 ph4-l"
            href="/contact"
          >
            Contact
          </a>
          <a
            class="f6 f5-l link bg-animate white-80 hover-bg-light-green dib pa3 ph4-l"
            href="/portfolio"
          >
            Portfolio
          </a>

          <a
          className='out'
            class="f6 f5-l link bg-animate white-80 hover-bg-light-pink dib pa3 ph4-l"
            href="/Singout"
          >
            Singout
          </a>
        </nav>
      </header>          
        
        
        
    );
};

export default Header;