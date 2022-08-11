const removeObserver = lazyLoad => {
  lazyLoad.ob.disconnect()
}

export default removeObserver