import styled, {keyframes} from 'styled-components';
const StyledMainElement = styled.div `{  
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}`;
const StyledErrorMessageContainer = styled.div `{  
    display: table-cell;
    vertical-align: middle;
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
}`;
const blink = keyframes`{
    from{box-shadow: inset -3px 0px 0px #888;}
    to{box-shadow: inset -3px 0px 0px transparent;}
}`;
const StyledErrorMessage = styled.h1 `{  
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: ${blink} .5s alternate infinite;
}`;

export default function Error({errorMessage}) {

    return (
        <StyledMainElement>
            <StyledErrorMessageContainer>
                <StyledErrorMessage>{errorMessage.message}</StyledErrorMessage>
            </StyledErrorMessageContainer>
        </StyledMainElement>
    );
}
