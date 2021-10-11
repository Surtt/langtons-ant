import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface TopProps {
  /**
   * Title text
   */
  children: string;
}

export const Top: FC<TopProps> = ({ children }) => {
  return <AppTitle>{children}</AppTitle>
};

export const AppTitle = styled.h1`
  margin-bottom: 2.5rem;
  font-size: 2rem;
  text-align: center;
`;
