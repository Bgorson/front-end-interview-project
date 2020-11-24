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
.mainImage{
  width:100%;
}
.itemPicture{
  width: auto;
  height: auto;
}
.hamburger{
  margin-top:1rem;
  margin-left:1rem;
}
@media (min-width: 600px) {
  .hamburger{
      display: none;
  }
}

.spinner{
  display: flex;
  margin: 0 auto;
}
`;

export default GlobalStyles;
