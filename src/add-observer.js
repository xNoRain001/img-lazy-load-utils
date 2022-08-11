import displayImg from "./display-img"
import { isLazy, isLoaded } from "./utils"

const addObserver = lazyLoad => {
  const ob = lazyLoad.ob = new IntersectionObserver(entries => {
    
    // isIntersecting 表示元素是否与视口交叉。初始化时回调触发一次，之后滚轮滚动会触
    // 发回调（自带节流）
    _.each(entries, (_, entry) => {
      const { target, isIntersecting } = entry
      const img = target.querySelector('img')

      if (
        (isLazy(target) || isLazy(img)) && 
        !isLoaded(img) &&
        isIntersecting
      ) {
        displayImg(img)
  
        // 取消监视
        ob.unobserve(target)
      }
    })
  }, {
    threshold: [0, 1]
  })

  const lazyDivs = lazyLoad.lazyDivs.get()

  for (const div of lazyDivs) {

    // 监视 lazyDiv
    ob.observe(div)
  }
}

export default addObserver