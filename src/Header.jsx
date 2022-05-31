import React from 'react'
import { HashLink } from 'react-router-hash-link';


function Header (){
    return <div className="hidden sm:flex justify-end space-x-8 list-none px-14">

      <HashLink smooth duration={5000} to ="#about">about</HashLink>
      <HashLink smooth to ="#project">project</HashLink>
    </div>
};

export default Header;