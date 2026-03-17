import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './navbar.css';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                {/* Logo and Text Section */}
                <div className="navbar-logo-section">
                    <Link to={'/'} className="navbar-logo-link">
                        <img 
                            src={logo} 
                            alt="Uttarakhand Road Hazard Monitoring Dashboard LOGO" 
                            className="navbar-logo-img" 
                        />
                        <h1 className="navbar-logo-text">
                            <span className="logo-highlight">Uttarakhand</span> Road Hazard Monitoring Dashboard
                        </h1>
                    </Link>
                </div>
                
                {/* Menu Section */}
                <nav className="navbar-menu">
                    <ul className={`navbar-menu-list ${openNav ? "mobile-open" : ""}`}>
                        <li className="navbar-menu-item">
                            <NavLink 
                                to={'/'} 
                                className={({ isActive }) => 
                                    `navbar-menu-link ${isActive ? "navbar-menu-link-active" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-menu-item">
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    `navbar-menu-link ${isActive ? "navbar-menu-link-active" : ""}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="navbar-menu-item">
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => 
                                    `navbar-menu-link ${isActive ? "navbar-menu-link-active" : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    
                    {openNav ? (
                        <HiMenuAlt3 
                            onClick={() => setOpenNav(false)} 
                            className="navbar-mobile-menu-icon"
                        />
                    ) : (
                        <HiMenuAlt1 
                            onClick={() => setOpenNav(true)}
                            className="navbar-mobile-menu-icon"
                        />
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;