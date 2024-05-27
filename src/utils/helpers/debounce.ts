export const debounce = (func: () => void, delay = 300) => {
  let timerId: NodeJS.Timeout;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func();
    }, delay);
  };
};
