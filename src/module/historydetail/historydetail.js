import Vue from 'vue'
import historydetailtable from './historydetail.vue'
import network from '../../networkmanager'

function getQueryString(name) {
  
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  
  var r = window.location.search.substr(1).match(reg);
  
  if (r != null) {
    
    return decodeURI(r[2]);
  }
  
  return null;
}

function servercallhistoryresult(stockname) {
  
  network.getSuggestStockHistory({stockname:stockname}, function(data) {
    
    if (!data) {
      
      return
    }
    
    var stocks = []
    
    for (var i = 0; i < data.length; ++i) {
      
      var stock = {}
      
      stock.time = data[i].date
      
      stock.name = data[i].consultor.name
      
      stock.company = data[i].consultor.company
      
      stocks.push(stock)
    }
    
    new Vue({
      el: '#historydetailtable',
      components: { historydetailtable },
      data: function() {
        return {
          stocks:stocks,
        }
      },
    })
  })
}

function onLoad() {
  
  console.log('KLJLKLKSJFLSJDFLDJSFl')
  
  var stockname = getQueryString('stockname')
  
  document.title = stockname
  
  servercallhistoryresult(stockname)
}

onLoad()
