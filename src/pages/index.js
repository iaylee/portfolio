import React from 'react';
import { styleReset } from 'react95'; //MenuList, MenuListItem, Separator, 
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Navigation from '../components/navigation';

/* Pick a theme of your choice */
import lilac from 'react95/dist/themes/lilac';

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

// Style reset clears default browser HTML element formatting and so removes inconsistencies
const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, * {
    font-family: 'ms_sans_serif';
  }
`;


const App = () => (
  <main> 
    <GlobalStyles />
    <ThemeProvider theme={lilac}>
        <Navigation />
      <h1> PROTOTYPE 0.0.1 </h1>
      {/* <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList> */}
    </ThemeProvider>
  </main>
);

export default App;
