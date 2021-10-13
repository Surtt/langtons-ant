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
  ant?: Ant;
}

export const Cell: FC<CellProps> = ({ ant, cell }) => {
  // console.log(cell);
  const isColored = cell ? 'orange' : '';
  // const hasAnt = ant ? (ant.rotation !== 0 ? `ant${ant.rotation}` : 'ant') : '';
  // const styleAntOrNot = `${hasAnt}${isColored}`;
  return (
    <CellTd role="cell">
      {/* <Box>
        {ant ? <AntCell /> : <EmptyCell />}
        {cell ? <FilledCell /> : <EmptyCell />}
      </Box> */}
      {/* <Box>{ant ? <AntCell /> : cell ? <FilledCell /> : <EmptyCell />}</Box> */}
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
