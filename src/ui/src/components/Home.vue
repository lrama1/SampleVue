<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Components</h2>
    <comment-list :label="this.label"></comment-list>
  </div>
</template>

<script>
import Comments from './Comments.vue'
export default {
  name: 'hello',
  components : {
	  'comment-list' : Comments
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      label : 'Child Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>