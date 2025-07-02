import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export function IsInViewProvider({ children, horizontal, center }) {
  const [isInViewport, setIsInViewport] = React.useState(false);
  const refs = React.useRef();

  const handleObserveElement = React.useCallback(
    (element) => {
      const options = () => {
        if (horizontal) {
          return {
            rootMargin: '0% -50% 0% -50%',
            threshold: 0
          };
        }

        if (center) {
          return {
            rootMargin: '-50% 0% -50% 0%',
            threshold: 0
          };
        } else {
          return {
            rootMargin: '0px',
            threshold: 0.3
          };
        }
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
            return;
          }
          setIsInViewport(false);
        });
      }, options());

      observer.observe(element);
    },
    [horizontal, center]
  );

  React.useEffect(() => {
    if (refs) {
      handleObserveElement(refs.current);
    }
  }, [refs, handleObserveElement]);

  return (
    <>
      {React.cloneElement(children, { className: cx(children.props.className, { isInViewport }), ref: refs })}
    </>
  );
}

IsInViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
  horizontal: PropTypes.bool,
  center: PropTypes.bool
};

IsInViewProvider.defaultProps = {
  horizontal: false,
  center: false
};
