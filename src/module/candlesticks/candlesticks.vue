<template>
  <div>
    <div v-bind:id="getcandlestickid" class="candlestick"></div>
    <div v-bind:id="getvolumeid" class="volume"></div>
  </div>
</template>

<script>
  export default {
    name:'candlestick',
    props:['stock'],
    computed:{
      getcandlestickid:function() {

        return 'candlestick' + this.stock.stockid
      },
      getvolumeid:function(stockid) {

        return 'volume' + this.stock.stockid
      }
    }
  }

</script>

<style scoped>

</style>
