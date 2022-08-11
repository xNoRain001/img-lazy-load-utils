const removeListener = lazyLoad => {
  window.removeEventListener('scroll', lazyLoad.cb)
}

export default removeListener