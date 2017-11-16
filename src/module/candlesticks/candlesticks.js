import Vue from 'vue'
import network from '../../networkmanager'
import candlestick from './candlesticks.vue'
import CandleSticks from '../../candlesticks'
import Volume from '../../volume'

var values1 = [
  {
    'Date':'9-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {'Date':'6-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'5-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'4-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'3-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  }
]
var values2 = [
  {
    'Date':'9-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {'Date':'6-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'5-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'4-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'3-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  }
]
var values3 = [
  {
    'Date':'9-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {'Date':'6-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'5-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'4-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'3-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  }
]
var values4 = [
  {
    'Date':'9-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {'Date':'6-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'5-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'4-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'3-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  }
]
var values5 = [
  {
    'Date':'9-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {'Date':'6-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'5-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'4-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  },
  {
    'Date':'3-Jun-14',
    'Open':'62.40',
    'High':'63.34',
    'Low':'61.79',
    'Close':'62.88',
    'Volume':'37617413'
  }
]
var stock0 = {
  stockid:'600123',
  values:values1
}
var stock1 = {
  stockid:'600143',
  values:values2
}
var stock2 = {
  stockid:'600122',
  values:values3
}
var stock3 = {
  stockid:'600129',
  values:values4
}
var stock4 = {
  stockid:'600126',
  values:values5
}
var stocks = [stock0, stock1, stock2, stock3, stock4]

new Vue({
  el:'#app',
  data:function() {
    return {
      stocks:stocks
    }
  },
  components: { candlestick },
  mounted:function() {
    
    for (var i = 0; i < this.stocks.length; ++i) {
      
      var candlestick = new CandleSticks(this.stocks[i].values, 400, 300, '#' + 'candlestick' + this.stocks[i].stockid)
      
      candlestick.init()
      
      var volume = new Volume(this.stocks[i].values, 400, 200, '#' + 'volume' + this.stocks[i].stockid)
      
      volume.init()
    }
  }
})
