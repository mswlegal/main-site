// InputField.js
import React from 'react';
import styles from './index.module.scss';

const InputField = React.memo(
  ({ label, type = 'text', name, value, onChange, required = false, rows, placeholder }) => {
    const inputId = `input-${name}`;
    return (
      <div className={styles.input}>
        {type === 'textarea' ? (
          <textarea
            id={inputId}
            name={name}
            className={styles.inputField}
            rows={rows}
            required={required}
            value={value}
            onChange={onChange}
            placeholder={placeholder || label}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            name={name}
            className={styles.inputField}
            required={required}
            value={value}
            onChange={onChange}
            placeholder={placeholder || label}
          />
        )}
      </div>
    );
  }
);

export default InputField;
