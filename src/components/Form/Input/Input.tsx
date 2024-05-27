import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper';
import { NumberInput } from '../NumberInput';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  FieldWrapperPassThroughProps & {
    registration?: Partial<UseFormRegisterReturn>;
    size?: keyof typeof sizes;
    isRequired?: boolean;
    labelClassName?: string;
  } & IconProps;

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

const sizes = {
  sm: 'p-2 text-sm',
  md: 'p-2.5 text-base',
  lg: 'p-4 text-base',
};

export type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(
  (
    {
      labelClassName,
      registration,
      label,
      error,
      size = 'md',
      helperText,
      startIcon,
      endIcon,
      isRequired,
      ...props
    },
    ref
  ) => {
    const { className = '', width } = props;

    const [typ, setTyp] = useState(props.type);

    return (
      <FieldWrapper
        width={width}
        id={props.name || registration?.name}
        label={label}
        error={error}
        name={props.name}
        isRequired={isRequired}
        className={labelClassName}
        helperText={helperText}
      >
        {startIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {startIcon}
          </span>
        )}

        {props.type === 'number' ? (
          <NumberInput
            ref={ref}
            registration={registration}
            {...props}
            id={props.name || registration?.name}
            className={clsx(
              'block text-sm font-normal w-full appearance-none rounded-md border bg-transparent text-gray-400 transition-colors duration-200 hover:border-bgDark-500 focus:border-bgDark-500 focus:outline-bgDark-500 focus:ring-bgDark-500',
                error ? 'border-status-error focus:border-status-error border-red-800' : 'border-bgDark-500',
                sizes[size],
              props.type === 'password' && 'pr-16',
              startIcon && '!pl-10',
              endIcon && '!pr-10',
              className
            )}
          />
        ) : (
          <>
            <input
              ref={ref}
              {...props}
              id={props.name || registration?.name}
              className={clsx(
                'block text-sm font-normal w-full appearance-none rounded-md border bg-transparent text-gray-400 transition-colors duration-200 hover:border-bgDark-500 focus:border-bgDark-500 focus:outline-bgDark-500 focus:ring-bgDark-500',
                error ? 'border-status-error focus:border-status-error border-red-800' : 'border-bgDark-500',
                sizes[size],
                props.type === 'password' && 'pr-16',
                startIcon && '!pl-10',
                endIcon && '!pr-10',
                className
              )}
              type={typ}
              {...registration}
            />
            {props.type === 'password' && (
              <button
                type="button"
                tabIndex={-1}
                aria-label="Password Eye"
                onClick={() => setTyp(typ === 'password' ? 'text' : 'password')}
                className={clsx(
                  'absolute bottom-0 right-3 top-0 my-auto outline-none transition-opacity',
                  typ === 'password' ? 'opacity-60' : 'opacity-20'
                )}
              >
                {/* <EyeIcon className="w-4" /> */}
              </button>
            )}
          </>
        )}
        {endIcon && (
          <span className="absolute inset-y-0 right-3 flex items-center pl-3">{endIcon}</span>
        )}
      </FieldWrapper>
    );
  }
);

Input.displayName = 'Input';
