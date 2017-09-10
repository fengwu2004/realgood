<template>
  <div>
    <table v-show="items.length != 0">
      <thead>
      <tr>
        <th v-for="title in titles" v-bind:key="title">{{ title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" v-on:click="onClick(item)">
        <td v-for="key in keys" v-html="item[key]"></td>
      </tr>
      </tbody>
    </table>
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

        return '<p>' + '高: ' + trend.max + '</p>' +
          '<p>' + '低: ' + trend.min + '</p>' +
          '<p>' + '高（时间）: ' + trend.maxOffset + '天' + '</p>' +
          '<p>' + '最大涨幅: ' + trend.maxPercent + '</p>'
      }
    }

    return ' '
  }

  export default {
    name:'analyse',
    props:['suggeststrends'],
    components:{ smarttable },
    computed:{
      items:function() {

        var temps = []

        for (var i = 0; i < this.suggeststrends.length; ++i) {

          var item = this.suggeststrends[i]

          var trends = item.trends

          var suggeststock = item.suggeststock

          var temp = {
            info:new Date(suggeststock.date).toLocaleDateString() + ' ' + suggeststock.stockName,
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
        titles:['关注', 'day-1', 'day-3', 'day-5', 'day-10', 'day-20', 'day-60'],
        keys:['info', 'day1', 'day3', 'day5', 'day10', 'day20', 'day60'],
      }
    },
  }

</script>

<style scoped>

  table {
    margin: auto;
    border: 2px solid #42b983;
    border-radius: 3px;
    width: 1408px;
    background-color: #fff;
  }

  th {
    background-color: #42b983;
    font-size: 0.7rem;
    /*color: rgba(255,255,255,0.66);*/

    text-align: center;
    min-width: 30px;
    width: 160px;
    float: left;
    padding: 10px 20px;
  }

  td {
    background-color: #f9f9f9;
    font-size: 0.7rem;
  }

  th, td {
    text-align: center;
    min-width: 30px;
    width: 160px;
    float: left;
    padding: 10px 20px;
  }

</style>
