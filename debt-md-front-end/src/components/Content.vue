<template lang="html">
  <div class="content">
    <big-debt></big-debt>
    <div class="container">
      <div class="row">
        <small-debt v-for="item in debts" :value="item.value" :name="item.name"></small-debt>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BigDebt from './BigDebt'
import SmallDebt from './SmallDebt'

export default {
  computed: mapGetters([
    'debts'
  ]),
  mounted () {
    setInterval(() => {
      this.increaseBigDebt()
    }, 10)
    this.getBigDebt()
    this.getDebts()
  },
  methods: mapActions([
    'getBigDebt',
    'increaseBigDebt',
    'getDebts'
  ]),
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
