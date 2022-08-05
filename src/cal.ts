export const getAttr = (element: any) => {
  console.dir("🚀 ~ file: cal.ts ~ line 2 ~ getAttr ~ element", element);
  return {
    left: element?.offsetLeft,
    top: element?.offsetTop,
    width: element?.offsetWidth,
    height: element?.offsetHeight,
  };
};
