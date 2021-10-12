import React, { FC } from 'react';
import { Button } from './Button/Button';

export const Play: FC = () => {
  return (
    <Button
      title={'play'}
      path={<path d="m35.353 0 424.236 247.471-424.236 247.471z" />}
    />
  );
};
