<template lang="html">
  <div class="content">
    <big-debt :bigDebtTitle="bigDebt.bigDebtTitle" :bigDebt="bigDebt.bigDebt" :population="bigDebt.population"></big-debt>
    <div class="container">
      <div class="row">
        <small-debt v-for="item in debts" :debt="item.debt" :title="item.title"></small-debt>
      </div>
    </div>
  </div>
</template>

<script>
import BigDebt from './BigDebt'
import SmallDebt from './SmallDebt'

export default {
  data () {
    return {
      bigDebt: {
        bigDebtTitle: 'Datoria de Stat Externă',
        bigDebt: 1454900240.77,
        population: 2913281
      },
      debts: [
        {
          debt: 34054654.67,
          title: 'Bank of America'
        },
        {
          debt: 3213432.45,
          title: 'Guvernul Japonie'
        },
        {
          debt: 64234754.46,
          title: 'Fondul Monetar International'
        },
        {
          debt: 12448654.67,
          title: 'Guvernul Romaniei'
        },
        {
          debt: 263998478.33,
          title: 'Bank of Europe'
        },
        {
          debt: 9754987.11,
          title: 'Banca germana KfW'
        },
        {
          debt: 34054654.67,
          title: 'Bank of America'
        },
        {
          debt: 3213432.45,
          title: 'Guvernul Japonie'
        },
        {
          debt: 64234754.46,
          title: 'Fondul Monetar International'
        },
        {
          debt: 263998478.33,
          title: 'Bank of Europe'
        },
        {
          debt: 9754987.11,
          title: 'Banca germana KfW'
        }
      ]
    }
  },
  computed: {},
  mounted () {
    setInterval(() => {
      this.bigDebt.bigDebt = this.bigDebt.bigDebt + 0.37
    }, 10)
  },
  methods: {},
  components: {
    BigDebt,
    SmallDebt
  }
}
</script>

<style lang="css">
  .content {
    text-align: center;
  }
</style>
