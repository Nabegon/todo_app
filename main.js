const app = Vue.createApp({
  // el: '#app',
  data () {
    return {
      showEdit: false,
      newItem: '',
      todos: [
        {
          title: '',
          edit: ''
        }
      ]
    }
  },
  mounted: function () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addItem () {
      const newTodoObject = {
        title: this.newItem,
        edit: false
      }
      this.todos.push(newTodoObject)
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.newItem = ''
    },
    deleteItem (index) {
      if (confirm('are you sure to delete this todo?')) {
        this.todos.splice(index, 1)
      }
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    editTodo (index) {
      this.todos[index].edit = true
    },
    finishEdit (index) {
      this.todos[index].edit = false
      this.updateItem(index)
    },
    updateItem (index) {
      this.todos.splice(index, 1, {
        title: this.todos[index].title,
        edit: false
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
app.mount('#app')
