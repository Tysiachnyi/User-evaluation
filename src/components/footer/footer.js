import React from 'react';

const Footer = () => {
    return(

        <footer className="footer">
      <div className="container">
        <span className="text-muted">Developed and further updated by Nikita Tysiachnyi.    
        <a className="github__link text-secondary" 
        href="https://github.com/Tysiachnyi">
            GitHub
            <span>  </span>
            <i className="fa fa-github" aria-hidden="true"/></a>
        <a className="github__link text-secondary" 
        href="https://www.linkedin.com/in/nikita-tisachniy-9b32b294/">
            Linkedin
            <span>  </span>
            <i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </span>
      </div>
    </footer>
    )
};

export default Footer;