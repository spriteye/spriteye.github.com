import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);

  ${styledNormalize}

  body {
    color: ${({ theme }) => theme.color};
    font-weight: 300;
    font-size: 17px;
    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;
    line-height: 1.5;
    word-break: keep-all;

    background-color: ${({ theme }) => theme.bg};

    transition: ${({ theme }) => theme.themeTransition};
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;

    cursor: pointer;
  }
`

export default GlobalStyle
