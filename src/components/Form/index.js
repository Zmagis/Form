import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { validate } from "../../util";
import FormField from "./FormField";
import ColorPicker from "./ColorPicker";
import axios from "axios";

const Form = props => {
  const [formData, setFormData] = useState({
    language: {
      element: "select",
      value: "",
      config: {
        label: "Select the most beautiful language",
        name: "select_language",
        type: "select",
        options: [
          { key: "JavaScript", value: "JavaScript" },
          { key: "Lithuanian", value: "Lithuanian" },
          { key: "French", value: "French" },
          { key: "English", value: "English" },
          { key: "German", value: "German" }
        ]
      },
      validation: {
        required: true
      },
      valid: false,
      validationMessage: "",
      showlabel: true
    },
    question: {
      element: "textarea",
      value: "",
      config: {
        label: "Your deep/random question",
        name: "question_input",
        type: "textarea",
        placeholder: "Example: When in your life you felt most alive?"
      },
      validation: {
        required: true
      },
      valid: false,
      validationMessage: "",
      showlabel: true
    },
    email: {
      element: "input",
      value: "",
      config: {
        label: "Enter your email",
        name: "email_input",
        type: "email",
        placeholder: "abc@gmail.com"
      },
      validation: {
        required: true,
        email: true
      },
      valid: false,
      validationMessage: "",
      showlabel: true
    },
    nickname: {
      element: "input",
      value: "",
      config: {
        label: "Enter your nickname",
        name: "nickname_input",
        type: "text",
        placeholder: "Name"
      },
      validation: {
        required: true
      },
      valid: false,
      validationMessage: "",
      showlabel: true
    }
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");
  const [background, setBackground] = useState("#40b8bf");

  const updateForm = element => {
    const newFormData = { ...formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    setError(false);
    setFormData(newFormData);
  };

  const submitHandler = event => {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in formData) {
      dataToSubmit[key] = formData[key].value;
      formIsValid = formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      axios.post(`https://form-8987a.firebaseio.com/submits.json`, {
        ...dataToSubmit,
        color: background
      });
      setSuccess("submited");
    } else {
      setError(true);
    }
  };

  const handleChangeComplete = color => {
    setBackground(color.hex);
  };

  let form = (
    <>
      <h1>Fill out the Form</h1>
      <form>
        <ColorPicker
          color={background}
          handleChangeComplete={handleChangeComplete}
        />

        <FormField
          id={"language"}
          formData={formData.language}
          change={element => updateForm(element)}
        />
        <FormField
          id={"question"}
          formData={formData.question}
          change={element => updateForm(element)}
        />

        <FormField
          id={"nickname"}
          formData={formData.nickname}
          change={element => updateForm(element)}
        />
        <FormField
          id={"email"}
          formData={formData.email}
          change={element => updateForm(element)}
        />

        <div className="button-box">
          <button type="submit" onClick={event => submitHandler(event)}>
            Submit
          </button>
        </div>

        {error ? <div className="error_label">Something went wrong</div> : null}
        <div className="success_label">{success}</div>
      </form>
    </>
  );

  return (
    <div className="form-container">
      {success === "submited" ? <Redirect to="/questions" /> : form}
    </div>
  );
};

export default Form;
