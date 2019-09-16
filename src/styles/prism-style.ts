import { css } from 'styled-components'
import { margin, rgba } from 'polished'

import color from '~styles/color'

const syntax = {
  bg: color.nord0,
  color: color.nord4,
  cursorLine: rgba(color.nord2, 0.32),
  selectionColor: rgba(color.nord2, 0.80)
}

const visual = {
  marginSize: '-1.5rem',
  borderRadius: '.4em'
}

const prismStyle = css`
  .gatsby-highlight {
    ${margin(0, visual.marginSize, '1.5rem', visual.marginSize)}

    color: ${syntax.color};
    font-size: 0.8em;

    background: ${syntax.bg};

    border: 1px solid ${color.nord5};
    border-radius: ${visual.borderRadius};

    pre {
      ${margin(0)}
      overflow: scroll;

      code {
        display: block;
        padding: 1em 1.5em .5em;

        line-height: 1.5;
      }
    }

    pre::-webkit-scrollbar {
      width: 0;
      height: .5rem;
    }

    pre::-webkit-scrollbar-thumb {
      background: ${color.nord3};
      border-radius: ${visual.borderRadius};
    }

    pre::-webkit-scrollbar-track {
      background: ${color.nord0};
      border-radius: ${visual.borderRadius};
    }
  }

  .gatsby-code-title {
    ${margin(0, visual.marginSize, 0, visual.marginSize)}
    padding: 1em 1.5em;

    color: ${syntax.color};
    font-size: 0.85em;

    background: ${syntax.bg};
    border: 1px solid ${color.nord5};
    border-radius: ${visual.borderRadius} ${visual.borderRadius} 0 0;

    + .gatsby-highlight {
      border-top-style: none;
      border-radius: 0 0 ${visual.borderRadius} ${visual.borderRadius};
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    padding: .5em 0em;
  }

  code[class="language-text"] {
    padding: .2em .4em;

    color: ${color.nord0};
    font-size: 0.85em;

    background: ${color.nord5};
    border-radius: .3em;
  }

  .gatsby-highlight-code-line {
    display: block;
    ${margin(0, '-1.5em', 0, '-1.5em')}
    padding-right: 1em;
    padding-left: 0.75em;

    background-color: ${syntax.selectionColor};
    border-left: 0.3em solid ${color.nord11};
  }

  .token.keyword,
  .token.punctuation {
    color: ${color.nord9};
  }

  .token.comment {
    color: ${color.nord3Brightened};
    font-weight: 500;
  }

  .token.string {
    color: ${color.nord14};
  }

  .token.function {
    color: ${color.nord8};
  }

  .token.tag {
    color: ${color.nord7};
  }

  .token.number {
    color: ${color.nord15}
  }
`

export default prismStyle
