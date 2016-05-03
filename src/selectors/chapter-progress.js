export function calcProgress(tasks) {
  return parseInt(tasks.reduce((total, task) => (
    total + (task ? 1 : 0)
  ), 0) / tasks.length * 100, 10) || 0
}
