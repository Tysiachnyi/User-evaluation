import React from 'react';
import NavbarItem from '../navbar-item';

const Navbar = ({navbarTitle}) => {

    const elements = navbarTitle.map((item) => {
        return(
            <li key={item.id} className="nav-item">
            <NavbarItem label={item.label}
            />
        </li>
        )
    })
        return (
            
           
<header>
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#"> [User evaluation] </a>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
               {elements}
            </ul>
        </div>
    </nav>
</header>
        )
    
   
};

export default Navbar;
