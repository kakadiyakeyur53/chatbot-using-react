import React from "react";

const data = [
  "JAVA",
  "PYTHON",
  "DATA-STRUCTURE & ALGORITHAM",
  "SECURITY",
  "PENETRATION TESTING",
  "ANDROID/IOS SDK",
  "DATA ANALYSIS",
  "API & JSON",
];

//defination  of SoftwareDevelopment widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const SoftwareDevelopment = (props) => {
  return (
    <>
      <ol>
        {data.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ol>
    </>
  );
};

export default SoftwareDevelopment;
