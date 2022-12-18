import React, { useState } from 'react';
import {
   AppBar,
   Button,
   MenuList,
   MenuListItem,
   Separator,
   Handle,
   TextInput,
   Toolbar
} from 'react95';

//add in icons - then justifyContent changes

export default function Navigation(props) {
   const [open, setOpen] = useState(false);

   return (
      <AppBar style={{ position: 'fixed', top: '92%', bottom: 1 }}>
         <Toolbar style={{ justifyContent: 'space-between', position: 'relative', top: '10%' }}>
            <div style={{ display: 'inline-block', position: 'static' }}>

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
                        padding: '0.6em'
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
            </div>

            <div style={{ width: 300 }}>
               <TextInput placeholder='search...' fullWidth={true} />
            </div>

         </Toolbar>
      </AppBar>
   );
}