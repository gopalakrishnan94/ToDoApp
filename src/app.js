import axios from 'axios';

const state = {
    todos: [],
    images: [],
    BBT: [],
    GOT: [],
    testUpload: [],
    getTestUpload: [],
};

const getters = {
    
    allTodos: state => {
        return state.todos;
    },
    allImages: state => {
        return state.images;
    },
    allBBT: state => {
        return state.BBT;
    },
    allGOT: state => {
        return state.GOT;
    },
    allTestUpload: state => {
        return state.testUpload;
    },
    getTestUploadData: state => {
        return state.getTestUpload;
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
    },
    setImages: (state, images) => {
        state.images = images;
    },
    setBBT: (state, images) => {
        state.BBT = images;
    },
    setGOT: (state, images) => {
        state.GOT = images;
    },
    setTestUpload: (state, upload) => {
        state.testUpload = upload;
    },
    setTestUploadData: (state, upload) => {
        state.getTestUpload = upload;
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
    },
    async fetchImages({
        commit
    }, id) {
        await axios.get('https://rickandmortyapi.com/api/character?page=' + id).then(res => {
            console.log(res)
            commit('setImages', res.data.results)
        })
    },
    async fetchBBT({
        commit
    }, limit) {
        await axios.get('http://showtimes.everyday.in.th/api/v2/movie?limit=50&offset=' + limit).then(res => {
            console.log(res)
            commit('setBBT', res.data)
        })
        // commit('setBBT', dd._embedded.episodes)
    },
    async fetchTestUpload({
        commit
    }) {
        await axios.get('Image').then(res => {
            console.log(res)
            commit('setTestUpload', res.data)
        })
    },
    async getTestUpload({
        commit
    }, id) {
        await axios.get('Image/' + id).then(res => {
            console.log(res)
            commit('setTestUploadData', res.data)
        })
    },
    async postTestUpload({
        commit,
        dispatch
    }, data) {
        await axios.post('Image', data).then(res => {
            console.log(res)
            console.log(commit)
            dispatch('fetchTestUpload')
        })
    },
    async putTestUpload({
        commit,
        dispatch
    }, data) {
        await axios.put('Image/' + data.id, data).then(res => {
            console.log(res)
            console.log(commit)
            dispatch('fetchTestUpload')
        })
    },
    async deleteTestUpload({
        commit,
        dispatch
    }, id) {
        await axios.delete('Image/' + id).then(res => {
            console.log(res)
            console.log(commit)
            dispatch('fetchTestUpload')
        })
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}