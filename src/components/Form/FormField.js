import React from "react";

const FormField = ({ id, formData, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formData.validation && !formData.valid
          ? formData.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case "input":
        formTemplate = (
          <input
            {...formData.config}
            value={formData.value}
            onChange={event => change({ event, id })}
          />
        );
        break;
      case "select":
        formTemplate = (
          <select
            {...formData.config}
            value={formData.value}
            onChange={event => change({ event, id })}
          >
            <option value="">- - - || - - -</option>
            {formData.config.options.map(item => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        );
        break;
      case "textarea":
        formTemplate = (
          <textarea
            {...formData.config}
            value={formData.value}
            onChange={event => change({ event, id })}
          />
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return (
    <div>
      {formData.showlabel ? (
        <div className="label">{formData.config.label}</div>
      ) : null}
      {renderTemplate()}
      {showError()}
    </div>
  );
};

export default FormField;
