import React from 'react'
import {
  Menu,
  Sidebar,
} from 'semantic-ui-react';
import styled from "styled-components";
// import { StyledSidebar } from '../../assets/styles';

const StyledSidebar = styled(Sidebar)` 
  box-shadow: none;
  /* visibility: ${props => props.visible}; */
`

const VerticalSidebar = ({ animation, direction, visible, children }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    vertical
    visible={visible}
    width="wide"
  >
    {children}
  </Sidebar>
)

export default VerticalSidebar;