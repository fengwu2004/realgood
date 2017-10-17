import Vue from 'vue'
import network from '../../networkmanager'
import poolstocktable from '../../components/poolstocktable.vue'

function servercallpool() {
  
  network.getPoolStocks({}, function(data) {
    
    if (!data) {
      
      return
    }
    
    new Vue({
      el: '#app',
      components: { poolstocktable },
      data: function() {
        return {
          stocks:data,
        }
      },
    })
  })
}

function onLoad() {
  
  document.title = '股票池'
  
  servercallpool()
}

onLoad()
