import React, { FC } from 'react';
import Line from './Line';
import { generateField } from '../helpers/Field';

const Board: FC = () => {
  const basicSize = 21;
  const defaultCellState = false;
  const cells = generateField(basicSize, defaultCellState);
  return (
    <div className="stretch">
      <table className="board">
        <tbody>
          {cells.map((line, index) => {
            return <Line key={`line_${index}`} line={line} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
