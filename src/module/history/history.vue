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
        <td v-for="key in keys">{{ item[key] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data:function() {
      return {
        titles:['时间', '股票', '次数', '机构'],
        keys:['lasttime', 'stockname', 'count', 'institutions'],
      }
    },
    name:'historytable',
    props:['items'],
    methods:{
      onClick:function(item) {

        window.location = './historydetail.html?stockname=' + item.stockname
      }
    }
  }

</script>

<style scoped>

  table {
    margin: auto;
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 0.8rem;
  }

  td {
    background-color: #f9f9f9;
    font-size: 0.7rem;
  }

  th, td {
    text-align: center;
    min-width: 30px;
    padding: 10px 20px;
  }

</style>
