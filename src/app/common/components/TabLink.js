import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import styled from 'styled-components';
import { toRem } from 'utils/styles/general';

const Link = styled.a`
  padding: ${toRem(15)} 0px ${toRem(15)};
  flex: 1;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none !important;
  text-transform: uppercase;
  &:hover {
    color: white;
  }
  ${({ active }) => (active ? 'background: #1890ff; color: white;' : 'color: #1890ff;')};
`;

export const TabLink = onlyUpdateForKeys(['active'])(
  ({ active, onClick, href, children, tabName }) => {
    return (
      <Link onClick={() => onClick(tabName)} active={active === tabName} href={href}>
        {children}
      </Link>
    );
  }
);
