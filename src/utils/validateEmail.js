export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@gmail\.[com,io]{2}/gm;
  return regex.test(email);
};
