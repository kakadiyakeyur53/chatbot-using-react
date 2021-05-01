# Create Chatbot using React 

This project is use react-chatbot-kit for chatbot so you have to install it on your project.

[Live Demo](https://kakadiyakeyur53.github.io/chatbot-using-react/)

## npm requirements

### `npm react-chatbot-kit`

using this feature you can add your chatbot in your project 
go to
[npm react-chatbot-kit](https://www.npmjs.com/package/react-chatbot-kit)

### `npm bootstrap`

you can use bootstrap in your project for styling your page.
for easy guide go to [npm bootstrap](https://www.npmjs.com/package/bootstrap)

### `npm material-ui`

you can use material ui for easy documentation and effective representation
for easy guide go to [npm material-ui core](https://www.npmjs.com/package/@material-ui/core).

### `npm jquery`

you can use jquery for solve inbuilde jquery
for easy guide go to [npm jquery](https://www.npmjs.com/package/jquery).

## coding section

### [Config](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/Config.jsx)
this section is use for initialize chatbot configurations

<b>Properties:</b>

<b>botName - </b>defines the name of the bot

<b>customStyles -</b> object defining custom styles for different elements.

<b>initialMessages -</b> defines an array of initial messages from the bot. Required property.

<b>state -</b> defines state you want to place into the chatbot component.

<b>customComponents -</b> you can define your own components and swap out the components that come with react-chatbot-kit by replacing them here.

<b>widgets -</b> here you can define a list of widgets that you want to be able to render with a chatbot response.

### [Message Parser](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/MessageParser.jsx)

The message parser controls what happens when the user sends a message.

You have to implement this yourself. The beauty of this is that you can make the message parsing as complex or as simple as you'd like.

The only method that the message parser needs to implement is the "parse" method. This method is called inside the chatbot when it receives a message from the user.

### [Action Provider](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/ActionProvider.jsx)

The actionprovider controls what kind of action that the chatbot is going to perform.

The actionprovider is given the createChatBotMessage and createClientMessage functions in the constructor, which you can use to create a new responses.

### [Widgets](https://github.com/kakadiyakeyur53/chatbot-using-react/tree/main/src/widgets)

Widgets are custom components that you can render with chatbot messages.

In order to use widgets, you need to register them in the config. Here you will define the following properties:

widgetName - defines the name of the widget

widgetFunc - define a function that returns the component. The function must take props and spread it into the component.

mapStateToProps - defines which state properties you defined in config should be injected into the widget component.

props - option array of props you want to pass to your component.

When the widget component is rendered it will receive the following props:

actionProvider - the actionprovider class you have defined, so you can trigger other actions from your custom components.

setState - setState function that can manipulate the top level chatbot state.

scrollIntoView - helper function to scroll content into view when doing asynchronous calls, use in combination with useEffect when updating to state to ensure that the chat window is scrolled to bottom.

[state] - any piece of state you defined in the mapStateToProps section of the config.

[props] - any piece of props you defined in the props section of the config.

## Example

here i create different widget to give overview of different properties of chatbot.
### 1. [Simple Message](https://github.com/kakadiyakeyur53)

return simple chatbot message with text.

### 2. [Enrollment No Wedget](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/widgets/EnrollmentNo.jsx)

in this widget give simple overview of propery and use form for user input

this return specific message on button click event

### 3. [Web Development](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/widgets/WebDevelopment.jsx)

simple use of state data passed in props by config section

### 4. [Software Development](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/widgets/SoftwareDevelopment.jsx)

simple use of data passed by backend or by array in widget itself.

### 5. [Tools](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/widgets/Tools.jsx)

use of action provider passing to widget by props

display buttons, on click use property action provider which is given to widget by props

### 6. [WeatherInfo](https://github.com/kakadiyakeyur53/chatbot-using-react/blob/main/src/widgets/WeatherInfo.jsx)

use of API

fetch data using API and use in widget, live display by statechange

[Live Demo](https://kakadiyakeyur53.github.io/chatbot-using-react/)

## PreView

![image](https://user-images.githubusercontent.com/67643835/116774570-53620c80-aa12-11eb-9131-402d55f15e5d.png)
![image](https://user-images.githubusercontent.com/67643835/116774581-6c6abd80-aa12-11eb-8ccb-a03823de97de.png)
![image](https://user-images.githubusercontent.com/67643835/116774596-83a9ab00-aa12-11eb-9413-0a69e51f9345.png)
![image](https://user-images.githubusercontent.com/67643835/116774652-ed29b980-aa12-11eb-9350-264b6fd70180.png)
![image](https://user-images.githubusercontent.com/67643835/116774727-63c6b700-aa13-11eb-9790-91e5c1d92459.png)
![image](https://user-images.githubusercontent.com/67643835/116774747-7e009500-aa13-11eb-9ff9-846b54d92496.png)

