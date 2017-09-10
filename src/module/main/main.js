// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import hello from '../../components/Hello.vue'
import smarttable from '../../components/smarttable.vue'
import AlertBox from '../../AlertBox'
import network from '../../networkmanager'

Vue.config.productionTip = false
var consultorName = null
var consultorCompany = null

var vm = new Vue({
  el:'#history',
  components: { smarttable },
  data: function() {
    return {
      titles:['姓名', '所属公司', '关注', '时间'],
      keys:['name', 'company', 'stockname', 'datestr'],
      items:[]
    }
  }
})

var vm1 = new Vue({
  el: '#app',
  components: { hello },
  data:function() {
    return {
      stockid:'',
      excelFile:null
    }
  },
  methods: {
    onUpload: function(data) {
    
      doUpload(data)
    },
    filesChange(event) {
      
      var formData = new FormData()
    
      formData.append('upload', event.target.files[0])
  
      network.uploadInputFile(formData, function() {
        
        console.log('上传成功')
      })
    }
  }
})

var alertboxview = null

function showAlertBox(title, message, buttons) {
  
  if (!alertboxview) {
    
    alertboxview = new AlertBox()
  }
  
  alertboxview.show(title, message, buttons)
}

function doUpload(data) {
  
  console.log(vm1.excelFile)
  
  if (data.company.length == 0 || data.consultor.length == 0 || data.focus.length == 0) {
    
    var confirm = {name:'确定', callback:function() {
      
      alertboxview.hide()
    }}
    
    showAlertBox('警告', '输入数据不能为空', [confirm])
    
    return
  }
  
  consultorName = data.consultor
  
  consultorCompany = data.company
  
  network.saveRecommand(data, function(res) {
  
    var results = []
    
    for (var i = 0; i < res.length; ++i) {
    
      var unit = {}
    
      unit.datestr = new Date(res[i].recommond.date).toLocaleDateString() + ' ' + res[i].recommond.amorpm
  
      unit.company = res[i].consultor.company
  
      unit.name = res[i].consultor.name
      
      unit.stockname = res[i].recommond.stockname
  
      results.push(unit)
    }
  
    vm.items = results
    
  }, function() {
    
    window.location = './login.html'
  })
}

new Vue({
  el:'#doanalyse',
  methods: {
    onShowResult:function() {

      console.log('点击')
      window.location = './analyse.html?consultor=' + consultorName
    }
  }
})
