import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({primary, backgroundColor, size, label, ...props}) => {
  const mode = primary
    ? 'common-button--primary'
    : 'common-button--secondary';
  return (
    <input
      type="button"
      className={['common-button', `common-button--${size}`, mode].join(
        ' ',
      )}
      style={backgroundColor && {backgroundColor}}
      value={label}
      {...props}
    />
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
