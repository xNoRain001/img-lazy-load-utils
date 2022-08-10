const getOffsetTop = el => {
  let { offsetTop, offsetParent } = el

  while (offsetParent && offsetParent.tagName !== 'BODY') {
    offsetTop += offsetParent.offsetTop
    offsetParent = offsetParent.offsetParent
  }

  return offsetTop
}

export default getOffsetTop