import styled, { createGlobalStyle } from "styled-components";
import {
  Sidebar,
  Input,
  MenuItem
} from 'semantic-ui-react'

import {
  EuiHeader,
  EuiPage
} from '@elastic/eui';

/* M PLUS Rounded 1c */
import RoundedMplus1c from '../fonts/RoundedMplus1c/RoundedMplus1c-Regular.ttf'

import { Drawer } from '../../components/sidebars'

export const GlobalStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');
  html {
    color: red;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
`

export const SidebarPusher = styled(Sidebar.Pusher) `

`

export const ContentContainer = styled.div `
  margin: 40px;
`

export const ContentHeader = styled.h2 `
`
export const Paragraph = styled.p `
  font-size: 16px;
`
//
// @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');
// font-family: 'M PLUS Rounded 1c', sans-serif;

export const Background = styled(EuiPage)`
  min-height: 100%;
  background-image: linear-gradient(to right, #f9afd9, #e9ace0, #d6abe5, #c1aae9, #a9a9ea, #99b0ed, #8ab6ec, #7fbbe9, #86c7e7, #95d2e4, #a9dce2, #bfe5e3);
`

export const Button = styled.button`
  /* ... */
`

export const StyledSidebar = styled(Sidebar)` 
  box-shadow: none;
`

export const Search = styled(Input)`
  min-width: 500px;
  /* background-color: #F6F6F6;
  :hover {
    cursor: pointer;
    border-color: red;
  } */
`

// export const StyledMenuItem = styled(MenuItem) `
//   width: inherit;
//   font-size: 20px;
// `

export const StyledHeader = styled(EuiHeader) `
box-shadow: none;
background: none;
border-bottom: none;
`

export const MenuContainer = styled.div`
  /* padding: 20px; */
`