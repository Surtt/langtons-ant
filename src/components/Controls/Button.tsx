import React, { FC, ReactChild } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps {
  /**
   * Button role
   */
  role: string;
  /**
   * Button title
   */
  title: string;
  /**
   * Svg icon
   */
  children: ReactChild;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ role, title, children, onClick }) => {
  return (
    <Btn role={role} title={title} onClick={onClick}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  margin-right: 0.5rem;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
