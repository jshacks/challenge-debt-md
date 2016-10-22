<template lang="html">
  <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="logo">
              <h1>Debt<span><i class="ion-ios-world-outline"></i>MD</span></h1>
            </div>
          </div>
          <div class="col-md-8">
            <ul class="share-debt">
              <li>Share the debt:</li>
              <li><a href="#"><i class="ion-social-facebook"></i></a></li>
              <li><a href="#"><i class="ion-social-twitter"></i></a></li>
              <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
            </ul>
          </div>
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
  .header {
    padding: 35px 0 40px;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 140px;
    background: #fff;
    box-shadow: 0 1px 0 1px #fff;
  }
  .header .logo h1 {
    font-weight: 600;
    font-size: 35px;
    line-height: 1em;
    letter-spacing: 1px;
    margin: 0;
  }
  .header .logo h1 span {
    color: #00aff0;
  }
  .header .share-debt {
    text-align: right;
    margin: 0;
    padding: 5px 0 0;
    color: #666;
    font-size: 14px;
  }
  .header .share-debt li {
    display: inline-block;
    list-style: none;
    margin-left: 10px;
    margin-top: -5px;
    *zoom: 1;
    *display: inline;
  }
  .header .share-debt li:first-child {
    margin-top: 0;
  }
  .header .share-debt li a {
    display: block;
    color: #00aff0;
    font-size: 18px;
    width: 30px;
    height: 30px;
    border: 1px solid #00aff0;
    border-radius: 100%;
    text-align: center;
    line-height: 1.5em;
    padding-top: 1px;
  }
  .header .share-debt li a:hover {
    background: #00aff0;
    color: #fff;
  }
</style>
