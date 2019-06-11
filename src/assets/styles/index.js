import styled, { createGlobalStyle } from "styled-components";
import {
  Sidebar,
  Input,
} from 'semantic-ui-react'

/* M PLUS Rounded 1c */
import RoundedMplus1c from '../fonts/RoundedMplus1c/RoundedMplus1c-Regular.ttf'

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

export const Background = styled.div`
  height: 100%;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
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