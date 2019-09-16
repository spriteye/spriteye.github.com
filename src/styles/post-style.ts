import { css } from 'styled-components'
import { lighten, margin, padding, rgba } from 'polished'

import color from '~styles/color'

const postStyle = css`
  h1, h2, h3, h4 {
    margin-top: 1.5em;
    margin-bottom: .5em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4 {
    margin-top: .5em;

    font-weight: bold;
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration-style: double;
    }
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: .5em;
    padding-left: 2em;

    p {
      margin: 0;
    }
  }

  blockquote {
    font-style: italic;

    background-color: ${({ theme }) => lighten(0.1, theme.bg)};
    border-left: 0.2em solid ${rgba(color.nord10, 0.6)};
    ${margin(0, '-1.5em', '1.5em', '-1.5em')}
    ${padding(0, 0, 0, '1.5em')}

    p {
      margin: 0;
      padding: 0;
    }
  }

  .footnotes {
    margin-top: 2em;

    font-size: .8em;

    hr {
      margin-left: 0;

      border: none;
      border-top: 1px dashed silver;
    }

    ol {
      padding-left: 1em;
    }
  }
`

export default postStyle
