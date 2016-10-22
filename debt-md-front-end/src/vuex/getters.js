export default {
  commaSeparated (state) {
    let d = state.bigDebt.bigDebt.toString().split('.')
    let e = d[0].split('').reverse().join('')
    e = e.match(/.{1,3}/g).join(',').split('').reverse().join('')
    let decimal = (d[1] || '00').substring(0, 2)
    return `$${e}.${decimal}`
  },
  debtPerPerson (state) {
    return Math.round(state.bigDebt.bigDebt * 100 / state.bigDebt.population) / 100
  },
  debts (state) {
    return state.debts
  }
}
