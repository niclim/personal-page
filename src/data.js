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
      type: 'file',
      name: 'skills',
      action: 'showSkills'
    },
    {
      type: 'folder',
      name: 'projects',
      children: [
        {
          type: 'file',
          name: 'towerDefense',
          action: 'showTowerDefense'
        },
        {
          type: 'file',
          name: 'graphite',
          action: 'showGraphite'
        }
      ]
    }
  ]
}

export const textCardInfo = {
  default: {
    title: 'Instructions',
    type: 'help'
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
    image: './images/ctionaltd.png',
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
        link: 'https://niclim.github.io/TowerDefense/index.html'
      }
    ]
  },
  showGraphite: {
    title: 'Graphite',
    type: 'standard',
    image: './images/graphite.png',
    description: 'Graphs reddit user comments, built on Vue.js, d3 and express',
    links: [
      {
        name: 'github',
        icon: 'FaGithubSquare',
        link: 'https://github.com/niclim/graphite'
      },
      {
        name: 'link',
        icon: 'FaChain',
        link: 'https://graph-ite.tk/'
      }
    ]
  },
  showSkills: {
    title: 'Skills',
    type: 'list',
    listItems: [
      {
        text: 'JavaScript',
        image: './images/js.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        text: 'React',
        image: './images/react.png',
        link: 'https://reactjs.org/'
      },
      {
        text: 'Redux',
        image: './images/redux.png',
        link: 'https://redux.js.org/'
      },
      {
        text: 'd3',
        image: './images/d3.png',
        link: 'https://d3js.org/'
      },
      {
        text: 'Vue.js',
        image: './images/vue.png',
        link: 'https://vuejs.org/'
      }
    ]
  }
}
