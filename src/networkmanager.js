import $ from 'jquery'

let host = 'http://123.206.230.152:8888/'
// let host = 'http://localhost:8888/'
let loginUrl = 'http://123.206.230.152:80/dist/module/login.html'

function networkManager() {


}

function post(url, data, success) {
  
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    timeout:600000,
    success: success,
    dataType: 'json'
  });
}

networkManager.prototype.uploadInputFile = function(formdata, success) {
  
  var url = host + 'upload/recommond'
  
  var oReq = new XMLHttpRequest();
  
  oReq.open("POST", url, true);
  
  oReq.onload = function() {
    
    if (oReq.status == 200) {
  
      success && success()
      
    } else {
      
      console.log('error occurred when trying to upload your file')
    }
  }
  
  oReq.send(formdata)
}

networkManager.prototype.queryConsultorHistory = function(data, success) {
  
  var url = host + 'analyse/rangetrend'
  
  data.token = window.localStorage.getItem('token')
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
  
    if (res.success == -1) {
    
      window.location = loginUrl
    }
    
  }, function(res) {
    
    console.log(JSON.stringify(res))
  })
}

networkManager.prototype.saveRecommand = function(data, success, failed) {
  
  var url = host + 'save/saverecommondinfo'
  
  data.token = window.localStorage.getItem('token')
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
  
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
  
    failed && failed(res)
  })
}

networkManager.prototype.servercalllogin = function(data, success, failed) {
  
  var url = host + 'login'
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.token)
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getSuggestStockHistory = function(data, success, failed) {
  
  var url = host + 'history/suggest/detail'
  
  data.token = window.localStorage.getItem('token')
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getPoolStocks = function(data, success, failed) {
  
  var url = host + 'analyse/poolstock'
  
  data.token = window.localStorage.getItem('token')
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getSuggestHistory = function(data, success, failed) {
  
  var url = host + 'history/suggest'
  
  data.token = window.localStorage.getItem('token')
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getSelfSelectCandlesticks = function(success, failed) {
  
  var url = host + 'getSelfSelect'
  
  post(url, {}, function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.addToSelfSelect = function(data, success, failed) {
  
  var url = host + 'addtoselfselect'
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getSuggestCandlesticks = function(data, success, failed) {
  
  var url = host + 'history/suggest/candlestick'
  
  data.token = window.localStorage.getItem('token')
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getIndustryCandlesticks = function(data, success, failed) {
  
  var url = host + 'industry'
  
  post(url, JSON.stringify(data), function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

networkManager.prototype.getAllIndustry = function( success, failed) {
  
  var url = host + 'allindustry'
  
  post(url, {}, function(res) {
    
    if (res.success == 1) {
      
      success && success(res.data)
    }
    
    if (res.success == -1) {
      
      window.location = loginUrl
    }
  }, function(res) {
    
    console.log(JSON.stringify(res))
    
    failed && failed(res)
  })
}

var networkManagerInstance = new networkManager()

export { networkManagerInstance as default }
