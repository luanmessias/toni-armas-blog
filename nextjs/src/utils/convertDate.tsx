const convertDate = (givenDate: string): string => {
  const date = new Date(givenDate)
  const currentMonth = date.toLocaleString('pt-BR', {
    month: 'long'
  })
  const month = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
  return `${date.getDate()} de ${month} de ${date.getFullYear()}`
}

export default convertDate
