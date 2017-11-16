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
          reverse:false
        }
      },
      methods: {
        
        doSort:function(key) {
        
          this.reverse = !this.reverse
          
          if (this.reverse) {
            
            if (key == "trend" || key == 'total' || key == 'increase' || key == 'consultor') {
  
              this.stocks.sort((x, y) => {
    
                return parseFloat(x[key]) < parseFloat(y[key]) ? 1 : -1
              })
            }
            else {
  
              this.stocks.sort((x, y) => {
    
                return x[key] < y[key] ? 1 : -1
              })
            }
          }
          else {
  
            if (key == "trend" || key == 'total' || key == 'increase' || key == 'consultor') {
    
              this.stocks.sort((x, y) => {
      
                return parseFloat(x[key]) < parseFloat(y[key]) ? -1 : 1
              })
            }
            else {
    
              this.stocks.sort((x, y) => {
      
                return x[key] < y[key] ? -1 : 1
              })
            }
          }
        }
      }
    })
  })
}

function onLoad() {
  
  document.title = '股票池'
  
  servercallpool()
}

onLoad()
