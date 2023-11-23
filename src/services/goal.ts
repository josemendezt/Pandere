import { goals, categories, type Category } from '@/tempData/goals'

export const getGoals = async () => {
  const res = await Promise.resolve(goals)
  return res
}

export const getGoalsByCategory = async (category: Category) => {
  const res = await Promise.resolve(goals[category])

  return res
}

export const getGoalCategories = async () => {
  const res = await Promise.resolve(categories)
  return res
}
