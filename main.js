// import Vue from 'vue'
// (function () {
//   'use strict'
// import { v4 as uuidv4 } from 'uuid'
const app = Vue.createApp({
// new Vue({
  el: '#app',
  data () {
    return {
      newItem: '',
      todos: []
    }
  },
  watch: {
    todos: {
      handler: function () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
        alert('data saved')
      },
      deep: true
    }
  },
  mounted: function () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
    alert('data loaded')
  },
  methods: {
    addItem: function () {
      const newTodoObject = {
        // id: uuidv4(),
        title: this.newItem
      }
      this.todos.push(newTodoObject)
      this.newItem = ''
    },
    deleteItem: function (index) {
      if (confirm('are you sure to delete this todo?')) {
        this.todos.splice(index, 1)
      }
    },
    changeTitle: function (title) {
      this.title = title
    }
  }
// })
})// ()
app.mount('#app')
