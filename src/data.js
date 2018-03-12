// For now, lets assume that names are unique
// Figure non-unique names by building this entirely differently
export const options = {
  name: '~',
  type: 'folder',
  children: [
    {
      type: 'file',
      name: 'social-media',
      action: 'showSocialMedia'
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
    type: 'standard',
    image: null,
    description: 'Type stuff into the terminal'
  },
  showSocialMedia: {
    title: 'Social Media',
    type: 'list',
    listItems: [
      {
        text: 'Github',
        image: './images/Octocat.jpg',
        link: 'https://github.com/niclim'
      },
      {
        text: 'LinkedIn',
        image: './images/linkedIn.png',
        link: 'https://www.linkedin.com/in/nicholas-lim49/'
      }
    ]
  }
}
