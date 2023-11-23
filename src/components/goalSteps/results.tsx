import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import type { Goal } from '@/tempData/goals'
import { useState } from 'react'
import { Dialog, DialogTrigger } from '../ui'
import PaymentCardForm from '../shared/paymentCardForm'

export default function Results({ goal }: { goal: Goal }) {
  const [selectedResult, setSelectedResult] = useState(0)
  const goBack = () => {
    // eslint-disable-next-line no-undef
    history.back()
  }

  return (
    <div className="mx-auto w-[1200px] max-w-full">
      <h2 className="mb-8 text-4xl font-semibold ">{goal.resultTitle}</h2>

      <div className="flex flex-wrap justify-between gap-4">
        {goal.results.map((result) => (
          <Card
            key={result.id}
            onClick={() => {
              setSelectedResult(result.id)
            }}
            className={cn(
              `w-[250px] cursor-pointer transition  duration-300 ease-in-out hover:border-4 hover:border-primary`,
              selectedResult === result.id && 'border-4 border-primary',
            )}
          >
            <img src={`../../${result.img}`} className="rounded-t-lg" />
            <CardContent>
              <p className="font-semibold">{result.text}</p>
              <CardDescription>{result.promotion}</CardDescription>
              {!!result.price && (
                <p>
                  Price: <strong>{result.price}</strong>
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mx-auto mt-8 flex w-[500px] max-w-full gap-4">
        <Button onClick={goBack} className="w-1/2" variant="outline">
          Back
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-1/2" disabled={selectedResult === 0}>
              Submit
            </Button>
          </DialogTrigger>
          <PaymentCardForm
            amount={goal.results
              .find((res) => res.id === selectedResult)
              ?.price.toString()}
            link={`/user/1`}
          />
        </Dialog>
      </div>
    </div>
  )
}
