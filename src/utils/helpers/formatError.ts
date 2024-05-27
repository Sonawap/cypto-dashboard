export const formatError = (error: any) => {
  if (error.response) {
    const { data } = error.response;
    const { MESSAGE, errors } = data?.data;


    if (errors) {
      let errorMessages = '';
      for (const prop in errors) {
        errorMessages += `${errors[prop]}\n`;
      }
      return errorMessages;
    }
    return MESSAGE;
  }
  return error.message;
};
