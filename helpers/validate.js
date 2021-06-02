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
    let regx = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(inputs.name);
    if (regx === false) {
      errors.name = "Only character are allowed in name";
    }
  }

  if (
    !inputs.country ||
    (inputs.country.length < 0 && inputs.country !== undefined)
  ) {
    errors.country = "Country is required!!!";
  }
  if (inputs.country && inputs.country !== undefined) {
    let regx = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(inputs.country);
    if (regx === false) {
      errors.name = "Only character are allowed in country";
    }
  }

  if (!inputs.dob || (inputs.dob.length < 8 && inputs.dob !== undefined)) {
    errors.dob = "Date of birth is required!!!";
  }

  return errors;
};

export default validate;
