import React, { FC } from 'react';
import Cell from './Cell';

interface LineProps {
  line: boolean[];
  index: number;
}

const Line: FC<LineProps> = ({ line, index }) => {
  return (
    <tr className="line">
      {line.map((cell, idx) => {
        return <Cell key={`line_${index}-cell_${idx}`} />;
      })}
    </tr>
  );
};

export default Line;
