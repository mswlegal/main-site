'use client';

import React from 'react';

export function useOutsideClick(ref, callback) {
  React.useEffect(() => {
    function handleClickOutside(event) {
      console.log(ref?.current, !ref?.current.contains(event.target));
      if (ref?.current && !ref?.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
