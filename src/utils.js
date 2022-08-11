const isLazy = el => _.isDef(el.getAttribute('lazy'))

const isLoaded = el => _.isDef(el.getAttribute('loaded'))

export {
  isLazy,
  isLoaded
}
