import {
  TopBar,
  Button,
  Icon,
  Avatar
} from '@shopify/polaris';
import {
  SearchIcon,
  ChatIcon,
} from '@shopify/polaris-icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #dde0e4;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  flex: 1;
`;

const NavCenter = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex: 2;
`;

const NavRight = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const NavLink = styled.button<{ isActive?: boolean }>`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${props => props.isActive ? '#000' : '#6d7175'};
  font-weight: ${props => props.isActive ? '600' : 'normal'};

  &:hover {
    color: #000;
  }
`;

export function NavigationBar() {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <NavContent>
        <NavLeft>
          <img src="/logo.png" alt="InsureMe" height="32" />
        </NavLeft>

        <NavCenter>
          <NavLink onClick={() => navigate('/home')} isActive>
            Home
          </NavLink>
          <NavLink onClick={() => navigate('/coverage')}>
            Coverage
          </NavLink>
          <NavLink onClick={() => navigate('/claims')}>
            Claims
          </NavLink>
          <NavLink onClick={() => navigate('/resources')}>
            Resources
          </NavLink>
        </NavCenter>

        <NavRight>
          <Button icon={SearchIcon} variant="plain" />
          <Button icon={ChatIcon} variant="plain" />
          <Avatar customer name="Gracie" source="https://your-avatar-url.jpg" />
        </NavRight>
      </NavContent>
    </NavWrapper>
  );
} 