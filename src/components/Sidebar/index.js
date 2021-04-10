import React from 'react';
import { SidebarContainer, Icon,CloseIcon, SidebarMenu, SidebarLink, SideBarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"> Pizzas01 </SidebarLink>
                <SidebarLink to="/"> Pizzas02 </SidebarLink>
                <SidebarLink to="/"> Pizzas03 </SidebarLink>
                <SidebarLink to="/"> Pizzas04 </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/">Enviar</SideBarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
