<template>
  <div>
    <div class="otherinfo">
      <span>{{ stock.name }} 市盈率：{{ stock.pe }} 市值：{{ stock.marketcap }} </span>
    </div>
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

  .otherinfo {

    height: 30px;
    text-align: center;
    z-index: 1000;
  }

  .otherinfo > span {

    line-height: 30px;
    color: red;
    padding-left: 10px;
    padding-right: 10px;
  }

</style>
