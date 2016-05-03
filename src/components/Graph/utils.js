export function dataObjectToArray(dataObject, domain) {
  const array = []

  for (let i = domain.x.min; i < domain.x.max; i++) {
    const occurences = dataObject[i]
    array[i - domain.x.min] = occurences || 0
  }

  return array
}

