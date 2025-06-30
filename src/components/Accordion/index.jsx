import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import BootstrapAccordion from 'react-bootstrap/Accordion';
import styles from './index.module.scss';

export default function Accordion(props) {
  const { items, className, alwaysOpen, ...extraProps } = props;

  return (
    <>
      <BootstrapAccordion alwaysOpen={alwaysOpen} className={cx(styles.accordion, className)} {...extraProps}>
        {items.map((item, index) => (
          <BootstrapAccordion.Item key={index} eventKey={index} className={styles.accordionItem}>
            <BootstrapAccordion.Header className={styles.accordionHeader}>
              {item.title}
            </BootstrapAccordion.Header>

            <BootstrapAccordion.Body
              className={styles.accordionBody}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </BootstrapAccordion.Item>
        ))}
      </BootstrapAccordion>
    </>
  );
}

Accordion.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  alwaysOpen: PropTypes.bool
};

Accordion.defaultProps = {
  alwaysOpen: false
};
