import clsx from 'clsx';
import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form/FieldWrapper';

const sizes = {
  sm: 'py-2 px-3 text-sm',
  md: 'py-3 px-3 text-base',
  lg: 'py-4 px-3 text-lg',
};
type CheckboxFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    registration?: Partial<UseFormRegisterReturn>;
    labelClassName?: string;
    size?: keyof typeof sizes;
  };

export const Checkbox: FC<CheckboxFieldProps> = ({
  labelClassName = 'inline-flex items-center gap-2',
  ...props
}) => {
  const { label = ' ', className, helperText, registration, error } = props;

  return (
    <FieldWrapper
      id={props.id}
      label={label}
      error={error}
      inLabel
      name={props.name}
      className={labelClassName}
      helperText={helperText}
    >
      <div className="m-0 p-0">
        <input
          {...props}
          className={clsx(
            "relative h-5 w-5 appearance-none rounded-[4px] border border-gray-400 bg-transparent outline-none hover:cursor-pointer focus:shadow-none focus:transition-colors focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[18px] focus:after:w-[18px] focus:after:rounded-[4px] focus:after:bg-transparent focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:after:ml-1.5 checked:focus:after:mt-px checked:focus:after:h-3 checked:focus:after:w-1.5 checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-2 checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
            "before:pointer-events-none before:absolute before:h-5 before:w-5 before:bg-transparent before:opacity-0 before:content-['']",
            "checked:border-primary checked:bg-primary checked:after:absolute checked:after:ml-1.5 checked:after:mt-px checked:after:block checked:after:h-3 checked:after:w-1.5 checked:after:rotate-45 checked:after:border-2 checked:after:border-l-0 checked:after:border-t-0 checked:after:border-white checked:after:bg-transparent checked:after:content-['']",
            className
          )}
          type="checkbox"
          {...registration}
        />
      </div>
    </FieldWrapper>
  );
};
