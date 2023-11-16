import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
  Input,
} from '@/components/ui'

import type { EmployeeGoal } from '@/types/employee'
import { useState } from 'react'

export default function GoalsTable({ goals }: { goals: EmployeeGoal[] }) {
  const [recognitionId, setRecognitionId] = useState('')
  return (
    <div className="mx-auto w-[96%] rounded bg-secondary p-4">
      <h4 className="text-2xl">Eligible Goals</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Goal</TableHead>
            <TableHead>Contribution History</TableHead>
            <TableHead>Brand Contribution</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {goals.map((goal) => (
            <TableRow key={goal.id}>
              <TableCell className="flex  items-center justify-between pr-20">
                <div className="w-40 text-center">
                  <img
                    width={50}
                    className="mx-auto"
                    src={`../${goal.partnerImg}`}
                    alt={goal.partner}
                  />
                  <div className="font-bold">{goal.goal}</div>
                  <div className="text-xs font-light text-muted-foreground">
                    {goal.description}
                  </div>
                </div>
                <div className="ml-4">{`$${goal.contributions} / $ ${goal.totalAmount}`}</div>
              </TableCell>
              <TableCell className="w-1/5">{goal.contributions}</TableCell>
              <TableCell className="w-1/5">
                {goal.partnerContribution}
              </TableCell>
              <TableCell className="w-1/5">
                {recognitionId === goal.id ? (
                  <div className="flex">
                    <Input
                      className="border-primary"
                      type="number"
                      placeholder="Recognition"
                    />
                    <Button
                      onClick={() => {
                        setRecognitionId('')
                      }}
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setRecognitionId(goal.id)
                    }}
                  >
                    Give Recognition
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
