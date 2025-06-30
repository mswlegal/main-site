import React from 'react';
import { customCursor } from '../utilities';

const Cursor = () => {
  React.useEffect(() => {
    customCursor();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </>
  );
};

export default Cursor;
