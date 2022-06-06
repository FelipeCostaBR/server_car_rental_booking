export const formatDate = (date: string): String => {
  return new Date(date).toLocaleDateString('en-CA')
}
