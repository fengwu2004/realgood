import Vue from 'vue'
import historytable from './history.vue'
import network from '../../networkmanager'

function getQueryString(name) {
  
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  
  var r = window.location.search.substr(1).match(reg);
  
  if (r != null) {
    
    return decodeURI(r[2]);
  }
  
  return null;
}

function getInstitutions(consultor) {
  
  return consultor.company + '(' + consultor.name + ')'
}

function compareDate(x, y) {
  
  return new Date(x.lasttime) < new Date(y.lasttime) ? 1 : -1
}

function compareStockname(x, y) {
  
  return x.stockname < y.stockname ? -1 : 1
}

function compareInstitutions(x, y) {
  
  return x.institutions < y.institutions ? -1 : 1
}

function compareScore(x, y) {
  
  return parseFloat(x.score) < parseFloat(y.score) ? -1 : 1
}

function addPrefixToStockId(stockId) {
  
  if (stockId.indexOf('60') == 0) {
    
    return 'sh' + stockId
  }
  
  return 'sz' + stockId
}

function servercallhistoryresult(history) {
  
  network.getSuggestHistory({history:history}, function(suggests) {
    
    if (!suggests) {
      
      return
    }
    
    var items = []
    
    for (let i = 0; i < suggests.length; ++i) {
      
      var item = {}
      
      var suggest = suggests[i]
      
      item.stockname = suggest.stockName
  
      item.lasttime = suggest.date
  
      item.institutions = getInstitutions(suggest.consultor)
      
      item.kline = 'http://finance.sina.com.cn/realstock/company/' + addPrefixToStockId(suggest.stockId) + '/nc.shtml'
  
      items.push(item)
    }
    
    new Vue({
      el: '#app',
      components: { historytable },
      data: function() {
        return {
          stocks:items
        }
      },
      methods: {
  
        doSort:function(value) {
  
          if (value == 'stockname') {
  
            this.stocks.sort(compareStockname)
          }
          
          if (value == 'lasttime') {
  
            this.stocks.sort(compareDate)
          }
  
          if (value == 'institutions') {
  
            this.stocks.sort(compareInstitutions)
          }
  
          this.stocks.reverse()
        }
      }
    })
  })
}

function onLoad() {
  
  var history = getQueryString('history')
  
  document.title = history.toString() + '日关注'
  
  servercallhistoryresult(history)
}

onLoad()
