const demoUser = [
  {
    userName: 'Macbeth',
    password: '123AAaa!',
    id: 0,
  }
]

const demoQuests = [
  {
    questName: 'Conquer Scotland',
    questDesc: 'Generic description of quest',
    user: 'Macbeth',
    completed: false,
    id: 0,
  },
  {
    questName: 'Do Laundry',
    questDesc: 'Generic description of quest',
    user: 'Macbeth',
    completed: false,
    id: 1,
  },
  {
    questName: 'Research Caesarean Sections',
    questDesc: 'Generic description of quest',
    user: 'Macbeth',
    completed: false,
    id: 2,
  },
];

const demoTasks = [
  {
    id: 0,
    taskName: 'Consort with witches',
    taskDesc: 'Bubble, bubble, toil, and trouble...',
    completed: true,
    questId: 0,
  },
  {
    id: 1,
    taskName: 'Assassinate Banquo',
    taskDesc: 'I have to betray my friend in order to fulfill the witches\' prophecy',
    completed: false,
    questId: 0,
  },
  {
    id: 2,
    taskName: 'Recruit the Lady Macbeth for aid',
    taskDesc: 'I need help cleaning up the bloodstains on the bedsheets in my guest bedroom',
    completed: true,
    questId: 1,
  },
  {
    id: 3,
    taskName: 'Find some bleach',
    taskDesc: 'No one tells you how difficult it is to get bloodstains out of laundry *before* you murder someone...',
    completed: false,
    questId: 1,
  },
  {
    id: 4,
    taskName: 'Accept Promotion',
    taskDesc: 'King Duncan will be coming to my castle to offer me anothere Thanedom',
    completed: true,
    questId: 0
  },
  {
    id: 5,
    taskName: 'Study Obstetrics',
    taskDesc: 'I need to find an obstetrician in 11th century Scotland capable of determining if C-Sections are a thing in this time and place',
    completed: false,
    questId: 2
  },
  {
    id: 6,
    taskName: 'Succumb to hubris',
    taskDesc: 'Regardless of what the obstetrician tells me, I\'m not going to get assassinated by any nobles born via C-Section...',
    completed: false,
    questId: 2
  },
];

export { demoUser, demoQuests, demoTasks };