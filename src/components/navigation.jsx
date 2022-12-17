import React, { useState } from 'react';
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar
} from 'react95';

import styled from 'styled-components';

const Wrapper = styled.section`
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar style={{ position: 'fixed', top: '92%', bottom: 0 }}>
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

        <div> 
          <TextInput placeholder='search...' width={150} />
        </div>

      </Toolbar>
    </AppBar>
  );
}