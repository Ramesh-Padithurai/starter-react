import React from 'react'
import { Avatar, Appheader, Button, Brandvisual, Searchfield, Divider, Badge } from '@momentum-design/components/react'
import './header.css';

interface HeaderProps {
  setIsSideNavCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({setIsSideNavCollapsed}: HeaderProps) => {

  const handleSideNavToggle = () => {
    setIsSideNavCollapsed((prevState: boolean) => !prevState);
  };  

  return (
    <>
      <Appheader className="header">
        <div slot="leading" className="leadingSlot">
          <Button variant="tertiary" size={32} prefixIcon="list-menu-bold" aria-label="icon button" onClick={handleSideNavToggle}></Button>
          <Brandvisual name="momentum-design-logo-dark-bw-horizontal" className='brandLogo'></Brandvisual>
        </div>
        <div slot="center">
          <Searchfield className="searchfield" placeholder='Search'></Searchfield>
        </div>
        <div slot="trailing" className="trailingSlot">
          <Button variant="tertiary" size={32} aria-label="assistant icon button" className="assistantButton">
            <Brandvisual slot="prefix" name="cisco-ai-assistant-color-gradient"></Brandvisual>
          </Button>
          <Divider orientation='vertical' variant='gradient'></Divider>
          <Button variant="tertiary" size={32} prefixIcon="server-bold" aria-label="server icon button"></Button>
          <Button variant="tertiary" size={32} prefixIcon="announcement-bold" aria-label="announcement icon button"></Button>
          <Button variant="tertiary" size={32} prefixIcon="help-circle-bold" aria-label="help icon button"></Button>
          <div className="badgeButtonWrapper">
            <Button variant="tertiary" size={32} prefixIcon="alert-bold" aria-label="alert icon button"></Button>
            <Badge counter={1} className="badge" aria-label="1 new notification" type='counter'></Badge>
          </div>
          <Divider orientation='vertical' variant='gradient'></Divider>
          <Button variant="tertiary" size={32} prefixIcon="waffle-menu-bold" aria-label="waffle icon button"></Button>
          <Avatar size={32} src="https://picsum.photos/id/8/5000/3333"></Avatar>
        </div>
      </Appheader>
    </>
  );
};

export default Header;