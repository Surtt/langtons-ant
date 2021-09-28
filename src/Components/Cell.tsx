import React, { FC } from 'react';

const Cell: FC = () => {
  return (
    <td className="cell">
      <div className="box">
        <div className="content"></div>
      </div>
    </td>
  );
};

export default Cell;
