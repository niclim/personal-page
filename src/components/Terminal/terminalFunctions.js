const validCommands = [
  {
    name: 'run',
    uses: 'file'
  },
  {
    name: 'cd',
    uses: 'folder'
  },
  {
    name: 'ls',
    uses: 'null'
  }
]

// This handles weird user inputs from the terminal
const createRegExp = (string) => {
  try {
    return new RegExp(string)
  } catch (e) {
    // Really bad way to ensure the regexp never passes....
    return new RegExp('w43sed5rftygbuhnji43s5edrctyvubhsr4c6tyvu')
  }
}

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
  if (!path) { return currentLocation }
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

export const validateCommand = (currentLocation, inputCommands, options) => {
  let type = 'invalid'
  if (inputCommands[0] === 'run') {
    type = 'file'
    const validItems = currentLocation.children.filter(item => item.type === type && item.name === inputCommands[1])
    return validItems.length === 1
  } else if (inputCommands[0] === 'cd') {
    type = 'folder'
    return !!resolvePath(inputCommands[1], currentLocation, options)
  }
}

export const changeDirectory = (currentLocation, inputCommands, options) => {
  const newLocation = resolvePath(inputCommands[1], currentLocation, options)
  const path = createPathName(newLocation, options)

  return {
    newLocation,
    path
  }
}

export const getSuggestions = (currentLocation, inputCommands, options) => {
  let suggestions = []
  if (inputCommands.length === 1) {
    suggestions = validCommands
      .filter(validCommand => createRegExp(`^${inputCommands}`).test(validCommand.name))
      .map(command => command.name)
  } else {
    const type = validCommands.find(val => val.name === inputCommands[0])
      ? validCommands.find(val => val.name === inputCommands[0]).uses
      : 'file'

    const lastCommand = inputCommands[inputCommands.length - 1]
    const splitPath = lastCommand.split('/')
    // My brain is tried so I can't think of a better name
    // But this is the last bit of the path that needs to be checked as a file/folder
    const lastCommandBit = splitPath.pop()
    const currentNode = resolvePath(splitPath.join('/'), currentLocation, options)
    suggestions = currentNode.children
      .filter(child => createRegExp(`^${lastCommandBit}`).test(child.name) && type === child.type)
      .map(command => `${splitPath.join('/')}${splitPath.length > 0 ? '/' : ''}${command.name}`)
  }

  return suggestions
}

export const getCommands = (input) => {
  const commands = input.toLowerCase().split(/\s+/g)
  if (commands.length > 1 && commands[0] === '') { commands.shift() }
  return commands
}
