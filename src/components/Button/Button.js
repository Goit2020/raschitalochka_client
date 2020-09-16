import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';
import { ReactComponent as Exid } from '../../public/icons/exit.svg';
import Spinner from './button-loader/button-spinner';
import Media from 'react-media';

const Button = ({ variant = 'standart', children, type, name, value, onClick, disabled, isLoading, shadow = true }) => {
  const wrapperClasses = shadow ? `${css.wrapper}` : ` ${css.wrapper__noShadow} ${css.wrapper}`;

  return (
    <>
      {variant === 'standart' && (
        <div className={wrapperClasses}>
          <button
            className={disabled ? css.button_disabled : css.button}
            type={type}
            name={name}
            value={value}
            onClick={onClick}
            disabled={disabled}
          >
            {isLoading ? <Spinner /> : children}
          </button>
        </div>
      )}
      {variant === 'logout' && (
        <>
          <div>
            <Media
              queries={{
                small: '(max-width: 767px)',
              }}
            >
              {(matches) => (
                <Fragment>
                  <button className={css.button_logout_item} type={type} name={name} value={value} onClick={onClick}>
                    <span className={css.button_svg}>
                      <Exid />
                    </span>
                    {matches.small ? '' : 'Logout'}
                  </button>
                </Fragment>
              )}
            </Media>
          </div>
        </>
      )}
    </>
  );
};

Button.prototype = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Button;
