import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

  *, *::before, *::after {
  box-sizing: border-box;
}

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  html, body {
  height: 100%;
}

  button {
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

ol, ul {
	list-style: none;
}
`