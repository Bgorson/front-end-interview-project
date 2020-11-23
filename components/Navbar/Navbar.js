import NavMenu from './NavMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
{
    background: #222;
    display:flex;
    justify-content:space-between;
    min-height: 2rem;
    align-items: center;
}
`;
const StyledLogo =styled.a`
{
    font-weight: 700;
    font-size:2rem;
    letter-spacing: .2rem;
    padding-right:10rem;
    margin:1rem;
    list-style-type: none;
    color: white;
    text-decoration: none;
    cursor:pointer;
}
:hover {
    opacity: 0.5;
  }
  @media (max-width: 600px) {
    padding-right: 0;
    :hover {
        opacity: 1;
      }
    }
`;

export const StyledLink = styled.a`{
        color: white;
        text-decoration: none;
}
   :hover {
        opacity: 0.5;
      }
      @media (max-width: 600px) {
       :hover {
            opacity: 1;
          }
      }
}`;

const StyledIcon =styled.li`{
        font-size: 20px;
        margin:1rem;
        list-style-type: none;
}`;



export default function Navbar() {
    return (
        <StyledNavBar>
            <NavMenu/>
            <StyledLogo href="#">Foxtrot</StyledLogo>
            <StyledIcon>
                <StyledLink href="#">
                    <FontAwesomeIcon color= {'white'} icon={faShoppingBag}></FontAwesomeIcon></StyledLink>
            </StyledIcon>
        </StyledNavBar>
        
    );
}
