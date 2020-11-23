import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
const StyledFooterContainer = styled.footer `{    
    background: #222; }`;

const StyledFooterList = styled.ul `{    
        display:flex;
        justify-content:center; }`;

const StyledFooterItem = styled.li `{     
        list-style-type: none;
        display:inline;
        margin:1rem;  }`;
const StyledIcon = styled.a `{     
        color: white;
        text-decoration: none;
        :hover {
        opacity: 0.5;
      }
    }`;


const links= [
    {
        src:'#',
        icon:  faLink  
    },
    {
        src:'#',
        icon:  faInstagram  
    },
    {
        src:'#',
        icon:  faTwitter  
    },
    {
        src:'#',
        icon:  faFacebook  
    },    {
        src:'#',
        icon:  faEnvelope  
    }
];
const Footer=()=> {
    return (
        <StyledFooterContainer>
            <StyledFooterList>
                {links.map((link,index)=>(
                    <StyledFooterItem key={index}>
                        <StyledIcon href={link.src}>
                            <FontAwesomeIcon color= {'white'} icon={link.icon}></FontAwesomeIcon></StyledIcon>
 
                    </StyledFooterItem>
                ))}
            </StyledFooterList>

            <StyledFooterList>
                <StyledFooterItem><StyledIcon href="#">Terms of Service</StyledIcon></StyledFooterItem>
                <StyledFooterItem><StyledIcon href="#">Privacy</StyledIcon></StyledFooterItem>
            </StyledFooterList>
        
        </StyledFooterContainer>
    );
};
export default Footer;