import React from "react";

//defination  of WebDevelopment widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const WebDevelopment = (props) => {
  return (
    <>
      <ol>
        {props.WebDevelopmentState.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ol>
    </>
  );
};
export default WebDevelopment;
