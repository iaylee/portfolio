import React, { useState } from 'react';
import { styleReset } from 'react95'; //MenuList, MenuListItem, Separator, 
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import WindowComponent from '../components/WindowComponent';

import cdMusic from "../images/cd music.png"
import notepad from "../images/notepad.png"
import folder from "../images/folder.png"
import trash from "../images/trash.png"
import desk from "../images/desk.png"
import palette from "../images/palette.png"
/* Pick a theme of your choice */
import lilac from 'react95/dist/themes/lilac';

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

// Style reset clears default browser HTML element formatting and so removes inconsistencies
const GlobalStyles = createGlobalStyle`
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
  body {
    font-family: 'ms_sans_serif';
    background-color: #452859;
	color: white;
  }
`;

const Desktop = styled.div`
display: inline-flex;
`;

const IconSection = styled.div`
display: inline-flex;
flex-direction: column;
 align-items: center;  
 padding: 0.1rem 0.6rem;
`;

const Icon = styled.span`
   display: inline-flex;
   flex-direction: column;
    align-items: center;  
    padding: 1em;
`;

const App = () => (

   <body>
      <GlobalStyles />
      <ThemeProvider theme={lilac}>
         <header>
         </header>


         <main>
            <Desktop>
               <IconSection>
                  <Icon>
                     <a href='https://github.com/iaylee'>
                        <img src={cdMusic} style={{ width: '60px', height: '60px', display: 'inline-block' }}></img>
                     </a>
                     <p>
                        Music
                     </p>
                  </Icon>

                  <Icon>
                     <a href='https://github.com/iaylee'>
                        <img src={notepad} style={{ width: '60px', height: '60px', display: 'inline-block' }}></img>
                     </a>
                     <p>
                        Notes
                     </p>
                  </Icon>


                  <Icon>
                     <a href='https://github.com/iaylee'>
                        <img src={trash} style={{ width: '60px', height: '60px', display: 'inline-block' }}></img>
                     </a>
                     <p>
                        Recycle
                     </p>
                  </Icon>

                  <Icon>
                     <a href='https://github.com/iaylee'>
                        <img src={palette} style={{ width: '60px', height: '60px', display: 'inline-block' }}></img>
                     </a>
                     <p>
                        Palette
                     </p>
                  </Icon>
               </IconSection>

               <IconSection>
                  <Icon>
                     <a href='https://github.com/iaylee'>
                        <img src={desk} style={{ width: '60px', height: '60px', display: 'inline-block' }}></img>
                     </a>
                     <p>
                        Desk
                     </p>
                  </Icon>

                  <Icon>
                     <a href='https://github.com/iaylee'>
                        <img src={folder} style={{ width: '60px', height: '60px', display: 'inline-block' }}></img>
                     </a>
                     <p>
                        Folder
                     </p>
                  </Icon>
               </IconSection>


               {/* have a welcome window open when users enter the 
               page to explain the icons or provide short links */}
               <WindowComponent
                  title="About"
                  toolbar="true"
                  first="File"
                  second="Edit"
                  third="Save"
                  content="I might write something here, or not, we'll see."

               />

            </Desktop>
         </main>


         <footer>
            <Navigation />
         </footer>

      </ThemeProvider>
   </body>

);

export default App;
