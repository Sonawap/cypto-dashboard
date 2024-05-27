import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as React from 'react';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
  DeepPartial,
} from 'react-hook-form';

import { ErrorBoundary } from '@/components/layout';
import Yup from '@/libs/yup';

type FormProps<TFormValues extends FieldValues, Schema extends Yup.ObjectSchema<any>> = {
  className?: string;
  autoComplete?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  initialValues?: DeepPartial<TFormValues> | undefined;
  schema: Schema;
};
// type YupSchemaObject<T> = Record<keyof T, Yup.AnySchema>;

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends Yup.ObjectSchema<any> = Yup.ObjectSchema<any>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
  autoComplete,
  initialValues,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && yupResolver(schema),
    mode: 'onChange',
    defaultValues: initialValues,
  });
  return (
    <ErrorBoundary>
      <form
        autoComplete={autoComplete}
        className={clsx('space-y-6', className)}
        onSubmit={methods.handleSubmit(onSubmit)}
        id={id}
      >
        {children(methods)}
      </form>
    </ErrorBoundary>
  );
};
