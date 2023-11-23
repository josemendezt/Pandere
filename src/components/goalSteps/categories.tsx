import {
  Button,
  Card,
  CardContent,
  CardDescription,
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui'
import { useRef } from 'react'
import IconReact from '../utils/IconReact'
import type { Category } from '@/tempData/goals'
import { navigate } from 'astro:transitions/client'

export default function Categories({ categories }: { categories: Category[] }) {
  const category = useRef(categories[0])

  const goToNextStep = () => {
    navigate(`/goals/questions/${category.current}`)
  }

  return (
    <>
      <div className="flex  flex-col items-center">
        <div className=" text-center">
          <h2 className="mb-8 text-4xl font-bold ">
            Select a category for your expense:
            <CardDescription className="mt-1 text-lg font-medium">
              You can set other expenses later
            </CardDescription>
          </h2>
          <RadioGroup
            defaultValue={category.current}
            onValueChange={(val: Category) => {
              category.current = val
            }}
          >
            {categories.map((cat) => (
              <Card key={cat} className="m-2 bg-secondary">
                <CardContent>
                  <div className="flex w-full pt-6">
                    <div className="w-16 max-w-full">
                      <IconReact iconName={cat} />
                    </div>
                    <div className="flex w-full items-center justify-between ">
                      <label className="ml-4 text-xl capitalize">{cat}</label>
                      <RadioGroupItem
                        value={cat}
                        className="h-6 w-6 border-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
          <Button
            onClick={goToNextStep}
            className="mx-auto mt-8 h-16 w-full text-xl"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  )
}
