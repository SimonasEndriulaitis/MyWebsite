import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import debounce from 'lodash/debounce';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [show, setShow] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const controlNavbar = debounce(() => {
        if (window.scrollY > 100) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, 100);

    
    useEffect(() => {
        showButton();
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', showButton);

        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${show ? '' : 'navbar-hidden'}`}>
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
