import HelloWorld from './components/HelloWorld.vue';
import TodoApp from './components/TodoApp.vue';

export const routes = [{
        path: '/',
        redirect: {
            name: 'TodoApp'
        }
    },
    {
        path: '',
        component: HelloWorld,
        children: [
            {
                path: '/TodoApp',
                component: TodoApp,
                name: 'TodoApp'
            },
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'TodoApp'
        }
    }
]