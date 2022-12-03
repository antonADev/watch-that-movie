import React, { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from '../../utils/hooks';

import { Outlet } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../assets/icon-menu.svg';
import { ReactComponent as Close } from '../../assets/icon-menu-close.svg';

import {
  Nav,
  LinkLogo,
  NavHeader,
  NavLink,
  LinkMenu,
  UnorderedLi,
  ListItem,
  IconWrapper,
} from './navigation.styles';
import Theme from '../../Theme';

const Navigation = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <>
      <Theme>
        <Nav ref={ref}>
          <LinkLogo to='/' aria-label='logo-home-link'>
            {/* <img src={movieLogo} alt='logo' /> */}
            <NavHeader>WTM</NavHeader>
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
