<template>
  <div>
    <table v-show="items.length != 0">
      <thead>
      <tr>
        <th v-for="title in titles" v-bind:key="title" v-on:click="onSort(title)">{{ title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" v-on:click="onClick(item)">
        <td v-for="key in keys">{{ item[key] }}</td>
        <td><a v-bind:href="item['kline']">日k线</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data:function() {
      return {
        titles:['时间', '股票', '机构', 'k线'],
        keys:['lasttime', 'stockname', 'institutions'],
      }
    },
    name:'historytable',
    props:['items'],
    methods:{
      onClick:function(item) {

//        window.location = './historydetail.html?stockname=' + item.stockname
      },
      onSort:function(key) {

        if (key == '股票') {

          this.$emit('sort', 'stockname')
        }

        if (key == '时间') {

          this.$emit('sort', 'lasttime')
        }

        if (key == '机构') {

          this.$emit('sort', 'institutions')
        }

        if (key == '分数') {

          this.$emit('sort', 'score')
        }
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
