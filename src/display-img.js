const displayImg = img => {
  img.src = img.getAttribute('url') || img.parentNode.getAttribute('url')

  img.addEventListener('load', () => {
    img.style.opacity = 1
    img.setAttribute('loaded', true)
    img.removeAttribute('url')
  })
}

export default displayImg