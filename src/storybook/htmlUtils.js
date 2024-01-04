export const isHTML = (content) => {
  return /<[a-z][\s\S]*>/i.test(content)
}
