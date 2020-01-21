import React from 'react';

const NavbarItem = ({label}) => {

return <a className="nav-link" href="/index/.html" tabIndex="-1" aria-disabled="true">{label} <span className="sr-only">(current)</span></a>

}

export default NavbarItem