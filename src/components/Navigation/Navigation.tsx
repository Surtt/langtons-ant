import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Top } from '../Top/Top';

interface NavigationProps {
  count: number;
}

export const Navigation: FC<NavigationProps> = ({ count }) => {
  return (
    <nav>
      <UlList>
        <li>
          <Link to='/'>
            <Top>Langton's Ant</Top>
          </Link>
        </li>
        <StepsLi>Steps: {count}</StepsLi>
        <li>
          <Link style={{ color: 'white' }} to='/about'>
            About
          </Link>
        </li>
      </UlList>
    </nav>
  );
};

export const UlList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StepsLi = styled.li`
  color: #ffffff;
`;
