import shared from "./shared"

const removeListener = () => {
  window.removeEventListener('scroll', shared.cb)
}

export default removeListener