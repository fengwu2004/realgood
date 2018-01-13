<template>
  <div>
    <div class="otherinfo">
      <span>{{ stock.name }} 市盈率：{{ stock.pe }} 流通市值：{{ stock.marketcap }} </span><div class="btn" v-on:click="add">{{ getTitle() }}</div>
    </div>
    <div v-bind:id="getcandlestickid" class="candlestick"></div>
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
    },
    methods:{
      add:function() {

        if (this.stock.isselfselect) {

          this.$emit('add', this.stock.stockid, 0)
        }
        else {

          this.$emit('add', this.stock.stockid, 1)
        }
      },
      getTitle:function() {

        if (this.stock.isselfselect) {

          return '删自选'
        }

        return '加自选'
      }
    }
  }

</script>

<style scoped>

  .otherinfo {

    height: 30px;
    text-align: center;
    z-index: 1000;
    display: flex;
  }

  .otherinfo > span {

    line-height: 30px;
    color: red;
    font-size: 1rem;
    padding-left: 10px;
    padding-right: 10px;
  }

  .btn {

    width: 120px;
    height: 30px;
    background: #00AA00;
    line-height: 30px;
    color: white;
  }

</style>
