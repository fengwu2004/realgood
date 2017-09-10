<template>
  <div class="main">
    <div>
      <label>日期</label><datepicker class="time" v-model="date"></datepicker>
    </div>
    <div>
      <label>时间</label><select v-model="amorpm"><option>上午</option><option>下午</option></select>
    </div>
    <div>
      <label>公司</label><input v-model="company"/>
    </div>
    <div>
      <label>name</label><input v-model="consultor"/><label class="pm">是否PM</label><input type="checkbox" v-model="ispm"/>
    </div>
    <div>
      <label>关注公司</label><input v-model="focus" list="stocknames"/>
      <datalist id="stocknames">
        <option v-for="stock in stocks" v-bind:key="stock">{{ stock }}</option>
      </datalist>
    </div>
    <div>
      <label>紧急程度</label><select v-model="urgent"><option>急</option><option>一般</option></select>
    </div>
    <div class="submit" v-on:click="uplpoad">上传</div>
  </div>
</template>

<script>

  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'hello',
    props:['stocks'],
    components: { Datepicker},
    data: function() {
      return {
        date:new Date(),
        amorpm:'上午',
        company:'',
        consultor:'',
        ispm:true,
        urgent:'急',
        focus:''
      }
    },
    methods:{
      uplpoad:function() {

        this.$emit('upload', this.$data)
      },
      clear:function() {

        console.log('clear')
      }
    },
  }
</script>

<style scoped>

  .time {

    display: inline-block;
  }

  .main > div {

    padding: 5px 0;
  }

  .main label {

    display: inline-block;
    padding:0 10px;
    width: 100px;
    max-width: 20%;
    line-height: 1rem;
    vertical-align: middle;
  }

  input {

    border:1px solid;
    font-size: 1rem;
    vertical-align: middle;
    max-width: 30%;
  }

  .submit {

    background-image: url("../assets/btn.png");
    background-size: 100% 100%;
    /*position: absolute;*/
    width: 80%;
    height: 6rem;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 5rem;
    color: white;
    margin: auto;
  }

  .submit:active {

    background-image: url("../assets/btnactive.png");
    background-size: 100% 100%;
  }

  select {

    font-size: 0.75rem;
  }

  .pm {
    display: inline-block;
    max-width: 60px !important;
  }

  .large {
    display: inline-block;
    max-width: 200px !important;
    width: 120px !important;
  }

</style>
