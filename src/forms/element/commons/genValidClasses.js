export default (validate, value, hasError) => {
  return {
    'is-required': validate ? checkRequired(validate) : false,
    'is-error': validate ? hasError : false,
    'is-success': validate ? (value && !hasError) : false
  }
}

function checkRequired (validate) {
  if (typeof validate === 'string') {
    return validate.indexOf('required') !== -1
  } else if (typeof validate === 'object') {
    return Object.keys(validate).some(key => key.indexOf('required') !== -1)
  } else {
    return false
  }
}
