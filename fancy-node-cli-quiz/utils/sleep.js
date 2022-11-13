export const sleep = (milliseconds = 1500) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
