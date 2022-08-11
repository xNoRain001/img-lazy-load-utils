import addNonLoadedStyle from './add-non-loaded-style'
import { isLazy } from './utils'

class LazyDivs {
  constructor () {
    this.lazyDivs = new Set()
  }

  delete (div) {
    this.lazyDivs.delete(div)
  }

  clear () {
    this.lazyDivs.clear()
  }

  init () {
    const divs = document.querySelectorAll('div')

    _.each(divs, (_, div) => {
      const img = div.querySelector('img')

      if (isLazy(div) || isLazy(img)) {
        addNonLoadedStyle(div, img)
      }

      this.add(div)
    })
  }

  add (div) {
    this.lazyDivs.add(div)
  }

  get () {
    return this.lazyDivs
  }
}

export default LazyDivs