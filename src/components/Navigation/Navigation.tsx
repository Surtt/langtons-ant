import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Top } from '../Top/Top';

export const Navigation: FC = () => {
  return (
    <nav>
      <UlList>
        <li>
          <Link to="/">
            <Top>Langton's Ant</Top>
          </Link>
        </li>
        <li>
          <Link style={{ color: 'white' }} to="/about">
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
