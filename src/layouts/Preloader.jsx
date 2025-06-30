import React from 'react';
import { preloader } from '../utilities';

const Preloader = () => {
  React.useEffect(() => {
    preloader();
  }, []);
  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};

export default Preloader;
