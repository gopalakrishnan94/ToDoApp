import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    
    allTodos: state => {
        return state.todos;
    }
};

const mutations = {
    
    setTodos: (state, todos) => {
        state.todos = todos
    },
    newTodo: (state, todo) => {
        state.todos.unshift(todo)
    },
    editTodo: (state, data) => {
        const i = state.todos.findIndex(todo => todo.id === data.id)
        if (i !== -1) {
            state.todos.splice(i, 1, data);
        }
    },
    removeTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id != id);
    }
};

const actions = {
    async fetchTodos({
        commit
    }) {
        await axios.get('https://my-json-server.typicode.com/gopalakrishnan94/ToDoApp/posts').then(res => {
            console.log(res)
            commit('setTodos', res.data)
        })
    },
    async addTodo({
        commit
    }, title) {
        await axios.post('https://my-json-server.typicode.com/gopalakrishnan94/ToDoApp/posts', {
            title,
            completed: false
        }).then(res => {
            console.log(res)
            commit('newTodo', res.data)
        })
    },
    async updateTodo({
        commit
    }, data) {
        console.log(data)
        await axios.put('https://my-json-server.typicode.com/gopalakrishnan94/ToDoApp/posts/' + data.id, data).then(res => {
            console.log(res)
            commit('editTodo', data)
        })
    },
    async deleteTodo({
        commit
    }, id) {
        await axios.delete(`https://my-json-server.typicode.com/gopalakrishnan94/ToDoApp/posts/${id}`).then(res => {
            console.log(res)
            commit('removeTodo', id)
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
