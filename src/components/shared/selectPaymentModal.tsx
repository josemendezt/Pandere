import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Card, CardContent, RadioGroup, RadioGroupItem } from '../ui'
import PaymentCardForm from './paymentCardForm'
import { navigate } from 'astro:transitions/client'

export default function SelectPaymentModal({
  amount,
  link,
}: {
  amount?: string
  link?: string
}) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Confirm your payment method</DialogTitle>
        <Input type="number" placeholder={'Amount'} defaultValue={amount} />
      </DialogHeader>
      <Card className="m-2 bg-secondary ">
        <CardContent>
          <div className="mt-8 flex h-8 w-[300px] items-center">
            <img width={40} src="/src/assets/mastercard_logo.png" />
            <div className="flex w-full items-center justify-between ">
              <label className="ml-4 text-xl capitalize">
                **** **** **** 4321
              </label>
              <RadioGroup defaultValue={'4321'}>
                <RadioGroupItem value={'4321'} className="h-6 w-6 border-2" />
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link">Add another payment method +</Button>
          </DialogTrigger>
          <PaymentCardForm />
        </Dialog>
      </div>
      <DialogFooter>
        <Button
          onClick={() => {
            if (link) {
              navigate(link)
            }
          }}
          className="w-full"
          type="submit"
        >
          Submit
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
