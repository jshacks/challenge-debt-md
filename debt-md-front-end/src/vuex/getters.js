function commaMagic (value) {
  let d = value.toString().split('.')
  let e = d[0].split('').reverse().join('')
  e = e.match(/.{1,3}/g).join(',').split('').reverse().join('')
  let decimal = (d[1] || '00').substring(0, 2)
  return `$${e}.${decimal}`
}

export default {
  commaSeparatedBigDebt (state) {
    return commaMagic(state.bigDebt.bigDebt)
  },
  commaSeparatedDebtPerPerson (state) {
    let value = Math.round(state.bigDebt.bigDebt * 100 / state.bigDebt.population) / 100
    return commaMagic(value)
  },
  debts (state) {
    return state.debts.map(el => ({ sold: commaMagic(el.sold), creditor: el.creditor }))
  },
  bigDebtHistory (state) {
    return state.bigDebtHistory
  },
  incrementGetter (state) {
    return state.increment
  },
  commaSeparatedDebtLastMonth (state) {
    let value = state.bigDebtHistory[1].value
    return commaMagic(value)
  },
  commaSeparatedDifference (state) {
    let value = state.bigDebtHistory[0].value - state.bigDebtHistory[1].value
    return commaMagic(value)
  }
}
