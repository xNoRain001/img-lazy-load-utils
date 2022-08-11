const displayImg = img => {
  const parent = img.parentNode
  img.src = img.getAttribute('url') || parent.getAttribute('url')

  img.addEventListener('load', () => {
    img.style.opacity = 1
    img.setAttribute('loaded', true)
    img.removeAttribute('url')
    parent.removeAttribute('url')
  })
}

export default displayImg