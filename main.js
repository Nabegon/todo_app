// import Vue from 'vue'
// (function () {
//   'use strict'
// import { v4 as uuidv4 } from 'uuid'
// import { createApp } from 'vue'
const app = Vue.createApp({
  // el: '#app',
  data () {
    return {
      uuid: '',
      showEdit: false,
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
    addItem () {
      const newTodoObject = {
        title: this.newItem,
        edit: false
      }
      this.todos.push(newTodoObject)
      this.newItem = ''
    },
    deleteItem (index) {
      if (confirm('are you sure to delete this todo?')) {
        this.todos.splice(index, 1)
      }
    },
    // toggleShowEdit () {
    //   this.showEdit = !this.showEdit
    // },
    editTodo (index) {
      this.todos[index].edit = true
    },
    finishEdit (index) {
      this.todos[index].edit = false
    }
  }
// })
})// ()
app.mount('#app')
