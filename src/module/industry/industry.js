import Vue from 'vue'
import industrytable from './industry.vue'
import network from '../../networkmanager'

function getQueryString(name) {
  
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  
  var r = window.location.search.substr(1).match(reg);
  
  if (r != null) {
    
    return decodeURI(r[2]);
  }
  
  return null;
}


function serverCallAllIndustry() {
  
  network.getAllIndustry(res => {
    
    var items = []
    
    for (let i = 0; i < res.length; ++i) {
      
      var item = res[i]
      
      items.push(item)
    }
    
    new Vue({
      el: '#app',
      components: { industrytable },
      data: function() {
        return {
          items:items
        }
      }
    })
  })
}

function onLoad() {
  
  serverCallAllIndustry(history)
}

onLoad()
