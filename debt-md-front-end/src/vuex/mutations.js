export default {
  setBigDebt (store, bigDebt) {
    store.bigDebt.bigDebt = bigDebt.total
    store.bigDebt.population = bigDebt.population
  },
  increaseBigDebt (store, amount) {
    store.bigDebt.bigDebt += amount
  },
  setDebts (store, smallDebts) {
    store.debts = smallDebts
  },
  setIncrement (store, increment) {
    store.increment = increment
  },
  setBigDebtHistory (store, bigDebtList) {
    store.bigDebtHistory = bigDebtList
  }
}
