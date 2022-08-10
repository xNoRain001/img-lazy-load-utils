import shared from "./shared"

const removeHandler = () => {
  window.removeEventListener('scroll', shared._throttled)
}

export default removeHandler