import React, { FC } from 'react';
import { Coords } from '../helpers/Ant';

interface CellProps {
  ant?: Coords;
}

export const Cell: FC<CellProps> = ({ ant }) => {
  const hasAnt = ant ? 'ant' : '';
  const styleWithAntOrNot = `content ${hasAnt}`;
  return (
    <>
      <td className="cell">
        <div className="box">
          <div className={styleWithAntOrNot}></div>
        </div>
      </td>
    </>
  );
};
