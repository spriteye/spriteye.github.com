import { margin } from 'polished'
import { createGlobalStyle } from 'styled-components'
import modernNormalize from 'styled-modern-normalize'

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);

  ${modernNormalize}

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
  }

  p {
    ${margin(0, 0, '1em', 0)}
    padding: 0;
  }
`

export default GlobalStyle
