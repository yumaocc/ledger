import { createContext } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import FormItem from './FormItem';
export type { FormItemType } from './FormItem';

export interface FormContextType extends UseFormReturn<FieldValues, any, undefined> {
  labelWidth?: number;
  labelAlgin?: 'right' | 'left';
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

const Form = (props: FormContextType & { children?: JSX.Element }) => {
  const { children, ...rest } = props;
  return <FormContext.Provider value={{ ...rest }}>{children}</FormContext.Provider>;
};

Form.Item = FormItem;

export { Form };
