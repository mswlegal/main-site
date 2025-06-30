import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Accordion from '@/components/Accordion';
import cx from 'classnames';

export default function Faq() {
  const items = [
    {
      title: 'Do I really need a car accident lawyer in California?',
      content:
        '<p> Yes. Without legal representation, you risk accepting far less than your case is worth. We level the playing field.</p>'
    },
    {
      title: 'How long do I have to file a car accident claim in California?',
      content:
        '<ul> <li>Up to 2 years for personal injury</li> <li>Only 6 months for claims involving government entities</li> </ul>'
    },
    {
      title: 'What if I don’t have health insurance?',
      content: '<p>No problem—we connect you with trusted doctors and medical providers.</p>'
    },
    {
      title: 'What compensations am I Eligible For',
      content:
        '<p><strong>Economic Damages:</strong></p><ul> <li>Emergency room and long-term medical care</li> <li>Lost wages or reduced earning ability</li> <li>Property damage repair or replacement</li> </ul> <p><strong>Non-Economic Damages:</strong></p><ul> <li>Pain and suffering</li> <li>Emotional trauma </li> <li>Loss of enjoyment of life</li> </ul>'
    }
  ];

  return (
    <>
      <Accordion items={items} className={cx(styles.accordion, 'mb-5')} />
    </>
  );
}

Faq.propTypes = {
  className: PropTypes.string
};
