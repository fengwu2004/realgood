import Vue from 'vue'
import analysetemp from './analyse.vue'
import network from '../../networkmanager'


function onLoad() {
  
  function getQueryString(name) {
    
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    
    var r = window.location.search.substr(1).match(reg);
    
    if (r != null) {
      
      return decodeURI(r[2]);
    }
    
    return null;
  }
  
  var consultorName = getQueryString('consultor')
  
  function servercallhistoryresult() {
    
    var data = {consultor:consultorName}
    
    console.log(JSON.stringify(data))
    
    network.queryConsultorHistory(data, function(res) {
      
      if (!res) {
        
        return
      }
      
      new Vue({
        el:'#analyse',
        components:{ analysetemp },
        data: function() {
          return {
            results:res,
          }
        },
      })
    })
  }
  
  servercallhistoryresult()
}

onLoad()

