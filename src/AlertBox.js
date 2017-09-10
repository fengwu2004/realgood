import Vue from 'vue'
import alertbox from './components/alertbox.vue'

function AlertBox() {
  
  var _vm = null
  
  function load() {
  
    _vm = new Vue({
      el: '#alertbox',
      components: { alertbox },
      data: function(){
        return {
          title:'',
          message:'',
          buttons:[]
        }
      },
    })
  }
  
  function hide() {
  
    if (_vm) {
      
      _vm.$el.style.visibility = 'hidden'
    }
  }
  
  function show(title, message, buttons) {
    
    if (!_vm) {
    
      load()
      
      _vm.title = title
      
      _vm.message = message
      
      _vm.buttons = buttons
      
      return
    }
  
    _vm.title = title
  
    _vm.message = message
  
    _vm.buttons = buttons
  
    _vm.$el.style.visibility = 'visible'
  }
  
  this.show = show
  
  this.hide = hide
}

export { AlertBox as default }
