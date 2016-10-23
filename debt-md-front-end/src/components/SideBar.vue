<template lang="html">
  <div class="">
    <div class="info-box">
			<h4>Per capita</h4>
			<i class="ion-ios-person"></i>
			<h5 v-text="commaSeparatedDebtPerPerson"></h5>
		</div>
		<div class="info-box">
			<h4>Datoria luna trecuta</h4>
			<i class="ion-cash"></i>
			<h5 v-text="commaSeparatedDebtLastMonth"></h5>
		</div>
		<div class="info-box">
			<h4>Creseterea in ultima luna</h4>
			<i class="ion-arrow-graph-up-right"></i>
			<h5 v-text="commaSeparatedDifference"></h5>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['commaSeparatedDebtPerPerson', 'commaSeparatedDebtLastMonth', 'commaSeparatedDifference'])
}
</script>

<style lang="css">
  .info-box {
    background: #fff;
    text-align: center;
    margin-bottom: 30px;
    border: 1px solid #e1e1e1;
    padding: 15px;
    box-shadow: 0 0 0 1px #fff;
  }
  .info-box i {
    font-size: 111px;
    line-height: 1em;
    color: #ccc;
    padding-top: 10px;
    display: inline-block;
  }
  .info-box h4 {
    font-style: italic;
    color: #333;
    margin: 0;
  }
  .info-box h5 {
    font-size: 19px;
    line-height: 1.5em;
    font-weight: 600;
    margin: 0;
  }
</style>
