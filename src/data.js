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
          name: 'towerDefense',
          action: 'showTowerDefense'
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
      },
      {
        text: 'npm',
        image: './images/npm.png',
        link: 'https://www.npmjs.com/~niclim'
      }
    ]
  },
  showTowerDefense: {
    title: 'Ctional TD',
    type: 'standard',
    image: null,
    description: 'A tower defense game with 50 unique levels and 31 different towers',
    links: [
      {
        name: 'github',
        icon: 'FaGithubSquare',
        link: 'https://github.com/niclim/TowerDefense'
      },
      {
        name: 'link',
        icon: 'FaChain',
        link: '#'
      }
    ]
  }
}
