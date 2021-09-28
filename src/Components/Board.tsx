import React, { FC } from 'react';
import Line from './Line';

const Board: FC = () => {
  const cells = new Array<boolean[]>(21)
    .fill(new Array<boolean>(21))
    .map(() => new Array<boolean>(21).fill(false));
  console.log(cells);
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
