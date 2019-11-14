const react = { name: 'React', icon: 'fab fa-react fa-spin', color: '#00D8FF' };
// const redux = { name: 'Redux', logo: 'redux.png' };
const sass = { name: 'SCSS', logo: 'sass.png' };
// const materialUI = { name: "Material UI", logo: "material-ui.png" };

export default [
  {
    title: 'Chatwise',
    codeName: 'chatWise',
    tech: [
      react,
      sass,
      { name: 'Node/Express', icon: 'fab fa-node-js', color: '#87C000' },
      { name: 'FB Messenger', logo: 'fb-messenger.png', color: '#019AFF' }
    ],
    shortText:
      'Facebook Messenger Chatbot that reads short book summaries to users.',
    altText: 'Messenger view of the bot',
    longText:
      "This app has been in development since August, which I've worked on with two other developers.  It was built for a stakeholder who had a vision to have a bot that could read book summaries to his client.  My role on this project was to guide the other two developers to complete a project in addition to personally see goals were hit.  I was the architect for the backend and responsible for the overall flow of receiving webhooks.",
    live: 'https://m.me/ChatwiseBooks',
    code: 'https://github.com/fb-chatreader'
  },
  {
    title: 'Training Bot',
    codeName: 'trainingBot',
    tech: [
      { name: 'React/Redux', icon: 'fab fa-react fa-spin', color: '#00D8FF' },
      { name: 'Node/Express', icon: 'fab fa-node-js', color: '#87C000' },
      { name: 'Slack API', logo: 'slack.png' },
      { name: 'Twillo', logo: 'twilio.png' },
      { name: 'SendGrid', logo: 'sendgrid.png' },
      { name: 'Stripe', icon: 'fab fa-stripe-s', color: '#646FDF' }
    ],
    shortText:
      'Messaging scheduler service built with React+Redux and Node+Express',
    altText: 'Dashboard of Training Bot',
    longText:
      'Training Bot is an add-on project expanded over the course of five weeks with a team of five members.  The app allows users to attach messages to what we call Training Series so when a member is assigned to a series, they will automatically receive messages on the specified schedule.  During our time with the project, we refactored the code base to be vastly more scalable so future teams could expand on it more readily and we implemented the Slack API along with responses to make communication more two-ways.',
    live: 'https://www.trainingbot.app',
    code: 'https://github.com/labs12-training-bot-2'
  },
  {
    title: 'Doorman',
    codeName: 'doorman',
    tech: [
      { name: 'Vue', logo: 'vue.png' },
      { name: 'Vuetify', logo: 'vuetify.png' },
      { name: 'Vuex', logo: 'vuex.png' },
      { name: 'GitHub API', icon: 'fab fa-github', color: '#000' }
    ],
    shortText:
      'GitHub companion app to automatically accept or decline invitations from users',
    altText: 'Doorman landing page',
    longText:
      'Doorman allows users to search for GitHub users through the GitHub API to white or black list users.  With no further effort, invitations from those users will automatically be accepted or declined.  This project was built over two days for the Lambda Hackathon by a team of six.  My contributions to this project is the search bar, which searches the GitHub api for users, renders the results, and allows for quick white or black listing.',
    live: 'https://doorman.notwrong.dev/',
    code: 'https://github.com/notwrong/doorman'
  }
];
