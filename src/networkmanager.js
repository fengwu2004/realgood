import $ from 'jquery'

let host = 'http://123.207.213.131:8888/'
let loginUrl = 'http://123.207.213.131:8080/dist/login.html'

function networkManager() {


}

function post(url, data, success) {
  
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: success,
    dataType: 'json'
  });
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

var networkManagerInstance = new networkManager()

export { networkManagerInstance as default }
