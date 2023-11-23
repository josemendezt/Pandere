import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
  Dialog,
  DialogTrigger,
} from '@/components/ui'

import type { EmployeeGoal } from '@/types/employee'
import SelectPaymentModal from '../shared/selectPaymentModal'

export default function GoalsTable({ goals }: { goals: EmployeeGoal[] }) {
  return (
    <div className="mx-auto w-[96%] rounded bg-secondary p-4">
      <h4 className="text-2xl">Eligible Expenses</h4>
      {goals.length ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Expense</TableHead>
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Give Recognition</Button>
                    </DialogTrigger>
                    <SelectPaymentModal />
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-md mt-4 bg-secondary">
          <div>
            This User hasn't enrolled their expenses in the system yet, would
            you like to pre-approve an amount for his/her future expenses?
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4">Pre Approve Credit</Button>
            </DialogTrigger>
            <SelectPaymentModal />
          </Dialog>
        </div>
      )}
    </div>
  )
}
