const checkSubmit = (value) => {
  const neckeys = ['text', 'submit']
  if (!neckeys.every(key => value.hasOwnProperty(key))) {
    throw new Error(`submit must include these necessary keys: ${neckeys.join(', ')}. Please check your submit.`)
  }
}

export default checkSubmit
