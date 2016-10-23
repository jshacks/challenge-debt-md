import { getBigDebt, getSmallDebts, getIncrementService, getBigDebtPerMonth } from './services'

export default {
  async getBigDebt (context) {
    context.commit('setBigDebt', await getBigDebt())
  },
  increaseBigDebt (context, incrementAmount) {
    context.commit('increaseBigDebt', incrementAmount / 100)
  },
  async getDebts (context) {
    context.commit('setDebts', await getSmallDebts())
  },
  async getIncrementAction (context) {
    context.commit('setIncrement', await getIncrementService())
  },
  async getBigDebtPerMonth (context) {
    context.commit('setBigDebtHistory', await getBigDebtPerMonth())
  }
}
