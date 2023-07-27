import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  min-height: 35px;
  padding: 15px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #b92121;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
    gap: 20px;
  }
`;
export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: #b92121;
  }
`;
