<template>
  <div>
    <div class="bg"></div>
    <div class="content">
      <p v-show="title !== null" class="title">{{ title }}</p>
      <p v-show="message !== null" class="message">{{ message }}</p>
      <div class="btns">
        <div class="btn" v-for="button in buttons" v-bind:key="button.name" v-on:click="callback(button)">{{ button.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'alertbox',
    props: ['message', 'title', 'buttons'],
    methods:{
      callback:function(button) {

        button.callback && button.callback()
      }
    }
  }

</script>

<style scoped>
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

  .title {
    text-align: center;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .message {
    text-align: center;
    line-height: 1rem;
    font-size: 0.8rem;
  }

  .content {
    border-radius: 5px;
    background-color: white;
    position: absolute;
    left:0;
    right:0;
    width: 80%;
    top: 40%;
    margin:auto;
    z-index: 2;
  }

  .btns {
    width: 100%;
    border-top:1px solid #a7a49d;
    display: flex;
  }

  .btns div {
    flex:1;
    height: 3rem;
    color:#0188fe;
    text-align: center;
    line-height: 3rem;
  }

  .btn:nth-child(2) {

    border-left: 1px solid #a7a49d;
    box-sizing: border-box;
  }

  .btn:nth-child(3) {

    border-left: 1px solid #a7a49d;
    box-sizing: border-box;
  }

</style>
