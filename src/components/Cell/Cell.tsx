import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Ant } from '@/helpers/Ant';
import img from './ant.png';

export interface CellProps {
  /**
   * Cell data
   */
  cell?: boolean;
  /**
   * Ant data
   */
  ant?: Ant;
}

export const Cell: FC<CellProps> = ({ ant, cell }) => {
  const isColored = cell ? 'orange' : '';
  return (
    <CellTd role='cell'>
      <Box>
        {ant ? (
          <AntCell rotate={ant.rotation} />
        ) : (
          <CellContent className={isColored} />
        )}
      </Box>
    </CellTd>
  );
};

const CellTd = styled.td`
  border: 1px solid #337ab7;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const CellContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

// const FilledCell = styled(EmptyCell)`
//   background-color: orange;
// `;

interface RotateProps {
  rotate: number;
}
const dynamicStyleAnt = ({ rotate }: RotateProps) =>
  css`
    background: url(${img}) no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(${rotate}deg);
  `;

const AntCell = styled(CellContent)`
  ${dynamicStyleAnt};
`;
