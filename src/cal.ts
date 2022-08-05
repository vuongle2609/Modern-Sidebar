export const getAttr = (element: any) => {
  console.dir(element.target);

  return {
    left: element?.offsetLeft,
    top: element?.offsetTop,
    width: element?.offsetWidth,
    height: element?.offsetHeight,
  };
};
