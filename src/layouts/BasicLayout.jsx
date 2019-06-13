import React, { Component } from 'react';

import {
    // EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiImage,
    EuiNavDrawerGroup,
    EuiNavDrawer,
    EuiHorizontalRule,
    EuiPageContentHeader,
    EuiTitle,
    EuiPageContentHeaderSection,
    EuiPageSideBar,
    EuiShowFor,
    EuiHideFor,
    EuiHeader,
    EuiHeaderBreadcrumbs,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiHeaderSectionItemButton,
    EuiHeaderLogo,
    EuiIcon,
    EuiPopover, EuiButton,
    EuiKeyPadMenu,
    EuiKeyPadMenuItem,
} from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_light.css';

import SearchBox from '../components/searchbox'
import {
    Icon,
    Menu,
    Segment,
    Grid
} from 'semantic-ui-react';
import { Drawer } from '../components/sidebars'
import {
    GlobalStyles,
    Background,
    StyledHeader
} from '../assets/styles';

import { Link } from 'react-router-dom';

class BasicLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawer: false,
            isPopoverOpen: false,
        }
        const faveExtraAction = {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
        };

        const pinExtraAction = {
            color: 'subdued',
            iconType: 'pin',
            iconSize: 's',
            'aria-label': 'Pin to top',
        };
        this.topLinks = [
            {
                label: 'Recently viewed',
                iconType: 'clock',
                flyoutMenu: {
                    title: 'Recent items',
                    listItems: [
                        {
                            label: 'My dashboard',
                            href: '/#/layout/nav-drawer',
                            iconType: 'dashboardApp',
                            extraAction: faveExtraAction,
                        },
                        {
                            label: 'Workpad with title that wraps',
                            href: '/#/layout/nav-drawer',
                            iconType: 'canvasApp',
                            extraAction: faveExtraAction,
                        },
                        {
                            label: 'My logs',
                            href: '/#/layout/nav-drawer',
                            iconType: 'loggingApp',
                            'aria-label': 'This is an alternate aria-label',
                            extraAction: faveExtraAction,
                        },
                    ],
                },
            },
            {
                label: 'Favorites',
                iconType: 'starEmpty',
                flyoutMenu: {
                    title: 'Favorite items',
                    listItems: [
                        {
                            label: 'My workpad',
                            href: '/#/layout/nav-drawer',
                            iconType: 'canvasApp',
                            extraAction: {
                                color: 'subdued',
                                iconType: 'starFilled',
                                iconSize: 's',
                                'aria-label': 'Remove from favorites',
                                alwaysShow: true,
                            },
                        },
                        {
                            label: 'My logs',
                            href: '/#/layout/nav-drawer',
                            iconType: 'loggingApp',
                            extraAction: {
                                color: 'subdued',
                                iconType: 'starFilled',
                                iconSize: 's',
                                'aria-label': 'Remove from favorites',
                                alwaysShow: true,
                            },
                        },
                    ],
                },
            },
        ];

        this.exploreLinks = [
            {
                label: 'Canvas',
                href: '/#/layout/nav-drawer',
                iconType: 'canvasApp',
                isActive: true,
                extraAction: {
                    ...pinExtraAction,
                    alwaysShow: true,
                },
            },
            {
                label: 'Discover',
                href: '/#/layout/nav-drawer',
                iconType: 'discoverApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Visualize',
                href: '/#/layout/nav-drawer',
                iconType: 'visualizeApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Dashboard',
                href: '/#/layout/nav-drawer',
                iconType: 'dashboardApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Machine learning',
                href: '/#/layout/nav-drawer',
                iconType: 'machineLearningApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Custom Plugin (no icon)',
                href: '/#/layout/nav-drawer',
                extraAction: pinExtraAction,
            },
            {
                label: 'Nature Plugin (image as icon)',
                href: '/#/layout/nav-drawer',
                extraAction: pinExtraAction,
                icon: (
                    <EuiImage
                        size="s"
                        alt="Random nature image"
                        url="https://source.unsplash.com/300x300/?Nature"
                    />
                ),
            },
        ];

        this.solutionsLinks = [
            {
                label: 'APM',
                href: '/#/layout/nav-drawer',
                iconType: 'apmApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Infrastructure',
                href: '/#/layout/nav-drawer',
                iconType: 'infraApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Log viewer',
                href: '/#/layout/nav-drawer',
                iconType: 'loggingApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Uptime',
                href: '/#/layout/nav-drawer',
                iconType: 'upgradeAssistantApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'Maps',
                href: '/#/layout/nav-drawer',
                iconType: 'gisApp',
                extraAction: pinExtraAction,
            },
            {
                label: 'SIEM',
                href: '/#/layout/nav-drawer',
                iconType: 'securityAnalyticsApp',
                extraAction: pinExtraAction,
            },
        ];

        this.adminLinks = [
            {
                label: 'Admin',
                iconType: 'managementApp',
                flyoutMenu: {
                    title: 'Tools and settings',
                    listItems: [
                        {
                            label: 'Dev tools',
                            href: '/#/layout/nav-drawer',
                            iconType: 'devToolsApp',
                            extraAction: {
                                color: 'subdued',
                                iconType: 'starEmpty',
                                iconSize: 's',
                                'aria-label': 'Add to favorites',
                            },
                        },
                        {
                            label: 'Stack Monitoring',
                            href: '/#/layout/nav-drawer',
                            iconType: 'monitoringApp',
                            extraAction: {
                                color: 'subdued',
                                iconType: 'starEmpty',
                                iconSize: 's',
                                'aria-label': 'Add to favorites',
                            },
                        },
                        {
                            label: 'Stack Management',
                            href: '/#/layout/nav-drawer',
                            iconType: 'managementApp',
                            extraAction: {
                                color: 'subdued',
                                iconType: 'starEmpty',
                                iconSize: 's',
                                'aria-label': 'Add to favorites',
                            },
                        },
                    ],
                },
            },
        ];
    }

    handleAnimationChange = animation => () => {
        console.log("animation changed")
    }

    setNavDrawerRef = ref => (this.navDrawerRef = ref);

    renderBreadcrumbs() {
        const breadcrumbs = [
            {
                text: 'Management',
                href: '#',
                onClick: e => {
                    e.preventDefault();
                    console.log('You clicked management');
                },
                'data-test-subj': 'breadcrumbsAnimals',
                className: 'customClass',
            },
            {
                text: 'Truncation test is here for a really long item',
                href: '#',
                onClick: e => {
                    e.preventDefault();
                    console.log('You clicked truncation test');
                },
            },
            {
                text: 'hidden',
                href: '#',
                onClick: e => {
                    e.preventDefault();
                    console.log('You clicked hidden');
                },
            },
            {
                text: 'Users',
                href: '#',
                onClick: e => {
                    e.preventDefault();
                    console.log('You clicked users');
                },
            },
            {
                text: 'Create',
            },
        ];

        return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
    }

    renderSearch() {
        return (
            <EuiHeaderSectionItemButton aria-label="Search">
                <EuiIcon type="search" size="m" />
            </EuiHeaderSectionItemButton>
        );
    }


    onButtonClick() {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }

    closePopover() {
        this.setState({
            isPopoverOpen: false,
        });
    }

    render() {
        const { drawer } = this.state
        const { children } = this.props

        const menus = [
            {
                name: 'home',
                icon: 'home',
                link: '/home'
            },
            {
                name: 'about',
                icon: 'info circle',
                link: '/about',
                submenus: [
                    { name: 'input' },
                    { name: 'range-picker' }
                ]
            }
        ];

        return (
            <Background>
                {/* <EuiPage> */}
                <GlobalStyles />
                    {/* <EuiNavDrawer ref={this.setNavDrawerRef}>
                            <EuiNavDrawerGroup listItems={this.topLinks} />
                            <EuiHorizontalRule margin="none" />
                            <EuiNavDrawerGroup listItems={this.exploreLinks} />
                            <EuiHorizontalRule margin="none" />
                            <EuiNavDrawerGroup listItems={this.solutionsLinks} />
                            <EuiHorizontalRule margin="none" />
                            <EuiNavDrawerGroup listItems={this.adminLinks} />
                        </EuiNavDrawer> */}

                    <EuiHideFor sizes={['xs', 's']}>
                        <EuiPageSideBar>
                            <Drawer drawer={drawer} data={menus} />
                        </EuiPageSideBar>
                    </EuiHideFor>
                    <EuiPageBody>

                        <StyledHeader>
                            {/* <EuiShowFor sizes={['xs', 's']}> */}
                            <EuiHeaderSection>
                                <EuiHeaderSectionItem border="none" >
                                    <EuiHeaderSectionItemButton aria-label="apps">
                                        <EuiIcon type="apps" size="m" />
                                    </EuiHeaderSectionItemButton>

                                </EuiHeaderSectionItem>
                            </EuiHeaderSection>
                            {/* </EuiShowFor> */}

                            {this.renderBreadcrumbs()}

                            <EuiHeaderSection side="right">
                                <EuiHeaderSectionItem border="none">{this.renderSearch()}</EuiHeaderSectionItem>
                                <EuiHeaderSectionItem border="none">
                                    <EuiPopover
                                        id="popover"
                                        button={(
                                            <EuiHeaderSectionItemButton aria-label="globe">
                                                <EuiIcon type="globe" size="m" onClick={this.onButtonClick.bind(this)} />
                                            </EuiHeaderSectionItemButton>)}
                                        isOpen={this.state.isPopoverOpen}
                                        closePopover={this.closePopover.bind(this)}>
                                        <EuiKeyPadMenu>
                                            <EuiKeyPadMenuItem label="Dashboard" href="#">
                                                <EuiIcon type="dashboardApp" size="l" />
                                            </EuiKeyPadMenuItem>

                                            <EuiKeyPadMenuItem
                                                label="Dashboard"
                                                href="#"
                                                betaBadgeLabel="Beta"
                                                betaBadgeTooltipContent="This module is not GA. Please help us by reporting any bugs.">
                                                <EuiIcon type="dashboardApp" size="l" />
                                            </EuiKeyPadMenuItem>

                                            <EuiKeyPadMenuItem
                                                label="Dashboard"
                                                href="#"
                                                betaBadgeLabel="Lab"
                                                betaBadgeTooltipContent="This module is not GA. Please help us by reporting any bugs."
                                                betaBadgeIconType="bolt">
                                                <EuiIcon type="dashboardApp" size="l" />
                                            </EuiKeyPadMenuItem>
                                        </EuiKeyPadMenu>
                                    </EuiPopover>
                                </EuiHeaderSectionItem>
                            </EuiHeaderSection>


                        </StyledHeader>
                        <EuiPageContentHeader>
                            <EuiPageContentHeaderSection>
                                <EuiTitle>
                                    <h2>Content title</h2>
                                </EuiTitle>
                            </EuiPageContentHeaderSection>
                            <EuiPageContentHeaderSection>
                                Content abilities
                            </EuiPageContentHeaderSection>
                        </EuiPageContentHeader>
                        {/* <Menu attached="top">
                                    <Menu.Item onClick={this.handleAnimationChange("push")} >
                                        <Icon name="sidebar" />Menu
                                </Menu.Item>
                                    <SearchBox placeholder="Search ..." />

                                </Menu> */}
                        {children}
                    </EuiPageBody>
                {/* </EuiPage> */}


            </Background>
        )
    }
};

export default BasicLayout