export default {
  setBigDebt (store, bigDebt) {
    store.bigDebt = bigDebt
  },
  increaseBigDebt (store) {
    store.bigDebt.bigDebt += 0.37
  },
  setDebts (store, smallDebts) {
    store.debts = smallDebts
  }
}
