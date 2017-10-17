import Vue from 'vue'
import login from './login.vue'
import network from '../../networkmanager'

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
      
      network.servercalllogin(data, function(token) {
  
        saveToLocal(token, data.name)
  
        window.location = './hub.html'
        
      }, function() {
  
        alert('账号或密码错误，请重新输入')
      })
    }
  }
})

