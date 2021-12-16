const cutString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str
  } else {
    return `${str.substring(0, Math.min(maxLength, str.lastIndexOf(' ')))}...`
  }
}

export default cutString
