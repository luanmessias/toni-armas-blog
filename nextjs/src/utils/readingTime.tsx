const readingTime = (givenText: string): string => {
  const wordsPerMinute = 200
  const noOfWords = givenText.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute
  const readTime = Math.ceil(minutes)
  return `${readTime} minutos de leitura`
}

export default readingTime
