import { getBigDebt, getSmallDebts } from './services'

export default {
  async getBigDebt (context) {
    context.commit('setBigDebt', await getBigDebt())
  },
  increaseBigDebt (context) {
    context.commit('increaseBigDebt')
  },
  async getDebts (context) {
    context.commit('setDebts', await getSmallDebts())
  }
}
