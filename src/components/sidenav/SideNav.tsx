import React, { useCallback } from 'react'
import { SideNavigation, MenuSection, NavMenuItem, Icon } from '@momentum-design/components/react'
import './sidenav.css';

interface SideNavProps {
    isSideNavExpanded: boolean;
    setIsSideNavExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNav: React.FC<SideNavProps> = ({ isSideNavExpanded, setIsSideNavExpanded }: SideNavProps) => {

    const handleSideNavToggle = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (e: any) => {
            const newToggleState = e.detail.expanded;
            setIsSideNavExpanded(newToggleState);
        }, [setIsSideNavExpanded],
    );

    return (
        <>
            <SideNavigation expanded={isSideNavExpanded} onToggle={handleSideNavToggle} variant="flexible" footerText="Customer Name" grabberBtnAriaLabel="Toggle Side navigation" parentNavTooltipText="Contains active navmenuitem" className="sidenav">
                <MenuSection slot="scrollable-menubar" showDivider>
                    <NavMenuItem iconName="home-bold" navId="1" label="Home"></NavMenuItem>
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