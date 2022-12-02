import React, { useState } from 'react';
import movieLogo from '../../assets/logo.png';

import { Outlet } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../assets/icon-menu.svg';
import { ReactComponent as Close } from '../../assets/icon-menu-close.svg';

import {
  Nav,
  LinkLogo,
  NavLink,
  LinkMenu,
  UnorderedLi,
  ListItem,
  IconWrapper,
} from './navigation.styles';
import Theme from '../../Theme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Theme>
        <Nav>
          <LinkLogo to='/' aria-label='logo-home-link'>
            <img src={movieLogo} alt='logo' />
          </LinkLogo>

          <LinkMenu isOpen={isOpen}>
            <UnorderedLi>
              <ListItem>
                <NavLink to='/'>Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/random'>Random</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/choose'>Choose</NavLink>
              </ListItem>
            </UnorderedLi>
          </LinkMenu>
          <IconWrapper
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}>
            {!isOpen ? <MenuIcon /> : <Close />}
          </IconWrapper>
        </Nav>
        <Outlet />
      </Theme>
    </>
  );
};

export default Navigation;
