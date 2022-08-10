import handler from './handler'
import isLazy from "./is-lazy"
import addNonLoadedStyle from "./add-non-loaded-style"
import addHandler from './add-handler'
import removeHandler from './remove-handler'
import 'javascript-dev-utils'

_.init('each', 'isDef', 'throttle')

class LazyLoad {
  constructor (wait) {
    this.lazyDivs = new Set()
    this.throttled = _.throttle(handler, wait, { trailing: true })
  }

  clearLazyDivs () {
    this.lazyDivs.clear()
  }

  getLazyDivs () {
    const divs = document.querySelectorAll('div')

    _.each(divs, (_, div) => {
      const img = div.querySelector('img')

      if (isLazy(div) || isLazy(img)) {
        addNonLoadedStyle(div, img)
      }

      this.lazyDivs.add(div)
    })
  }

  start () {
    this.clearLazyDivs()
    this.getLazyDivs()
    addHandler(this)
  }

  end () {
    removeHandler(this.throttled)
  }
}

export default LazyLoad