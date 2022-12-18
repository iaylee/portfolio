import React, { useState } from 'react';
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

//implement closing window when clicked X button
const Wrapper = styled.div`
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
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
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }

  .inside-window {
    background-color: white;
  }
`;

//Props: title, toolbar, [first, second, third]
export default function WindowComponent(props) {

	return (
      <Wrapper>
      <Draggable handle=".handle" defaultPosition={{x: 500, y: 50}}>

			<Window resizable className='window'>

				<WindowHeader className='window-title handle'>
					<span>{props.title}</span>

					<Button>
						<span className='close-icon' />
					</Button>

				</WindowHeader>


				{props.toolbar && (<Toolbar>
					<Button variant='menu' size='sm'>
						{props.first}
					</Button>
					<Button variant='menu' size='sm'>
						{props.second}
					</Button>
					<Button variant='menu' size='sm' disabled>
						{props.third}
					</Button>
				</Toolbar>)}


				<WindowContent>
					<ScrollView className='inside-window' style={{ width: '100%' }}>
						<p>
							When you set &quot;resizable&quot; prop, there will be drag handle
							in the bottom right corner (but resizing itself must be handled by
							you tho!)

							When you set &quot;resizable&quot; prop, there will be drag handle
							in the bottom right corner (but resizing itself must be handled by
							you tho!)

							When you set &quot;resizable&quot; prop, there will be drag handle
							in the bottom right corner (but resizing itself must be handled by
							you tho!)

							When you set &quot;resizable&quot; prop, there will be drag handle
							in the bottom right corner (but resizing itself must be handled by
							you tho!)
						</p>
					</ScrollView>
				</WindowContent>

			</Window>
         
      </Draggable>
		</Wrapper>
	);
}