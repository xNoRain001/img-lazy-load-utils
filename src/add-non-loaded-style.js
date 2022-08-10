const addNonLoadedStyle = (div, img) => {
  div.style.backgroundColor = '#ddd'
  img.style.cssText = `
    opacity: 0;
    transition: opacity .3s;
  `
}

export default addNonLoadedStyle