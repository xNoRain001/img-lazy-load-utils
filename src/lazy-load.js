import LazyDivs from "./lazy-divs"
import addListener from './add-listener'
import removeListener from './remove-listener'

class LazyLoad {
  constructor () {
    this.lazyDivs = new LazyDivs()
  }

  start () {
    this.lazyDivs.clear()
    this.lazyDivs.init()
    addListener(this)
  }

  over () {
    removeListener()
  }
}

export default LazyLoad