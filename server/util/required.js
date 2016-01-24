class RequiredError extends Error {
  status = 401;
}

const required = (...params) => {
  return (reqBody) => {
    let errors = []

    for (let param of params) {
      if (!reqBody[param]) {
        errors.push(param)
      }
    }

    if (errors.length > 0) {
      throw new RequiredError(`${errors.join(', ')} required`)
    }

    return reqBody
  }
}

export default required
