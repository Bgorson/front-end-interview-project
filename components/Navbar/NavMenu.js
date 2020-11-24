import {useState} from 'react';
import styled from 'styled-components';
import {StyledLink} from './Navbar';
import HamburgerMenu from 'react-hamburger-menu';

const StyledMobileMenu = styled.ul `{  
        list-style-type: none;
        display:flex;
        position:absolute;
        top:4rem;
        z-index:1000;
        background:#222;
        flex-direction: column;
        border-radius: 3px;
}`;
const StyledDesktopMenu = styled.ul `{  
        list-style-type: none;
        display:flex;
        @media (max-width: 600px) {
                display: none;
            }
}`;

const StyledItems= styled.li `{
    font-size: 20px;
    margin:1rem;
    list-style-type: none;
}`;

export default function NavMenu() {
    const [open, setOpen]= useState(false);
    return (
        <>
            <HamburgerMenu
                className={'hamburger'}
                isOpen={open}
                menuClicked={()=>setOpen(!open)}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
            />
            {open?
                <StyledMobileMenu>
                    <StyledItems><StyledLink href="#">Stores</StyledLink></StyledItems>
                    <StyledItems><StyledLink href="#">Contact Us</StyledLink></StyledItems>
                </StyledMobileMenu>:null}
            <StyledDesktopMenu>
                <StyledItems><StyledLink href="#">Stores </StyledLink></StyledItems>
                <StyledItems><StyledLink href="#">Contact Us</StyledLink></StyledItems>
            </StyledDesktopMenu>
        </>
    );}