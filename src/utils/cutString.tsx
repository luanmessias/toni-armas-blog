const cutString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str
  } else {
    return `${str.substr(0, Math.min(str.length, str.lastIndexOf(' ')))}...`
  }
}

export default cutString
