import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import {
   Button,
   Toolbar,
   Window,
   WindowContent,
   ScrollView,
   WindowHeader
} from 'react95';


import sunset from "../images/sunset.png"

//implement closing window when clicked X button
const Wrapper = styled.div`
  .window-title {
    display: flex;
    align-items: center;
   justify-content: space-between;
    height: 25px;
  }
  .close-icon {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 0.2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }

  .inside-window {
    background-color: #D8D6F1;
  }
`;

//Props: title, toolbar, [first, second, third]
export default function WindowComponent(props) {

   return (
      <Wrapper>
         <Draggable handle=".handle">

            <Window className='window'>

               <WindowHeader className='window-title handle'>
               <span className='window-title' style={{justifyContent:'left'}}>
                     <img src={props.icon} style={{ width: '15px', height: '15px', paddingRight: '0.5rem' }} />
                     <span style={{ display: 'inline-block', fontSize: 12 }}>
                        {props.title}
                     </span>

               </span>

               <Button style={{width:'18px', height:'18px'}}>
                     <span className='close-icon' />
                  </Button>
               </WindowHeader>


               {props.toolbar && (<Toolbar style={{ height: '20px' }}>
                  <Button variant='menu' size='sm' style={{ fontSize: 14 }}>
                     {props.first}
                  </Button>
                  <Button variant='menu' size='sm' style={{ fontSize: 14 }}>
                     {props.second}
                  </Button>
                  <Button variant='menu' size='sm' style={{ fontSize: 14 }} disabled>
                     {props.third}
                  </Button>
               </Toolbar>)}

            <img src={sunset} style={{ width: '350px', height: '200px'}}/>
            </Window>

         </Draggable>
      </Wrapper>
   );
   }