import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.deviceMin.laptop} {
    /* padding: 3rem 0 2.7rem; */
  }
`;

export const LinkLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  :active {
    color: none;
  }
  :visited {
    color: none;
  }
  /* img {
    max-height: 100%;
    max-width: 80%;
  } */
`;
export const NavHeader = styled.h2`
  font-family: 'Passion One', cursive;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
`;

export const LinkMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  width: 70%;
  background-color: ${(props) => props.theme.colors.white};
  transition: right 1s;
  z-index: 99;
  @media ${(props) => props.theme.deviceMin.laptop} {
    position: static;
    height: inherit;
    flex-direction: row;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.main};
  :hover {
    color: ${(props) => props.theme.colors.veryDarkMain};
  }

  @media ${(props) => props.theme.deviceMin.laptop} {
    font-size: 1rem;
  }
`;

export const UnorderedLi = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  padding-top: 8.5rem;

  @media ${(props) => props.theme.deviceMin.laptop} {
    position: static;
    display: flex;
    flex-direction: row;
    padding-top: 0;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0.8rem 2rem;

  @media ${(props) => props.theme.deviceMin.laptop} {
    margin-left: 0.3rem;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  z-index: 99;
  display: block;
  @media screen {
    @media ${(props) => props.theme.deviceMin.laptop} {
      display: none;
    }
  }
`;
