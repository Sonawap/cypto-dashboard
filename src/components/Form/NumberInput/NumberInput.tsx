import { forwardRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapperPassThroughProps } from '../FieldWrapper';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  FieldWrapperPassThroughProps & {
    registration?: Partial<UseFormRegisterReturn>;
  };

export type Ref = HTMLInputElement;

export const NumberInput = forwardRef<Ref, InputProps>(
  ({ onChange, name, registration, ...props }, ref) => {
    const [value, setValue] = useState(props.value || null);

    const handleChange = (event: any) => {
      const result = event.target.value.replace(/\D/g, '');

      setValue(result);
      if (registration?.onChange) {
        registration.onChange({
          target: {
            value: result,
            name: registration.name || name,
          },
        });
      }

      if (onChange) {
        onChange({
          target: {
            value: result,
            name,
          },
        } as any);
      }
    };

    return (
      <input
        ref={ref}
        {...props}
        type="number"
        {...registration}
        value={Number(value) > 0 ? Number(value) : undefined}
        onChange={handleChange}
      />
    );
  }
);

NumberInput.displayName = 'NumberInput';
