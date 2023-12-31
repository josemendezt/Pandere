import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { navigate } from 'astro:transitions/client'
import Visa from '../../assets/visa_logo.png'
import Mastercard from '../../assets/mastercard_logo.png'
import Amex from '../../assets/amex_logo.png'

export default function PaymentCardForm({
  amount,
  link,
}: {
  amount?: string
  link?: string
}) {
  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {amount && (
            <div className="text-center text-lg ">
              Amount: <strong>{amount}</strong>
            </div>
          )}
          <div className="flex justify-center gap-4">
            <div>
              <img width={50} src={Visa.src} alt="Visa logo" />
            </div>
            <div className="mt-2">
              <img width={40} alt="mastercard" src={Mastercard.src} />
            </div>
            <div className="mt-1">
              <img width={40} alt="Amex" src={Amex.src} />
            </div>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name on Card</Label>
            <Input type="text" id="name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="card">Card Number</Label>
            <Input type="text" id="card" />
          </div>
          <div className="flex gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input type="text" id="expiryDate" placeholder="MM / YY" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="securityCode">Security Code</Label>
              <Input type="text" id="securityCode" placeholder="" />
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="postal">Postal Code</Label>
            <Input type="text" id="card" />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="w-full"
            type="submit"
            onClick={() => {
              if (link) {
                navigate(link)
              }
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  )
}
