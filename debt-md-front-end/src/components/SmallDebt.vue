<template lang="html">
  <li><span v-text="value"></span><h4 v-text="name"></h4></li>
</template>

<script>
export default {
  props: ['name', 'value'],
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
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
