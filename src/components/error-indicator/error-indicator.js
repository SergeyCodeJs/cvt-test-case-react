import React from 'react';
import classes from './error-indicator.module.scss';

const ErrorIndicator = () => {
  const {error_indicator, bad} = classes;

  return (
    <div className={error_indicator}>
      <span className={bad}>Очень плохо!</span>
      <span>
        Что-то идет не так, и это печально!
      </span>
      <span>
        (Но мы это обязательно починим!)
      </span>
    </div>
  );
};

export default ErrorIndicator;
