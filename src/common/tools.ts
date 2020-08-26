
// 根据 ~src/pages 目录，返回 pages 路由信息
export const pages = (() => {
  const context = require.context('~src/pages', true, /.jsx$/)
  const filePaths = context.keys()
  const Components = filePaths
    .map(context)
    .map((item: any) => item.default)
  const pages = filePaths.map((failPath, index) => {
    const path = failPath.slice(1, -4).replace(/\/index$/, '')
    const Component = Components[index]
    return { path, Component }
  })
  return pages
})()

// 根据 pathname 获取面包屑列表
export function getBreadcrumbList (pathname: string) {
  const currentPage = pages.find(page => page.path === pathname)
  if (!currentPage) return []
  const breadcrumbPaths: string[] = []
  currentPage.path.replace(/\/\w+/g, (path: string, index: number): string => {
    if (index === 0) {
      breadcrumbPaths.push(currentPage.path.slice(0))
    } else {
      breadcrumbPaths.push(currentPage.path.slice(0, index))
    }
    return path
  })
  const breadcrumbPages = breadcrumbPaths
    .reverse()
    .map(path => pages.find(page => page.path === path))
    .map((page: any) => ({
      path: page.path,
      title: page.Component.title
    }))
  return breadcrumbPages
}
