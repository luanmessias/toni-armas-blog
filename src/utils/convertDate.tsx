const convertDate = (givenDate: string): string => {
  const date = new Date(givenDate)
  const currentMonth = date.getMonth() - 1
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  return `${date.getDate()} de ${months[currentMonth]} de ${date.getFullYear()}`
}

export default convertDate
