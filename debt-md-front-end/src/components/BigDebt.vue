<template lang="html">
  <div class="big-debt-box">
    <div class="container">
      <h2 class="big-debt-undertitle">Datoria de Stat Externă</h2>
      <div class="big-debt">
        <h1 v-text="commaSeparated"></h1>
      </div>
      <h4>
        <i class="ion-ios-person"></i>
        ${{debtPerPerson}}
        <span>de persoană</span>
      </h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['commaSeparated', 'debtPerPerson'])
}
</script>

<style lang="css">
  .big-debt-box {
    text-align: center;
    margin-bottom: 200px;
    position: relative;
    z-index: 2;
  }
  .big-debt-box h4 {
    overflow: hidden;
    z-index: 4;
    border: 1px solid #e1e1e1;
    position: relative;
    display: inline-block;
    padding: 15px 50px 15px 30px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    border-top: 0;
    font-size: 22px;
    font-weight: 800;
    margin: -1px 0 0;
  }
  .big-debt-box h4 span {
    color: #999;
    font-weight: 400;
  }
  .big-debt-undertitle {
    text-align: left;
    font-size: 25px;
    line-height: 1.5em;
    margin: 0 0 -1px;
    text-transform: uppercase;
    color: #f00;
    display: inline-block;
    background: #fff;
    border: 1px solid #e1e1e1;
    padding: 10px 20px;
    border-radius: 6px 6px 0 0;
    border-bottom: 0;
    z-index: 4;
    position: relative;
  }
  .big-debt {
    text-align: center;
    display: block;
    margin: auto;
    padding: 60px 0;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 0px 1px #fff;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .big-debt h1 {
    color: #000;
    font-size: 100px;
    line-height: 1em;
    display: inline-block;
    margin: 0;
    position: relative;
    padding-right: 40px;
    z-index: 3;
  }
  .big-debt-box h4 i {
   position: absolute;
   top: 0;
   right: 0;
   font-size: 80px;
   line-height: 1em;
   color: #eee;
   z-index: 3;
   margin: -12px 0 0;
  }
  .big-debt i {
    color: #f1f1f1;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 250px;
    margin: -18px 0;
    line-height: 1em;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 2;
  }
</style>
