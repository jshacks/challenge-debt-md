<template lang="html">
  <div class="big-debt-box">
    <div class="container">
      <div class="debt-title">DATORIA DE STAT EXTERNA</div>
      <div class="big-debt">
        <h1 v-text="commaSeparatedBigDebt"></h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['commaSeparatedBigDebt'])
}
</script>

<style lang="css">
  .debt-title {
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    background: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5em;
    border: 1px solid #e1e1e1;
    border-bottom: 0;
    margin-bottom: -1px;
  }
  .big-debt {
    text-align: center;
    display: block;
    margin: auto;
    padding: 60px 0;
    border: 1px solid #e1e1e1;
    background: #fff;
    box-shadow: 0 0 0px 1px #fff;
    position: relative;
    z-index: 1;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .big-debt h1 {
    color: #000;
    font-size: 100px;
    line-height: 1em;
    display: inline-block;
    margin: 0;
    position: relative;
    z-index: 3;
  }
</style>
