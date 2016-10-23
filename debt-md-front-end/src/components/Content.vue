<template lang="html">
  <div class="content">
    <big-debt></big-debt>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <ul class="table-of-credits">
            <li><span>CREDIT ACORDAT</span><h4>INSTITUTIE</h4></li>
            <small-debt v-for="item in debts" :value="item.sold" :name="item.creditor.name"></small-debt>
          </ul>
        </div>
        <div class="col-md-3">
          <side-bar></side-bar>
        </div>
      </div>
      <graphic></graphic>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BigDebt from './BigDebt'
import SmallDebt from './SmallDebt'
import Graphic from './Graphic'
import SideBar from './SideBar'

export default {
  computed: mapGetters([
    'debts',
    'increment',
    'bigDebtHistory'
  ]),
  mounted () {
    setInterval(() => {
      this.increaseBigDebt(this.increment)
    }, 10)
    this.getBigDebt()
    this.getDebts()
    this.getIncrementAction()
    this.getBigDebtPerMonth()
  },
  methods: mapActions([
    'getBigDebt',
    'increaseBigDebt',
    'getDebts',
    'getIncrementAction',
    'getBigDebtPerMonth'
  ]),
  components: {
    BigDebt,
    SmallDebt,
    Graphic,
    SideBar
  }
}
</script>

<style lang="css">
  .table-of-credits {
  background: #fff;
  border: 1px solid #e1e1e1;
  box-shadow: 0 0 0 1px #fff;
  margin: 0 0 30px;
  }
  .table-of-credits li {
  display: block;
  font-size: 14px;
  line-height: 1.5em;
  list-style: none;
  border-bottom: 1px solid #e1e1e1;
  padding: 1px 15px;
  color: #333;
  }
  .table-of-credits li:first-child span,
  .table-of-credits li:first-child h4 {
  font-weight: 700;
  color: #000;
  }
  .table-of-credits li h4 {
  font-size: 15px;
  }
  .table-of-credits li:last-child {
  border-bottom: 0;
  }
  .table-of-credits li span {
  float: right;
  font-size: 15px;
  padding-top: 7px;
  color: #ff4949;
  }

  .table-of-credits li:nth-child(odd) {
   background: #f9f9f9 ;
  }
  .debt-graphic {
  background: #fff;
  border: 1px solid #e1e1e1;
  box-shadow: 0 0 0 1px #fff;
  }
  .debt-graphic .debt-graphic-title {
  display: block;
  font-size: 15px;
  line-height: 1.5em;
  list-style: none;
  border-bottom: 1px solid #e1e1e1;
  padding: 1px 15px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 6px 15px;
  color: #000;
  background: #f9f9f9;
  }
  .debt-graphic .debt-content {
  padding: 15px;
  }
</style>
