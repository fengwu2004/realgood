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

function getInstitutions(recommondlist) {
  
  var str = ''
  
  for (var i = 0; i < recommondlist.length; ++i) {
  
    if (str != '') {
  
      str += ', '
    }
    
    str += recommondlist[i].company + '(' + recommondlist[i].name + ')'
  }
  
  return str
}

function servercallhistoryresult(history) {
  
   network.getSuggestHistory({history:history}, function(data) {
    
    if (!data) {
      
      return
    }
  
     var stocks = []
  
     for (var key in data) {
    
       var stock = {}
    
       stock.stockname = key
  
       stock.count = data[key].length
    
       stock.lasttime = data[key][0].date
    
       stock.institutions = getInstitutions(data[key])
    
       stock.suggests = data[key]
    
       stocks.push(stock)
     }
  
     new Vue({
       el: '#app',
       components: { historytable },
       data: function() {
         return {
           stocks:stocks,
         }
       },
     })
  })
}

function onLoad() {
  
  var history = getQueryString('history')
  
  document.title = history.toString() + '日关注'
  
  servercallhistoryresult(history)
}

onLoad()
