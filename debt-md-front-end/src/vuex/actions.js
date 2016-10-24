import { getBigDebt, getSmallDebts, getIncrementService, getBigDebtPerMonth } from './services'

export default {
  async getBigDebt (context) {
    context.commit('setBigDebt', await getBigDebt())
  },
  increaseBigDebt (context, incrementAmount) {
    context.commit('increaseBigDebtMutation', incrementAmount / 100)
  },
  async getDebts (context) {
    context.commit('setDebtsMutation', await getSmallDebts())
  },
  async getIncrementAction (context) {
    context.commit('setIncrementMutation', await getIncrementService())
  },
  async getBigDebtPerMonth (context) {
    context.commit('setBigDebtHistory', await getBigDebtPerMonth())
  }
}
