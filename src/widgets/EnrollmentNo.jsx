import React, { useState } from "react";
import Button from "@material-ui/core/Button";

//defination  of EnrollmentNo widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const EnrollmentNo = (props) => {
  const [state, setstate] = useState({
    name: "",
    year: "",
    collagecode: "",
    shift: "",
    branch: "",
    rollno: "",
  });

  const EnrollSubmit = (input) => {
    const message = props.actionProvider.createChatBotMessage(
      `enrollment no of ${input.name}: ${input.year % 100}${input.collagecode}${
        input.shift
      }${input.branch}${input.rollno}`,
      {
        withAvatar: true,
      }
    );
    props.actionProvider.addMessageToBotState(message);
  };

  const EnrollmentFormValidation = (field) => {
    const message = props.actionProvider.createChatBotMessage(
      `enter ${field} for create enrollment number`,
      {
        withAvatar: true,
      }
    );
    props.actionProvider.addMessageToBotState(message);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(state.name);

    if (state.name === "") {
      EnrollmentFormValidation("name");
    } else {
      if (state.year === "") {
        EnrollmentFormValidation("year");
      } else {
        if (state.collagecode === "") {
          EnrollmentFormValidation("collage code");
        } else {
          if (state.shift === "") {
            state.shift = "01";
          }
          if (state.branch === "") {
            EnrollmentFormValidation("branch");
          } else {
            if (state.rollno === "") {
              EnrollmentFormValidation("rollno");
            } else {
              const info = state;
              //calling mathod define in actionprovider
              EnrollSubmit(info);
            }
          }
        }
      }
    }
  };

  const onchangeevent = (event) => {
    console.log(event.target.value);
    setstate((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <form>
        <label>Student Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={onchangeevent}
        />
        <br />
        <label>Admission Year: </label>
        <br />
        <input
          type="text"
          name="year"
          value={state.year}
          onChange={onchangeevent}
        />
        <br />
        <label>Collage Code: </label>
        <br />
        <input
          type="text"
          name="collagecode"
          value={state.collagecode}
          onChange={onchangeevent}
        />
        <br />
        <label>Shift: </label>
        <br />
        <input
          type="text"
          name="shift"
          value={state.shift}
          onChange={onchangeevent}
        />
        <br />
        <label>Branch Code: </label>
        <br />
        <input
          type="text"
          name="branch"
          value={state.branch}
          onChange={onchangeevent}
        />
        <br />
        <label>Roll No: </label>
        <br />
        <input
          type="text"
          name="rollno"
          value={state.rollno}
          onChange={onchangeevent}
        />
        <br />
        <Button
          variant="outlined"
          color="primary"
          className="btn btn-primary my-3"
          onClick={onsubmit}
        >
          submit
        </Button>
      </form>
    </>
  );
};

export default EnrollmentNo;
