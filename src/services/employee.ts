import { employees } from '@/tempData/employees'

export const getEmployees = () => {
  // const res = await Promise.resolve(employees)
  return employees
}

export const getEmployeeById = (id: string) => {
  // const res = await Promise.resolve(employees.find((emp) => emp.id === id))

  return employees.find((emp) => emp.id === id)
}
