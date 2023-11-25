import { goals, categories, type Category } from '@/tempData/goals'

export const getGoals = () => {
  //const res = await Promise.resolve(goals)
  return goals
}

export const getGoalsByCategory = (category: Category) => {
  // const res = await Promise.resolve(goals[category])

  return goals[category]
}

export const getGoalCategories = () => {
  //const res = await Promise.resolve(categories)
  return categories
}
