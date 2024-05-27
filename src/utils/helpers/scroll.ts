export const scrollToBottom = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
};
export const scrollToTop = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollTop = 0;
  }
};
