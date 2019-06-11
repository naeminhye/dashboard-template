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

        return (
            <div className="full-height">
                <Sidebar.Pushable>
                    <Menu pointing secondary vertical>
                            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                            <Menu.Item
                            name='messages'
                            active={activeItem === 'messages'}
                            onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={this.handleItemClick}
                            />
                        </Menu>
                    {/* <VerticalSidebar animation={animation} direction={direction} visible={visible}>
                        
                            <Menu.Item as='a'>
                                <Icon name='home' />
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='gamepad' />
                                Games
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='camera' />
                                Channels
                            </Menu.Item>
                    </VerticalSidebar> */}

                    <Sidebar.Pusher>
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
                            <Header as='h3'>Content</Header>
                            <div>

                            </div>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
};

export default BasicLayout