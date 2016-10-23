<template lang="html">
  <div class="">
    <div id="curve_chart" style="width: 100%; height: 500px"></div>
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
      let history = Array.prototype.slice.call(this.bigDebtHistory)
      history.reverse()
      var data = window.google.visualization.arrayToDataTable([
        ['Data', 'Datorie'],
        ...(history.map(el => [el.date, el.value]))
      ])

      var options = {
        title: 'Fluctuația datoriei in ultimele 3 luni',
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
