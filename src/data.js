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
