// For now, lets assume that names are unique
// Figure non-unique names by building this entirely differently
export const options = {
  name: '~',
  type: 'folder',
  children: [
    {
      type: 'file',
      name: 'github',
      action: 'showGithub'
    },
    {
      type: 'folder',
      name: 'projects',
      children: [
        {
          type: 'file',
          name: 'someproject',
          action: 'showSomeProject'
        }
      ]
    }
  ]
}

export const textCardInfo = {
  default: {
    title: 'How to use this',
    image: '',
    description: 'Type stuff into the terminal'
  },
  showGithub: {
    title: 'Github',
    image: './images/Octocat.jpg',
    description: '',
    link: 'https://github.com/niclim'
  }
}
