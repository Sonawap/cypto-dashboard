import clsx from 'clsx';
import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: ReactNode;
  className?: string;
  children: ReactNode;
  error?: FieldError | undefined;
  helperText?: ReactNode;
  name?: string;
  isRequired?: boolean;
  id?: string;
  inLabel?: boolean;
  width?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const {
    label,
    className,
    inLabel = false,
    width = 'auto',
    helperText,
    id,
    isRequired,
    error,
    children,
  } = props;
  return (
    <div className={clsx(width === 'full' ? `w-full` : width)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'block pb-1 text-xs font-medium',
            error?.message ? 'text-status-error text-red-800' : ' text-gray-300',
            className
          )}
        >
          {label} {isRequired && <span className="text-red-800">*</span>}
          {inLabel && <>{children}</>}
        </label>
      )}

      {!inLabel && <div className="relative">{children}</div>}

      {helperText && <>{helperText}</>}

      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="pt-1 text-xs font-medium text-status-error text-red-800"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
