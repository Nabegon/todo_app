const app = Vue.createApp({
  // el: '#app',
  data () {
    return {
      showEdit: false,
      newTodo: '',
      todos: [],
      todoEditStatus: []
    }
  },
  mounted: function () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addItem () {
      this.todos.push(this.newTodo)
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.newTodo = ''
      this.todoEditStatus.push(false)
    },
    deleteItem (index) {
      if (confirm('are you sure to delete this todo?')) {
        this.todos.splice(index, 1)
        this.todoEditStatus.splice(index, 1)
      }
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    editTodo (index) {
      this.todoEditStatus[index] = true
    },
    updateItem (index) {
      this.todos.splice(index, 1, this.todos[index])
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.todoEditStatus[index] = false
    }
  }
})
app.mount('#app')
