import Vue from 'vue'
import network from '../../networkmanager'
import candlestick from './candlesticks.vue'
import CandleSticks from '../../candlesticks'
import Volume from '../../volume'
import vueSlider from 'vue-slider-component'

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
  name:'华夏银行',
  pe:'29.4',
  marketcap:'121亿',
  values:values1
}
var stock1 = {
  name:'工商银行',
  id:'600143',
  pe:'29.4',
  marketcap:'121亿',
  values:values2
}
var stock2 = {
  id:'600122',
  name:'浦发银行',
  pe:'29.4',
  marketcap:'121亿',
  values:values3
}
var stock3 = {
  stockid:'600129',
  name:'大族激光',
  pe:'29.4',
  marketcap:'121亿',
  values:values4
}
var stock4 = {
  stockid:'600126',
  name:'隆基股份',
  pe:'29.4',
  marketcap:'121亿',
  values:values5
}
var stocks = [stock0, stock1, stock2, stock3, stock4]

function getQueryString(name) {
  
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  
  var r = window.location.search.substr(1).match(reg);
  
  if (r != null) {
    
    return decodeURI(r[2]);
  }
  
  return null;
}

let maxdays = 0

function retriveSuggestStocks(history) {
  
  var stocks = []
  
  network.getSuggestCandlesticks({history:history}, stockinfos => {
    
    for (var i = 0; i < stockinfos.length; ++i) {
      
      var stockinfo =  stockinfos[i]
      
      var stock = {}
      
      stock.name = stockinfo.stock.name
      
      stock.stockid = stockinfo.stock.id
      
      stock.pe = stockinfo.pe
      
      stock.values = stockinfo.stock.dayvalues
      
      maxdays = Math.max(maxdays, stock.values.length)
      
      stock.marketcap = Math.ceil(stockinfo.marketcap * stock.values[stock.values.length - 1].Close) + '亿'
      
      stocks.push(stock)
    }
    
    initComponent(stocks)
  })
}

function retriveIndustryStocks(industry) {
  
  var stocks = []
  
  network.getIndustryCandlesticks({industry:industry}, stockinfos => {
    
    for (var i = 0; i < stockinfos.length; ++i) {
      
      var stockinfo =  stockinfos[i]
      
      var stock = {}
      
      stock.name = stockinfo.stock.name
      
      stock.stockid = stockinfo.stock.id
      
      stock.pe = stockinfo.pe
      
      stock.values = stockinfo.stock.dayvalues
      
      maxdays = Math.max(maxdays, stock.values.length)
      
      if (stock.values.length == 0) {
  
        stock.marketcap = '-- 亿'
      }
      else {
  
        stock.marketcap = Math.ceil(stockinfo.marketcap * stock.values[stock.values.length - 1].Close) + '亿'
      }
      
      stocks.push(stock)
    }
    
    initComponent(stocks)
  })
}

function onload() {
  
  var history = getQueryString('history')
  
  if (history) {
  
    retriveSuggestStocks(history)
    
    return
  }
  
  var industry = getQueryString('industry')
  
  if (industry) {
  
    retriveIndustryStocks(industry)
  }
}

var candlesticks = []

var volums = []

function initComponent(stocks) {
  
  new Vue({
    el:'#app',
    data:function() {
      return {
        stocks:stocks,
        value:0
      }
    },
    components: { candlestick, vueSlider },
    mounted:function() {
      
      for (var i = 0; i < this.stocks.length; ++i) {
        
        var candlestick = new CandleSticks(this.stocks[i].values, 360, 280, '#' + 'candlestick' + this.stocks[i].stockid)
        
        candlestick.init()
  
        candlesticks.push(candlestick)
        
        var volume = new Volume(this.stocks[i].values, 360, 180, '#' + 'volume' + this.stocks[i].stockid)
        
        volume.init()
        
        volums.push(volume)
      }
    }
  })
}

function refresh(value) {
  
  let length = maxdays *(1 - value/100)
  
  for (let i = 0; i < candlesticks.length; ++i) {
    
    candlesticks[i].refresh(length)
  }
  
  for (let i = 0; i < volums.length; ++i) {
  
    volums[i].refresh(length)
  }
}

onload()

var _vm = new Vue({
  el:'#slider',
  data:function() {
    return {
      value:0
    }
  },
  watch:{
    value:function(newvalue) {
  
      refresh(newvalue)
    }
  },
  components: { vueSlider },
})
