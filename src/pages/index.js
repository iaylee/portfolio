import React, {useState} from 'react';
import { styleReset } from 'react95'; //MenuList, MenuListItem, Separator, 
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import WindowComponent from '../components/WindowComponent';

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

const App = () => (

   <body>
		<GlobalStyles />
		<ThemeProvider theme={lilac}>
			<header>
			</header>


			<main>
				<WindowComponent
					title="About" 
					toolbar="true" 
					first="File" 
					second="Edit"
					third="Save"
				/>
				{/* <MenuList>
				<MenuListItem>🎤 Sing</MenuListItem>
				<MenuListItem>💃🏻 Dance</MenuListItem>
				<Separator />
				<MenuListItem disabled>😴 Sleep</MenuListItem>
				</MenuList> */}

			</main>


			<footer>
				<Navigation />
			</footer>

		</ThemeProvider>
	</body>

   );

export default App;
