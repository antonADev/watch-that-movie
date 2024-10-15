import { useState, Suspense, useRef } from 'react';
import { useOnClickOutside } from '../../utils/hooks';
import { Outlet } from 'react-router-dom';

import MenuIcon from '../../assets/icon-menu.svg?react';
import CloseIcon from '../../assets/icon-menu-close.svg?react';
import Spinner from '../../components/spinner/spinner.component';

import Theme from '../../Theme';

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
            <UnorderedLi
              onClick={() => {
                setIsOpen(false);
              }}>
              <ListItem>
                <NavLink to='/'>Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/movie'>Movies</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/tv'>Tv Shows</NavLink>
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
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
          </IconWrapper>
        </Nav>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Theme>
    </>
  );
};

export default Navigation;
