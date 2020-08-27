
import { PageInfo, BreadcrumbPage, WebpackFileModule } from '~src/interface/common'

// 根据 ~src/pages 目录，返回 pages 路由信息
export const pageInfoList = ((): PageInfo[] => {
  const context = require.context('~src/pages', true, /.tsx$/)
  const filePaths = context.keys()
  const Components = (filePaths.map(context) as WebpackFileModule[])
    .map((item) => item.default)
  const pageInfoList = filePaths.map((filePath, index) => {
    const path = filePath.slice(1, -4).replace(/\/index$/, '')
    const Component = Components[index]
    return { path, Component }
  })
  return pageInfoList
})()

// 根据 pathname 获取面包屑列表
export function getBreadcrumbList (pathname: string): BreadcrumbPage[] {
  const currentPage = pageInfoList.find(pageInfo => pageInfo.path === pathname)
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
    .map(path => pageInfoList.find(pageInfo => pageInfo.path === path) as PageInfo)
    .map((page: PageInfo) => ({
      path: page.path,
      title: page.Component.title
    }))
  return breadcrumbPages
}
