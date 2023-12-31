import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { employees } from '@/tempData/employees'
import { getPerformance } from '@/components/utils/getPerformance'

export default function EmployeesTable() {
  return (
    <>
      <div className="-mt-8 ml-auto w-60 border  px-4 py-1 text-center">
        1 / {employees.length} Employees enrolled
      </div>
      <section className="mt-8">
        <Table>
          <TableCaption>
            <hr className="-mt-4 mb-8" />
            Performance metrics will appear in the future.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead>Contributions</TableHead>
              <TableHead>Budget Left</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow
                className="cursor-pointer transition duration-300 ease-in-out hover:bg-secondary"
                key={employee.id}
              >
                <TableCell className="px-0">
                  <a
                    href={`/employee/${employee.id}`}
                    className="flex items-center  py-4 font-medium"
                  >
                    {employee.picture ? (
                      <img
                        width={60}
                        className="rounded-full"
                        src={employee.picture}
                        alt={employee.name}
                      />
                    ) : (
                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border bg-secondary">
                        {employee.name.charAt(0)} {employee.last_name.charAt(0)}
                      </div>
                    )}
                    <div className="ml-4">{`${employee.name} ${employee.last_name}`}</div>
                  </a>
                </TableCell>
                <TableCell className="px-0">
                  <a
                    href={`/employee/${employee.id}`}
                    className="flex h-24 items-center  py-4"
                  >
                    {employee.team}
                  </a>
                </TableCell>
                <TableCell className="px-0">
                  <a
                    href={`/employee/${employee.id}`}
                    className="flex h-24 items-center  py-4 "
                  >
                    {employee.position}
                  </a>
                </TableCell>
                <TableCell
                  className={getPerformance(employee.performance).class}
                >
                  <a
                    href={`/employee/${employee.id}`}
                    className="flex  h-24 items-center py-4 "
                  >
                    {getPerformance(employee.performance).text}
                  </a>
                </TableCell>
                <TableCell className="px-0">
                  <a
                    href={`/employee/${employee.id}`}
                    className="flex h-24  items-center py-4 "
                  >
                    {employee.contributionHistory}
                  </a>
                </TableCell>
                <TableCell className="px-0">
                  <a
                    href={`/employee/${employee.id}`}
                    className="flex h-24  items-center py-4 "
                  >
                    {employee.budgetLeft}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  )
}
