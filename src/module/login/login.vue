<template>
  <div class="main">
    <div class="bg"></div>
    <div class="content">
      <p>Finance</p>
      <div>
        <label>用户名</label><input v-model="name"/>
      </div>
      <div>
        <label>密码</label><input type="password" v-model="pwd"/>
      </div>
      <div class="btn" v-on:click="onLogin">登陆</div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'login',
    data:function() {
      return {
        name:'',
        pwd:''
      }
    },
    methods:{
      onLogin:function() {

        this.$emit('onlogin', this.$data)
      }
    }
  }

</script>

<style scoped>

  .main {

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
  }

  .bg {
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin: 0;
    background-color: #9D9D9D;
    opacity: 0.4;
    z-index: 2;
  }

  .content {
    border-radius: 5px;
    background-color: white;
    position: absolute;
    width: 80%;
    max-width: 300px;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 100;
  }

  .content > p {

    text-align: center;
    padding: 10px;
  }

  .content > div {

    padding: 5px;
    width: 90%;
    margin: 10px auto;
  }

  label {

    padding: 0 5px;
    width: 30%;
    display: inline-block;
  }

  input {

    border: 1px solid;
  }

  .btn {

    width: 85% !important;
    background-color: #42b983;
    margin: 10px auto;
    text-align: center;
    border-radius: 3px;
    color: white;
  }

  .btn:active {

    background-color: aquamarine;
  }

</style>
