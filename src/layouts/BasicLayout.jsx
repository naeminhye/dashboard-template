import React, { Component } from 'react';
import { VerticalSidebar } from '../components/sidebars';
import SearchBox from '../components/searchbox'
import {
    Icon,
    Menu,
    Button,
    Header,
    Segment,
    Sidebar,
    Search
} from 'semantic-ui-react'
import { 
    GlobalStyles, 
    Background, 
} from '../assets/styles'

import { Link } from 'react-router-dom';

class BasicLayout extends Component {

    state = {
        animation: 'push',
        direction: 'left',
        visible: false,
        activeItem: 'home'
    }

    handleAnimationChange = animation => () => {
        console.log("animation changed")
        this.setState(prevState => ({ animation, visible: !prevState.visible }));
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem, animation, direction, visible } = this.state
        const { children } = this.props

        const menus = [
            {
                name: 'home',
                icon: 'home',
                link: '/home'
            },
            {
                name: 'about',
                icon: 'about',
                link: '/about'
            },
        //     {
        //       name: 'form',
        //       icon: 'checkmark box',
        //       submenus: [
        //         { name: 'input' },
        //         { name: 'range-picker' }
        //       ]
        //     },
        //     {
        //       name: 'dropdown',
        //       icon: 'sitemap',
        //     },
        //     {
        //       name: 'calendar',
        //       icon: 'calendar check',
        //     },
        //     {
        //       name: 'layout',
        //       icon: 'grid layout',
        //     },
        //     {
        //       name: 'chart',
        //       icon: 'bar chart',
        //     }
          ];

    
        return (
            <Background>
                <GlobalStyles />
                
                <Menu pointing secondary vertical size='massive'>
                    {menus.map(item => {
                        return (
                            <Menu.Item 
                                key={item.name}
                                as={Link} to={item.link} 
                                name={item.name} 
                                active={activeItem === item.name} 
                                onClick={this.handleItemClick} />
                        )
                    })}
                        {/* <Menu.Item 
                            as={Link} to={'/home'} 
                            name='home' 
                            active={activeItem === 'home'} 
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            as={Link} to={'/about'}
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        /> */}
                    </Menu>
                    <Segment basic>
                            <Menu attached="top">
                                <Menu.Item onClick={this.handleAnimationChange("push")} >
                                    <Icon name="sidebar" />Menu
                                </Menu.Item>
                                <SearchBox placeholder="Search ..." />

                            </Menu>
                            {/* <Button toggle animated='vertical' onClick={this.handleAnimationChange("push")}>
                                {this.state.visible ? <Button.Content hidden>
                                    <Icon name='arrow left' />
                                </Button.Content> : <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>}
                                
                                <Button.Content visible>
                                    <Icon name='sidebar' />
                                </Button.Content>
                            </Button> */}

                            {children}
                           
                        </Segment>
                {/* <Sidebar.Pushable>
                    <VerticalSidebar animation={animation} direction={direction} visible={visible}>
                        
                    </VerticalSidebar>

                    <Sidebar.Pusher>
                        
                    </Sidebar.Pusher>
                </Sidebar.Pushable> */}
            </Background>
        )
    }
};

export default BasicLayout