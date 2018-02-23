export const listOptions = (currentLocation) => {
  return currentLocation.reduce((acc, next) => {
    return `${acc} ${next.name}${next.type === 'file' ? '.exe' : ''}`
  }, '')
}

export const validateCommand = (commands, currentLocation) => {
  let type = 'invalid'
  if (commands[0] === 'run') {
    type = 'file'
  } else if (commands[0] === 'cd') {
    type = 'folder'
  }
  const validItems = currentLocation.filter(item => item.type === type && item.name === commands[1])
  return validItems.length === 1
}
