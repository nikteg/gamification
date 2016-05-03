export function calcProgress(tasks) {
  return tasks.reduce((total, task) => (
    total + (task ? 1 : 0)
  ), 0) / tasks.length * 100 || 0
}
