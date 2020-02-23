export const validate = element => {
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const messageOne = `${!valid ? "Email is not valid" : ""}`;
    error = !valid ? [valid, messageOne] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const messge = `${!valid ? "this field is required" : ""}`;
    error = !valid ? [valid, messge] : error;
  }
  return error;
};
