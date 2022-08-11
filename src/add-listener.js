import shared from './shared'
import displayImg from './display-img'
import getOffsetTop from './get-offset-top'
import { isLoaded } from './utils'

const handler = lazyLoad => {
  console.log('@')
  const { lazyDivs } = lazyLoad
  const _lazyDivs = lazyDivs.get()

  for (const div of _lazyDivs) {
    const img = div.querySelector('img')

    // 已经加载
    if (isLoaded(img)) { 
      return
    }

    // 获取容器底部距离 body 最上面的偏移
    const divOffsetTop = getOffsetTop(div) + div.offsetHeight

    // 获取可视区底部距离 body 最上面的偏移
    const { scrollTop, clientHeight } = document.documentElement
    const viewOffsetTop = scrollTop + clientHeight

    if (divOffsetTop <= viewOffsetTop) {

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
  const cb = shared.cb = () => {
    throttled(lazyLoad)
  }

  window.addEventListener('scroll', cb)
}

export default addListener