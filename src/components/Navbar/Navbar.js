import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

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
                    <NavMenu onClick={handleClick} click={click} >

                        <NavItem>
                            <NavLinks to='/'>
                                Accueil
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/produits'>
                                Produits
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>
                                        S'inscrire
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>
                                        S'inscrire
                                    </Button>
                                </NavBtnLink> 
                            )}
                        </NavItemBtn>

                    </NavMenu>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;