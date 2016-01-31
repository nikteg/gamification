class RequiredError extends Error {
  status = 401;
}

const required = (...params) => {
  return (body) => {
    let errors = []

    for (let param of params) {
      if (!body[param]) {
        errors.push(param)
      }
    }

    if (errors.length > 0) {
      throw new RequiredError(`${errors.join(', ')} required`)
    }

    return body
  }
}

export default required
