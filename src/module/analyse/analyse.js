import Vue from 'vue'
import analyse from './analyse.vue'
import network from '../../networkmanager'

function getQueryString(name) {
  
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  
  var r = window.location.search.substr(1).match(reg);
  
  if (r != null) {
    
    return decodeURI(r[2]);
  }
  
  return null;
}

function servercallhistoryresult(name, company) {
  
  var data = {name:name, company:company}
  
  console.log(JSON.stringify(data))
  
  network.queryConsultorHistory(data, function(res) {
    
    if (!res) {
      
      return
    }
    
    new Vue({
      el:'#analyse',
      components:{ analyse },
      data: function() {
        return {
          results:res,
        }
      },
    })
  })
}

function onLoad() {
  
  var name = getQueryString('name')
  
  var company = getQueryString('company')
  
  document.title = company + '(' + name + ')'
  
  servercallhistoryresult(name, company)
}

onLoad()
