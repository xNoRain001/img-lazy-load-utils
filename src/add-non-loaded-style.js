const addNonLoadedStyle = (div, img, lazyLoad) => {
  const { backgroundColor, transition } = lazyLoad.style

  div.style.backgroundColor = backgroundColor
  img.style.cssText = `
    opacity: 0;
    transition: ${ transition };
  `
}

export default addNonLoadedStyle