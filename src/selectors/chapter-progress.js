export function calcProgress(chapter) {
  return chapter.tasks.reduce((total, task) => (
    total + task.progress
  ), 0) / chapter.tasks.length
}
