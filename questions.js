module.exports = [
  {
    type: 'input',
    message: 'Hi there! And who on Earth are you?',
    name: 'student'
  },
  {
    type: 'input',
    message: 'Describe your problem:',
    name: 'text'
  },
  {
    type: 'list',
    message: "I'm so sorry to hear that. 😢. Which block are you in?",
    choices: [
      'Core',
      'Back End 1',
      'Back End 2',
      'Front End 1',
      'Front End 2',
      'Project Phase'
    ],
    name: 'cohort'
  }
];
