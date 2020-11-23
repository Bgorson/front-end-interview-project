import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family:sofia-pro;
}
body {
    font-family: sans-serif;
    font-size: 16px;
    height:100%;
}
.content{
    width:50%;
    margin:auto;
}
.loadingContainer{
  position: fixed;
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  top: 0;
}
.spinner{
  display: flex;
  margin: 0 auto;
}

@media (max-width: 800px) {
    .content {
      width:90%;
    }
  }
`;

export default GlobalStyles;
