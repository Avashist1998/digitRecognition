import React from "react";


function Footer(){

    return (
        <footer className="page-footer font-small bg-dark darken3 fixed-bottom">
            <div className='footer-copyright text-center py-3 text-light'>
                &copy; {new Date().getFullYear()} Copyright: We need to add some important text to the application
            </div>
        </footer>
            
        
    )
}

export default Footer;