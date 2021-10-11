import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Cell as CellType } from '../../helpers/Field';
import { Ant } from '@/helpers/Ant';
import img from './ant.png';

export interface CellProps {
  /**
   * Cell data
   */
  cell?: CellType;
  ant?: Ant;
}

export const Cell: FC<CellProps> = ({ ant, cell }) => {
  return (
    <CellTd role="cell">
      <Box>
        {ant ? <AntCell /> : <EmptyCell />}
        {cell ? <FilledCell /> : <EmptyCell />}
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

const EmptyCell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const FilledCell = styled(EmptyCell)`
  background-color: orange;
`;

const AntCell = styled(EmptyCell)`
  background: url(${img}) no-repeat;
  background-size: contain;
  background-position: center;
`;
