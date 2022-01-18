import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#FFF' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon width={50} height={50} fill="#fff"/>
                        THE SQUARE.
                    </NavLogo>
                    <MobileIcon onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLinks to='/'>
                                Accueil
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLinks to='/produits'>
                                Produits
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;