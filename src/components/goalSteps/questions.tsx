import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  Calendar,
  CardFooter,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { navigate } from 'astro:transitions/client'

import type { Category, Goal } from '@/tempData/goals'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function Questions({
  goal,
  category,
}: {
  goal: Goal
  category: Category
}) {
  const getField = (type: string, options?: string[]) => {
    const [range, setRange] = useState<DateRange | undefined>()

    switch (type) {
      case 'multiDatePicker':
        return (
          <Calendar
            mode="range"
            selected={range}
            id="test"
            onSelect={setRange}
            styles={{
              head_cell: {
                width: '60px',
              },
              day: {
                width: '60px',
              },
            }}
          />
        )
      case 'options':
        return (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {options?.map((opt) => (
                <SelectItem key={opt} value={opt} className="capitalize">
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      default:
        return <Input />
    }
  }

  const goBack = () => {
    // eslint-disable-next-line no-undef
    history.back()
  }

  const goNext = () => {
    navigate(`/goals/results/${category}`)
  }

  return (
    <Card className="mx-auto w-[500px] pt-8">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            {goal.questions.map((question) => (
              <div key={question.id} className="flex flex-col  space-y-1.5">
                <Label htmlFor="name" className="text-xl ">
                  {question.label}
                </Label>
                {getField(question.type, question.options)}
              </div>
            ))}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button onClick={goBack} className="w-1/2" variant="outline">
          Back
        </Button>
        <Button onClick={goNext} className="w-1/2">
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
