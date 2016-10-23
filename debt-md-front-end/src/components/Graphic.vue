<template lang="html">
  <div class="">
    <div id="curve_chart" style="width: 900px; height: 500px"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['bigDebtHistory']),
  mounted () {
    window.google.charts.load('current', {'packages': ['corechart']})
    window.google.charts.setOnLoadCallback(drawChart)

    let drawChart = () => {
      var data = window.google.visualization.arrayToDataTable([
        ['Data', 'Datorie'],
        ...(this.bigDebtHistory.map(el => [el.date, el.value]))
      ])

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      }

      var chart = new window.google.visualization.LineChart(document.getElementById('curve_chart'))

      chart.draw(data, options)
    }
    setTimeout(drawChart, 2500)
    this.$watch('bigDebtHistory', drawChart)
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
