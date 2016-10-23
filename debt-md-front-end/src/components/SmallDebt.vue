<template lang="html">
  <div class="col-md-4">
    <div class="debt-box">
        <h5 v-text="name"></h5>
        <div class="small-debt">
          <h3 v-text="commaSeparated"></h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'value'],
  computed: {
    commaSeparated () {
      let d = this.value.toString().split('.')
      let e = d[0].split('').reverse().join('')
      e = e.match(/.{1,3}/g).join(',').split('').reverse().join('')
      let decimal = (d[1] || '00').substring(0, 2)
      return `$${e}.${decimal}`
    }
  },
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  .col-md-4 {
    float: none;
    display: inline-block;
  }
  .debt-box {
    text-align: center;
    margin-bottom: 40px;
  }
  .debt-box h5 {
    text-transform: uppercase;
    color: #f00;
    background: #fff;
    border: 1px solid #e1e1e1;
    border-bottom: 0;
    z-index: 2;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    margin: 0px auto -1px;
    position: relative;
    z-index: 4;
  }
  .debt-box .small-debt {
    text-align: center;
    margin: auto;
    padding: 20px 10px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 0px 1px #fff;
    position: relative;
  }
  .debt-box .small-debt h3 {
    font-size: 37px;
    line-height: 1em;
    color: #333;
    margin: 0;
  }
</style>
