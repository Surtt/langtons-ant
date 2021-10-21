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
   * Svg path
   */
  path: ReactChild;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ role, title, path, onClick }) => {
  return (
    <Btn role={role} title={title} onClick={onClick}>
      <Image xmlns='http://www.w3.org/2000/svg' viewBox='0 0 439.362 439.362'>
        {path}
      </Image>
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  margin-right: 0.5rem;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const Image = styled.svg`
  width: 100%;
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #337ab7;
  border-radius: 3px;
  fill: #337ab7;
  &:hover {
    fill: #ffffff;
    background-color: #337ab7;
  }
`;
