import React from 'react'
import {
  Menu,
  Sidebar,
} from 'semantic-ui-react';

const VerticalSidebar = ({ animation, direction, visible, children }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    vertical
    visible={visible}
    width='thin'
  >
    {children}
  </Sidebar>
)

export default VerticalSidebar;