<template>
  <div>
    <table v-show="items.length != 0">
      <thead>
      <tr>
        <th v-for="title in titles" v-bind:key="title">{{ title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items">
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
        titles:['名称', '添加时间', '分析师权重', '走势权重', 'Total', '涨幅'],
        keys:['name', 'adddate', 'consultor', 'trend', 'total', 'increase'],
      }
    },
    name:'historytable',
    props:['items'],
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
