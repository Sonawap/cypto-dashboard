import { Button } from '@/components/Elements';
import { Form, Input } from '@/components/Form';
import Yup from '@/libs/yup';
import { Summary } from './Summary';
import { OpenOrderRowProps } from '../Pair';
import { v1 as uuid } from "uuid";
import { useOpenOrderActions } from '@/stores/order';

const validationSchema = Yup.object({
  price: Yup.string().required().trim().label('Limit price'),
  amount: Yup.string().required().trim().label('Amount'),
  type: Yup.string().required().trim().label('type'),
});

type InputSelectionProp = {
  currentOrderTab: 'sell' | 'buy'
}

export const InputSection: React.FC<InputSelectionProp> = ({currentOrderTab}) => {
  const { addItem } = useOpenOrderActions();
  const handleSubmit = (values: OpenOrderRowProps) => {
    const orderPayload: OpenOrderRowProps = {
      id: uuid(),
      orderType: currentOrderTab,
      price: parseFloat(values.price),
      amount: parseFloat(values.amount),
    }

    console.log(orderPayload);
    addItem(orderPayload);
  }
  return (
    <div className="input-section flex flex-col justify-center mt-4 w-full text-gray-400 whitespace-nowrap rounded-lg bg-bgDark-700 border-neutral-700">
      <Form<any, typeof validationSchema>
        onSubmit={handleSubmit}
        schema={validationSchema}
        initialValues={{
          rememberMe: true,
        }}
        className="space-y-4"
      >
        {({ register, formState }) => (
          <div className="mt-5">
            <div className="space-y-5">
              <Input
                placeholder="Limit Price"
                disabled={false}
                type='number'
                error={formState.errors['price']}
                registration={register('price')}
              />
            </div>
            <div className="mt-5">
              <Input
                placeholder="Amount"
                disabled={false}
                type='number'
                error={formState.errors['amount']}
                registration={register('amount')}
              />
            </div>
            <div className="mt-5">
              <Input
                placeholder="Type"
                disabled={false}
                error={formState.errors['type']}
                registration={register('type')}
              />
            </div>
            <Summary />
            <div className="mt-5">
              <Button
                type="submit"
                color='gradient'
                isLoading={false}
                disabled={!formState.isValid || false}
                className="w-full"
              >
                Buy BTC
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div>
  )
};