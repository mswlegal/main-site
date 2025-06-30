import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ReactCounter = ({ end, decimals }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when it enters the viewport
    threshold: 0.5 // Trigger when 50% of the element is visible
  });
  return (
    <span ref={ref} data-to={end}>
      {inView && (
        <CountUp end={end ? end : 100} duration={1.2} decimals={decimals ? decimals : 0}>
          count
        </CountUp>
      )}
    </span>
  );
};

export default ReactCounter;
