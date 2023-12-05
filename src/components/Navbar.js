import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        PurPur
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Projects'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                              Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Patch-notes'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Patch-notes
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/Bio'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Bio
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Bio</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;