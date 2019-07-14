const react = { name: "React", icon: "fab fa-react fa-spin", color: "#00D8FF" };
const redux = { name: "Redux", logo: "redux.png" };
const sass = { name: "SCSS", logo: "sass.png" };
const materialUI = { name: "Material UI", logo: "material-ui.png" };

export default [
  {
    title: "Training Bot",
    codeName: "trainingBot",
    tech: [
      { name: "React/Redux", icon: "fab fa-react fa-spin", color: "#00D8FF" },
      { name: "Node/Express", icon: "fab fa-node-js", color: "#87C000" },
      { name: "Slack API", logo: "slack.png" },
      { name: "Twillo", logo: "twilio.png" },
      { name: "SendGrid", logo: "sendgrid.png" },
      { name: "Stripe", icon: "fab fa-stripe-s", color: "#646FDF" }
    ],
    shortText:
      "Messaging scheduler service built with React+Redux and Node+Express",
    altText: "Dashboard of Training Bot",
    longText:
      "Training Bot is an add-on project expanded over the course of five weeks with a team of five members.  The app allows users to attach messages to what we call Training Series so when a member is assigned to a series, they will automatically receive messages on the specified schedule.  During our time with the project, we refactored the code base to be vastly more scalable so future teams could expand on it more readily and we implemented the Slack API along with responses to make communication more two-ways.",
    live: "https://www.trainingbot.app",
    code: "https://github.com/labs12-training-bot-2"
  },
  {
    title: "AppraiserBFF",
    codeName: "appraiserBFF",
    tech: [
      react,
      redux,
      sass,
      materialUI,
      { name: "Zillow API", logo: "zillow.png" }
    ],
    shortText: "Property manager service to track the values of properties",
    altText: "Dashboard of AppraiserBFF",
    longText:
      "This app was built by two over four days for a Lambda Build Week.  It integrates with the Zillow API to quickly search for properties and estimate their value.  Once added, uses can sort properties they are buying and selling by a variety of metrics.  My work in this project includes the widgets, the sort functions for properties, and the Zillow API integration.",
    live: "https://ajbrush.com/home/",
    code:
      "https://github.com/appraiserbff-lambda-build-week/appraiserbff-frontend"
  },
  {
    title: "Doorman",
    codeName: "doorman",
    tech: [
      { name: "Vue", logo: "vue.png" },
      { name: "Vuetify", logo: "vuetify.png" },
      { name: "Vuex", logo: "vuex.png" },
      { name: "GitHub API", icon: "fab fa-github", color: "#000" }
    ],
    shortText:
      "GitHub companion app to automatically accept or decline invitations from users",
    altText: "Doorman landing page",
    longText:
      "Doorman allows users to search for GitHub users through the GitHub API to white or black list users.  With no further effort, invitations from those users will automatically be accepted or declined.  This project was built over two days for the Lambda Hackathon by a team of six.  My contributions to this project is the search bar, which searches the GitHub api for users, renders the results, and allows for quick white or black listing.",
    live: "https://doorman.notwrong.dev/",
    code: "https://github.com/notwrong/doorman"
  }
];
