import React from 'react'
import { SideNavigation, MenuSection, NavMenuItem, Icon } from '@momentum-design/components/react'
import './sidenav.css';

interface SideNavProps {
  isSideNavCollapsed: boolean;
  setIsSideNavCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

// there is currently a bug where the SideNavigation component doesn't have a callback which listens for the toggle event
// of the divider button. Once fixed, we want to connect the setIsSideNavCollapsed prop to the toggle event
// so that the state of the sidenav can be controlled from the parent component.
const SideNav: React.FC<SideNavProps>= ({isSideNavCollapsed}: SideNavProps) => {
    return (
        <>
            <SideNavigation expanded={isSideNavCollapsed} variant="flexible" footerText="Customer Name" grabberBtnAriaLabel="Toggle Side navigation" parentNavTooltipText="Contains active navmenuitem" className="sidenav">
                <MenuSection slot="scrollable-menubar" showDivider>
                    <NavMenuItem iconName="placeholder-regular" navId="1" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="2" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="3" label="Label"></NavMenuItem>
                </MenuSection>
                <MenuSection slot="scrollable-menubar" showDivider headerText="Section name">
                    <NavMenuItem iconName="placeholder-regular" navId="6" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="7" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="8" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="9" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="10" label="Label"></NavMenuItem>
                </MenuSection>
                <MenuSection slot="scrollable-menubar" headerText="Section name">
                    <NavMenuItem iconName="placeholder-regular" navId="11" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="12" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="13" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="14" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="15" label="Label"></NavMenuItem>
                </MenuSection>
                <MenuSection slot="fixed-menubar" >
                    <NavMenuItem iconName="placeholder-regular" navId="21" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="22" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="23" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="24" label="Label"></NavMenuItem>
                    <NavMenuItem iconName="placeholder-regular" navId="25" label="Label"></NavMenuItem>
                </MenuSection>
                <Icon slot="brand-logo" name="apple-bold"></Icon>
            </SideNavigation>
        </>
    );
};

export default SideNav;