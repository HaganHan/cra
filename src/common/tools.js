export function getPages () {
  const context = require.context('@src/pages', true, /.js$/)
  const filePaths = context.keys()
  const Components = filePaths
    .map(context)
    .map(item => item.default)
  const pages = filePaths.map((failPath, index) => ({
    path: failPath.slice(1, -3),
    Component: Components[index]
  }))
  return pages
}
