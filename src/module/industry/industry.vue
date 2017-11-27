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
        <td>{{ item }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data:function() {
      return {
        titles:['行业'],
        keys:['firstindustry'],
      }
    },
    name:'industrytable',
    props:['items'],
    methods:{
      onClick:function(item) {

        window.location = './candlesticks.html?industry=' + item
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
