import { createChatBotMessage } from "react-chatbot-kit";
import EnrollmentNo from "./widgets/EnrollmentNo";
import SoftwareDevelopment from "./widgets/SoftwareDevelopment";
import WebDevelopment from "./widgets/WebDevelopment";
import Tools from "./widgets/Tools";
import WeatherInfo from "./widgets/WeatherInfo";

const botName = "keyur kakadiya";
//congig for chatbot
const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [createChatBotMessage(`hii, i am ${botName}.`)],
  state: {
    WebDevelopmentState: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "BOOTSTRAP",
      "JQUERY & AJAX",
      "SASS",
      "REACT",
      "REDUX",
      "NODEJS",
      "EXPRESS",
      "MONGODB & MONGOOSE",
    ],
    ToolsState: [
      "enrollment number",
      "web development",
      "software development",
      "whether info",
    ],
  },
  //widgets declaration section which we use in our bot for display information
  widgets: [
    {
      widgetName: "EnrollmentNo",
      widgetFunc: (props) => <EnrollmentNo {...props} />,
      mapStateToProps: ["Enrollment"],
    },
    {
      widgetName: "WebDevelopment",
      widgetFunc: (props) => <WebDevelopment {...props} />,
      mapStateToProps: ["WebDevelopmentState"],
    },
    {
      widgetName: "SoftwareDevelopment",
      widgetFunc: (props) => <SoftwareDevelopment {...props} />,
    },
    {
      widgetName: "Tools",
      widgetFunc: (props) => <Tools {...props} />,
      mapStateToProps: ["ToolsState"],
    },
    {
      widgetName: "WeatherInfo",
      widgetFunc: (props) => <WeatherInfo {...props} />,
      mapStateToProps: ["WeatherInfo"],
    },
  ],
};

export default config;
