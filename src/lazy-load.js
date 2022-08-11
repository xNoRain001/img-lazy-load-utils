import LazyDivs from "./lazy-divs"
import addListener from './add-listener'
import addObserver from "./add-observer"
import removeListener from './remove-listener'
import removeObserver from "./remove-observer"

class LazyLoad {
  constructor (options = {}) {
    this.lazyDivs = new LazyDivs()
    this.style = Object.create(null)

    this.style.backgroundColor = options.backgroundColor || '#ddd'
    this.style.transition = options.transition || 'opacity 2.0s'
  }

  start () {
    this.lazyDivs.clear()
    this.lazyDivs.init(this)

    IntersectionObserver
      ? addObserver(this)
      : addListener(this)
  }

  over () {
    IntersectionObserver
      ? removeObserver(this)
      : removeListener(this)
  }
}

export default LazyLoad