import React, { useState, useEffect } from 'react';
import {
   AppBar,
   Button,
   MenuList,
   MenuListItem,
   Separator,
   Handle,
   Frame,
   TextInput,
   Toolbar
} from 'react95';
import styled from 'styled-components';

import computer from '../images/computer.png';
import internetExplorer from '../images/internet explorer.png';
import globe from '../images/globe.png'
import cpu from '../images/compbody.png'
import camera from '../images/camera.png'

//add in icons - then justifyContent changes

export default function Navigation(props) {
   const [open, setOpen] = useState(false);
   const [dateState, setDateState] = useState(new Date());
   const date = new Date();

   useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
   }, []);

   return (
      <AppBar style={{ position: 'fixed', top: '92%', bottom: 1 }}>
         {/* Toolbar: start button and search
            AppBar: the bar itself */}
         <Toolbar style={{ justifyContent: 'left', position: 'relative', top: '7%' }}>
            <span style={{ display: 'inline-block', marginRight: 10, position: 'relative' }}>

               <Button //for the start button
                  onClick={() => setOpen(!open)}
                  active={open}
                  style={{ fontWeight: 'bold' }}
               >
                  {/* <img //add src={} later
              			alt='react95 logo'
              			style={{ height: '20px', marginRight: 4 }}
            			/> */}
                  Start
               </Button>

               {open && (
                  <MenuList
                     style={{
                        position: 'absolute',
                        left: 0,
                        bottom: '100%',
                        padding: '0.2em'
                     }}
                     onClick={() => setOpen(false)}
                  >
                     <MenuListItem>
                        <span role='img' aria-label='👨‍💻'>
                           👨‍💻
                        </span>
                        <div style={{ padding: '10px' }}> Profile </div>
                     </MenuListItem>
                     <MenuListItem>
                        <span role='img' aria-label='📁'>
                           📁
                        </span>
                        <div style={{ padding: '10px' }}> Account </div>
                     </MenuListItem>
                     <Separator />
                     <MenuListItem disabled>
                        <span role='img' aria-label='🔙'>
                           🔙
                        </span>
                        Logout
                     </MenuListItem>
                  </MenuList>
               )}

            </span>

            <span style={{ width: 300, marginRight: '15px' }}>
               <TextInput placeholder='search...' fullWidth={true} />
            </span>

            {/*clean this up*/}
            <span style={{ display: 'inline-block', alignContent:'center' }}>
               <Separator style={{ display: 'inline-block', marginRight: '5px' }} orientation='vertical' size='30px' />
               <Button square variant='thin' style={{marginRight:'10px'}}>
                  <img src={computer} style={{ width: '27px', height: '27px', display: 'inline-block' }}></img>
               </Button>
               <Button square variant='thin' style={{marginRight:'10px'}}>
                  <img src={internetExplorer} style={{ width: '27px', height: '27px', display: 'inline-block' }}></img>
               </Button>
               <Button square variant='thin' style={{marginRight:'10px'}}>
                  <img src={globe} style={{ width: '27px', height: '27px', display: 'inline-block' }}></img>
               </Button>
               <Button square variant='thin' style={{marginRight:'10px'}}>
                  <img src={cpu} style={{ width: '27px', height: '27px', display: 'inline-block' }}></img>
               </Button>
               <Separator style={{ display: 'inline-block', marginRight: '5px' }} orientation='vertical' size='30px' />
            </span>

            <span style={{ position: "absolute", bottom: 1, right: '2%', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
               <p style={{ fontSize: 15, height: 0 }}>
                  {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
               </p>
               <p style={{ fontSize: 13, height: 0, padding: '0rem 0.25rem' }}>
                  {dateState.toLocaleDateString('en-US', {
                     month: 'short',
                     day: 'numeric',
                     year: 'numeric',
                  })}
               </p>
            </span>


         </Toolbar>
      </AppBar>
   );
}
