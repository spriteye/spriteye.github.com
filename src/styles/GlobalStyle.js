import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

export default createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);

  ${styledNormalize}

  body {
    transition: ${({ theme  }) => theme.themeTransition};

    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};

    font-family: 'Spoqa Han Sans', 'Nanum Gothic';
    font-weight: 300;
    font-size: 17px;
    word-break: keep-all;
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme.color};

    text-decoration: none;

    cursor: pointer;
  }
`
