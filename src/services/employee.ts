import { employees } from '@/tempData/employees'

export const getEmployees = async () => {
  const res = await Promise.resolve(employees)
  return res
}

export const getEmployeeById = async (id: string) => {
  const res = await Promise.resolve(employees.find((emp) => emp.id === id))

  return res
}
