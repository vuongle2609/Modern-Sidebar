export const getAttr = (element: any) => {
  return {
    left: element?.offsetLeft,
    top: element?.offsetTop,
    width: element?.offsetWidth,
    height: element?.offsetHeight,
  };
};
