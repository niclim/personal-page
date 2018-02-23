export const options = [
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
