export function calcProgress(chapter) {
  return chapter.tasks.reduce((total, task) => (
    total + (task.done ? 1 : 0)
  ), 0) / chapter.tasks.length * 100 || 0
}
