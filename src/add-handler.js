import shared from "./shared"

const addHandler = lazyLoad => {
  const { throttled } = lazyLoad

  const _throttled = shared._throttled = () => {
    throttled(lazyLoad)
  }

  window.addEventListener('scroll', _throttled)
}

export default addHandler