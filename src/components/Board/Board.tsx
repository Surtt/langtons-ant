import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Line } from '../Line/Line';
import { Field } from '@/helpers/Field';
import { Ant } from '@/helpers/Ant';

export interface BoardProps {
  /**
   * Field data
   */
  cells: Field;
  /**
   * Ant position
   */
  ant: Ant;
}

export const Board: FC<BoardProps> = ({ cells, ant }) => {
  return (
    <BoardTable>
      <tbody>
        {cells.map((line, index) => (
          <Line key={`line_${index}`} line={line} index={index} ant={ant} />
        ))}
      </tbody>
    </BoardTable>
  );
};

export const BoardTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border: 1px solid #337ab7;
  margin-bottom: 1em;
`;
