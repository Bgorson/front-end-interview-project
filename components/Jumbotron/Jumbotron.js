import Image from 'next/image';
import styled from 'styled-components';

const StyledJumbotron =styled.div `{
    display:flex;
    justify-content:space-between;
    flex-wrap:no-wrap;
    margin:1rem auto;
    @media (max-width: 600px) {
          display:block;
          width:100%;
          margin-top:0;
        }
}`;

const StyledJumboImage =styled.span `{
    max-width: 100%;
    height: auto;
    margin-right:5rem;
    @media (max-width: 600px) {
            display: block;
            margin:0;
            width:100%;
        }
}`;

const StyledJumboText =styled.div `{
    flex:1;
    margin:auto;
    width:90%;
}`;

export default function Jumbotron({aisleTitle}) {

    return (
        <StyledJumbotron>
            <StyledJumboImage>
                <Image className= {'mainImage'} src="/background.png" alt="wine" height="200" width="400"/>
            </StyledJumboImage>
            <StyledJumboText>
                <h1>{aisleTitle} Aisle</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temre et dolierunt mollit anim id est laborum.</p>
            </StyledJumboText>
        </StyledJumbotron>
    );
}