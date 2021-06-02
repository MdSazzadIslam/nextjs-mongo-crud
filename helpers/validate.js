const validate = (inputs) => {
  //Email errors
  debugger;
  const errors = {};

  if (!inputs.email && inputs.email !== undefined) {
    errors.email = "Check Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
    errors.email = "Invalid email address";
  }

  if (!inputs.name || (inputs.name.length < 0 && inputs.name !== undefined)) {
    errors.name = "Name is required!!!";
  }
  if (inputs.name && inputs.name !== undefined) {
    let regx = !/^[a-zA-Z]*$/g.test(inputs.name);
    if (regx === false) {
      errors.name = "Only character are allowed in name";
    }
  }

  if (
    !inputs.message ||
    (inputs.message.length < 0 && inputs.message !== undefined)
  ) {
    errors.message = "Message is required!!!";
  }

  return errors;
};

export default validate;
