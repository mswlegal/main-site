import { useState, useCallback } from 'react';

export const useSwipeGesture = ({ onSwipeDown, onSwipeUp, onSwipeLeft, onSwipeRight }) => {
  const [startTouch, setStartTouch] = useState(null);

  // Function to handle the touch start event
  const handleTouchStart = useCallback((e) => {
    const touchStart = e.touches[0].clientY;
    const touchStartX = e.touches[0].clientX;
    setStartTouch({ touchStart, touchStartX });
  }, []);

  // Function to handle the touch move event
  const handleTouchMove = useCallback(
    (e) => {
      if (!startTouch) return;

      const touchMove = e.touches[0].clientY;
      const touchMoveX = e.touches[0].clientX;

      const verticalDifference = touchMove - startTouch.touchStart;
      const horizontalDifference = touchMoveX - startTouch.touchStartX;

      // Handle swipe down
      if (verticalDifference > 100 && onSwipeDown) {
        onSwipeDown();
      }

      // Handle swipe up
      if (verticalDifference < -100 && onSwipeUp) {
        onSwipeUp();
      }

      // Handle swipe left
      if (horizontalDifference < -100 && onSwipeLeft) {
        onSwipeLeft();
      }

      // Handle swipe right
      if (horizontalDifference > 100 && onSwipeRight) {
        onSwipeRight();
      }
    },
    [startTouch, onSwipeDown, onSwipeUp, onSwipeLeft, onSwipeRight]
  );

  // Function to handle the touch end event
  const handleTouchEnd = useCallback(() => {
    setStartTouch(null);
  }, []);

  // Functions for mouse events (similar logic for mouse swipes)
  const handleMouseDown = useCallback((e) => {
    setStartTouch({ touchStart: e.clientY, touchStartX: e.clientX });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!startTouch) return;

      const mouseMove = e.clientY;
      const mouseMoveX = e.clientX;

      const verticalDifference = mouseMove - startTouch.touchStart;
      const horizontalDifference = mouseMoveX - startTouch.touchStartX;

      // Handle swipe down
      if (verticalDifference > 100 && onSwipeDown) {
        onSwipeDown();
      }

      // Handle swipe up
      if (verticalDifference < -100 && onSwipeUp) {
        onSwipeUp();
      }

      // Handle swipe left
      if (horizontalDifference < -100 && onSwipeLeft) {
        onSwipeLeft();
      }

      // Handle swipe right
      if (horizontalDifference > 100 && onSwipeRight) {
        onSwipeRight();
      }
    },
    [startTouch, onSwipeDown, onSwipeUp, onSwipeLeft, onSwipeRight]
  );

  const handleMouseUp = useCallback(() => {
    setStartTouch(null);
  }, []);

  // Bind the touch and mouse events to the DOM element
  const bind = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  };

  return bind;
};
