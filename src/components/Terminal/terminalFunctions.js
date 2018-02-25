export const listOptions = (currentLocation) => {
  return currentLocation.children.reduce((acc, next) => {
    return `${acc} ${next.name}${next.type === 'file' ? '.exe' : ''}`
  }, '')
}

// This unfortunately relies on unique names
const getParent = (currentLocationName, options) => {
  // If we go further than the parent, we are setting it to the ~
  let parent = options
  let currentNode = options
  let nodesToCheck = []
  let done = false
  while (!done) {
    // Check all children - we only care about folders because its assumed that locationName is in a folder
    for (let i = 0; i < currentNode.children.length; i++) {
      const node = currentNode.children[i]
      if (node.type === 'folder') {
        if (currentLocationName === options.name) {
          parent = currentNode
        } else {
          nodesToCheck.push(node)
        }
      }
    }

    // Check end condition
    if (nodesToCheck.length > 0) {
      currentNode = nodesToCheck.pop()
    } else {
      done = true
    }
  }

  return parent
}

export const getItem = (currentNode, name, type) => currentNode.children.find(child => type === child.type && name === child.name)

// This is not going to fully work like the inbuilt terminal because its a lot of work
const resolvePath = (path, currentLocation, options) => {
  let currentNode = currentLocation
  // path is a string with split by /
  path.split('/').every(val => {
    switch (val) {
      case '..':
        currentNode = getParent(currentLocation, options)
        break
      case '.':
        currentNode = currentLocation
        break
      default:
        currentNode = getItem(currentNode, val, 'folder') || null
    }
    // Ends early if node is not valid
    return currentNode
  })

  return currentNode
}

const createPathName = (location, options) => {
  let currentNode = location
  const path = [currentNode.name]
  while (currentNode.name !== '~') {
    currentNode = getParent(currentNode.name, options)
    path.unshift(currentNode.name)
  }
  return path.join('/')
}

export const validateCommand = (currentLocation, commands, options) => {
  let type = 'invalid'
  if (commands[0] === 'run') {
    type = 'file'
    const validItems = currentLocation.children.filter(item => item.type === type && item.name === commands[1])
    return validItems.length === 1
  } else if (commands[0] === 'cd') {
    type = 'folder'
    return !!resolvePath(commands[1], currentLocation, options)
  }
}

export const changeDirectory = (currentLocation, commands, options) => {
  const newLocation = resolvePath(commands[1], currentLocation, options)
  const path = createPathName(newLocation, options)

  return {
    newLocation,
    path
  }
}
