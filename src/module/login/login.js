import Vue from 'vue'
import login from './login.vue'
import $ from 'jquery'

let host = 'http://123.207.213.131:8888/'

let mainurl = './hub.html'

function saveToLocal(token, username) {
  
  try {
    
    window.localStorage.setItem('token', token)
  
    window.localStorage.setItem('user', username)
  }
  catch (e) {
  
    alert('请关闭无痕浏览模式')
  }
}

new Vue({
  el:'#login',
  components: { login },
  methods:{
    
    onLogin:function(data) {
      
      var url = host + 'login'
      
      $.post(url, JSON.stringify(data), function(res) {
        
        if (res.success == 1) {
          
          saveToLocal(res.token, data.name)
  
          window.location = mainurl
        }
        else  {
    
          alert('账号或密码错误，请重新输入')
        }
      })
    }
  }
})

