import styled from '@emotion/styled';

export interface AppTitleProps {
  /**
   * Title text
   */
  children: string;
}

export const AppTitle = styled.h1`
  margin-bottom: 2.5rem;
  font-size: 2rem;
  text-align: center;
`;
