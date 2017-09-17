<template>
  <div class="main">
    <div class="upload">上传
      <input class="input" type="file" @change="filesChange($event)" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
    </div>
    <div class="upload" v-on:click="showHistory(7)">查看5日历史</div>
    <div class="upload" v-on:click="showHistory(14)">查看10日历史</div>
    <div class="upload" v-on:click="showHistory(28)">查看20日历史</div>
    <div class="upload" v-on:click="showHistory(42)">查看30日历史</div>
    <div class="upload" v-on:click="showHistory(90)">查看60日历史</div>
    <div v-if="uploading == true">
      <div class="bg"></div>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>

  import Datepicker from 'vuejs-datepicker'
  import network from '../networkmanager'

  export default {
    name: 'hub',
    data: function() {
      return {
        uploading:false,
      }
    },
    methods:{
      filesChange:function(event) {

        var formData = new FormData()

        formData.append('upload', event.target.files[0])

        var self = this

        self.uploading = true

        network.uploadInputFile(formData, function() {

          self.uploading = false

          alert('上传成功')
        })
      },
      showHistory:function(value) {

        window.location = './history.html?history=' + value
      }
    },
  }
</script>

<style scoped>

  .input {

    position: absolute;
    opacity: 0.0;
    display: inline-block;
    width: 100%;
    left: 0;
    height: 4rem;
    background-color: red;
  }

  .bg {

    background-color: lightblue;
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
    opacity: 0.5;
  }


  .main label {

    display: inline-block;
    padding:0 10px;
    width: 100px;
    max-width: 20%;
    line-height: 1rem;
    vertical-align: middle;
  }

  .upload {
    position: relative;
    background-image: url("../assets/btn.png");
    background-size: 100% 100%;
    width: 80%;
    height: 6rem;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 5rem;
    color: white;
    margin: auto;
  }

  .upload:active {

    background-image: url("../assets/btnactive.png");
    background-size: 100% 100%;
  }

  .loader {
    position: absolute;
    margin: auto;
    left: 0;right: 0;
    top:0;bottom: 0;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>
