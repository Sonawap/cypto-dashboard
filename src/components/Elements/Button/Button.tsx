import clsx from 'clsx';
import * as React from 'react';
import { Spinner } from '@/components/Elements/Spinner';
import { Link, LinkProps } from 'react-router-dom';
import { forwardRef } from 'react';

type colorType = 'primary' | 'secondary' | 'tertiary' | 'gradient';
type variants = 'filled' | 'outlined' | 'text';

const colorScheme: Record<colorType, Record<variants, string>> = {
  primary: {
    filled:
      'bg-primary text-white disabled:bg-primary disabled:text-white',
    outlined: 'btn btn-outline disabled:bg-[#595959]',
    text: 'text-blue-400 px-0 py-0',
  },

  gradient: {
    filled:
      'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white disabled:bg-primary disabled:text-white',
    outlined: 'btn btn-outline disabled:bg-[#595959]',
    text: 'text-blue-400 px-0 py-0',
  },

  secondary: {
    filled: 'bg-gray-500 text-white disabled:bg-[#595959]',
    outlined: 'btn btn-outline btn-secondary disabled:bg-[#595959]',
    text: 'text-blue-100 px-0 py-0',
  },

  tertiary: {
    filled: 'btn btn-accent disabled:bg-[#595959]',
    outlined:'btn btn-outline btn-accent disabled:bg-[#595959]',
    text: 'text-blue-100 px-0 py-0',
  },
};

const sizes = {
  xs: {
    text: 'text-xs font-medium rounded-lg',
    filled: 'btn btn-xs',
    outlined: 'btn btn-xs',
  },
  sm: {
    text: 'text-sm font-medium rounded-lg',
    filled: 'btn btn-sm',
    outlined: 'btn btn-sm',
  },
  md: {
    text: 'text-base font-semibold rounded-lg',
    filled: 'btn',
    outlined: 'btn',
  },
  lg: {
    text: 'text-lg font-semibold rounded-lg',
    filled: 'btn btn-lg',
    outlined: 'btn btn-lg',
  },
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  color?: colorType;
} & IconProps;

const MainButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      color = 'primary',
      variant = 'filled',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={props.disabled || isLoading}
        type={type}
        className={clsx(
          'inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 focus:outline-none disabled:cursor-not-allowed  disabled:opacity-70',
          sizes[size][variant],

          colorScheme[color][variant],
          className
        )}
        {...props}
      >
        {startIcon && <span className={clsx(props.children ? 'mr-2' : 'mr-0')}>{startIcon}</span>}
        <span>{props.children}</span>
        {endIcon && <span className={clsx(props.children ? 'ml-2' : 'ml-0')}>{endIcon}</span>}
        {isLoading && (
          <Spinner
            size="sm"
            className="text-current ml-2"
            variant={variant === 'filled' ? 'light' : 'primary'}
          />
        )}
      </button>
    );
  }
);

// Button Link
export type ButtonLinkProps = LinkProps & {
  variant?: variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  color?: colorType;
} & IconProps;

type LinkRef = HTMLAnchorElement;

const ButtonLink = forwardRef<LinkRef, ButtonLinkProps>(
  (
    {
      type = 'button',
      className = '',
      color = 'primary',
      variant = 'filled',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <Link
        ref={ref}
        type={type}
        className={clsx(
          'inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
          colorScheme[color][variant],
          sizes[size][variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <Spinner
            size="sm"
            className="text-current"
            variant={variant === 'filled' ? 'light' : 'primary'}
          />
        )}
        {startIcon && <span className={clsx(props.children ? 'mr-2' : 'mr-0')}>{startIcon}</span>}
        <span>{props.children}</span>
        {endIcon && <span className={clsx(props.children ? 'ml-2' : 'ml-0')}>{endIcon}</span>}
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

MainButton.displayName = 'Button';

export const Button = Object.assign(MainButton, { Link: ButtonLink });
