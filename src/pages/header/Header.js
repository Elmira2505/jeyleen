import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    {/* Logo */}
                    <div className="navbar-brand">
                        <img src="../../../public/logo192.png" alt="Logo" className="logo" />
                    </div>
                    {/* Navbar items */}
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            {/* Registration Button */}
                            <a href="/registration" className="navbar-item">Registration</a>
                        </div>
                        <div className="navbar-end">
                            {/* Phone number */}
                            <div className="navbar-item">Phone: 123-456-7890</div>
                        </div>
                    </div>
                </div>
            </nav>


        </div>

    );
};

export default Header;