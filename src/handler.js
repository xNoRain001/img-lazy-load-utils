import isLoaded from './is-loaded'
import displayImg from './display-img'
import getOffsetTop from './get-offset-top'

const handler = lazyLoad => {
  console.log(lazyLoad)
  const { lazyDivs } = lazyLoad

  for (const div of lazyDivs) {
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

  if (lazyDivs.size === 0) {
    lazyLoad.end()
  }
}

export default handler