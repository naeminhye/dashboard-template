import styled,{ createGlobalStyle } from "styled-components";
import {
  Sidebar,
  Input
} from 'semantic-ui-react'

/* M PLUS Rounded 1c */
export const GlobalStyles = createGlobalStyle`
  html {
    color: red;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
`

export const Button = styled.button`
  /* ... */
`

export const StyledSidebar = styled.div` 
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