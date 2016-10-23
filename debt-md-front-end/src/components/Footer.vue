<template lang="html">
  <div class="footer">
    <div class="container">
      <div class="col-md-6">
        <p>Copyright &copy; GOV.MD 2016</p>
      </div>
      <div class="col-md-6">
        <p class="float-right">Develop with love in MD.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  .footer {
    padding: 20px 0;
    margin-top: 140px;
    border-top: 1px solid #e1e1e1;
    background: #fff;
    box-shadow: 0 -1px 0 1px #fff;
  }
  .footer p {
    margin: 0;
    line-height: 1.5em;
    color: #999;
    font-size: 13px;
    text-transform: uppercase;
  }
  .float-right {
    float: right;
  }
</style>
