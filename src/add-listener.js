import displayImg from './display-img'
import { isLoaded } from './utils'

const handler = lazyLoad => {
  const { lazyDivs } = lazyLoad
  const _lazyDivs = lazyDivs.get()

  for (const div of _lazyDivs) {
    const img = div.querySelector('img')

    // 已经加载
    if (isLoaded(img)) { 
      return
    }

    const { clientHeight } = document.documentElement
    const { bottom, top } = div.getBoundingClientRect()

    if (bottom <= clientHeight && top >= 0) {
      
      // 图片完全出现在可视区
      displayImg(img)
      lazyDivs.delete(div)
    }
  }

  if (_lazyDivs.size === 0) {
    lazyLoad.over()
  }
}

const throttled = _.throttle(handler, 200, { trailing: true })

const addListener = lazyLoad => {
  const cb = lazyLoad.cb = () => {
    throttled(lazyLoad)
  }

  window.addEventListener('scroll', cb)
}

export default addListener