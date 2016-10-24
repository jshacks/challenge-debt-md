export default {
  setBigDebt (store, bigDebt) {
    store.bigDebt.bigDebt = bigDebt.total
    store.bigDebt.population = bigDebt.population
  },
  increaseBigDebtMutation (store, amount) {
    store.bigDebt.bigDebt += amount
  },
  setDebtsMutation (store, smallDebts) {
    store.debts = smallDebts
  },
  setIncrementMutation (store, increment) {
    store.increment = increment
  },
  setBigDebtHistory (store, bigDebtList) {
    store.bigDebtHistory = bigDebtList
  }
}
