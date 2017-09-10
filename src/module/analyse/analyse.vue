<template>
  <div class="main">
    <div>
      <smarttable v-bind:titles="titles" v-bind:keys="keys" v-bind:items="items"></smarttable>
    </div>
  </div>
</template>

<script>

  import smarttable from '../../components/smarttable.vue'

  function getTrend(day, trends) {

    if (!trends) {

      return ' '
    }

    for (var i = 0; i < trends.length; ++i) {

      var trend = trends[i]

      if (trend.range == day) {

        return 'Max: ' + trend.max + ' ' + 'Min: ' + trend.min + ' ' + 'O: ' + trend.maxOffset + 'Percent:' + trend.maxPercent
      }
    }

    return ' '
  }

  export default {
    name:'analyse',
    props:['results'],
    components:{ smarttable },
    computed:{
      items:function() {

        var temps = []

        var recommondsTrends = this.results.recommondsTrends

        for (var i = 0; i < recommondsTrends.length; ++i) {

          var item = recommondsTrends[i]

          var trends = item.trends

          var recommond = item.recommond

          var temp = {
            info:new Date(recommond.date).toLocaleDateString() + ' ' + recommond.stockname,
            day1: getTrend(1, trends),
            day3: getTrend(3, trends),
            day5: getTrend(5, trends),
            day10: getTrend(10, trends),
            day20: getTrend(20, trends),
            day60: getTrend(60, trends)
          }

          temps.push(temp)
        }

        return temps
      }
    },
    data:function() {

      return {
        titles:['推荐', 'day-1', 'day-3', 'day-5', 'day-10', 'day-20', 'day-60'],
        keys:['info', 'day1', 'day3', 'day5', 'day10', 'day20', 'day60'],
      }
    },
    methods:{

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
