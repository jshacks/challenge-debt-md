export default {
  setBigDebt (store, bigDebt) {
    store.bigDebt.bigDebt = bigDebt.total
    store.bigDebt.population = bigDebt.population
  },
  increaseBigDebt (store) {
    store.bigDebt.bigDebt += 0.37
  },
  setDebts (store, smallDebts) {
    store.debts = smallDebts
  }
}
