export const getPerformance = (performance: number) => {
  if (performance <= 25) {
    return {
      class: 'text-red-500',
      text: 'Can improve',
    }
  }
  if (performance > 25 && performance <= 50) {
    return {
      class: 'text-amber-500',
      text: 'Average',
    }
  }
  if (performance > 50 && performance <= 75) {
    return {
      class: 'text-cyan-500',
      text: 'Great',
    }
  }
  // more than 75
  return {
    class: 'text-emerald-400',
    text: 'Outstanding',
  }
}
