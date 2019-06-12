import React, { Component } from 'react'
import {
    Menu,
    Icon
} from 'semantic-ui-react';
// drawer={drawer} 
import { Link } from 'react-router-dom';
import { MenuContainer } from '../../assets/styles';

export default class Drawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'home',
            drawer: this.props.drawer
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    // handleDrawer = (e, { drawerState }) => this.setState({ drawer: drawerState })

    render() {
        const { drawer, data } = this.props
        const { activeItem } = this.state
        return (
            <MenuContainer>
                <Menu pointing secondary vertical>
                    {data.map(item => {
                        return (
                            <Menu.Item
                                key={item.name}
                                as={Link} to={item.link}
                                name={item.name}
                                active={activeItem === item.name}
                                onClick={this.handleItemClick}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                <Icon name={item.icon} />
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </MenuContainer>
        );
    }
}