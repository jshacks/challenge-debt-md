<template>
  <div id="app">
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import MyContent from './components/Content'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    MyContent
  }
}
</script>

<style>
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,900,900i,600');
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: top;
}
body {
  font-size: 13px;
  background: #f9f9f9;
  color: #121212;
  line-height: 1.7em;
  font-family: 'Lato', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
}
i,
input,
textarea,
body,
button,
a {
    -webkit-transition: ease-in-out 0.3s;
    -moz-transition: ease-in-out 0.3s;
    -o-transition: ease-in-out 0.3s;
    transition: ease-in-out 0.3s;
}

body {
  background: url('assets/bg.jpg');
}
</style>
