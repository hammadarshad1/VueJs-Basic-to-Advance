var app = new Vue({
    el: '#app',
    data: {
        message_1: 'hello vue',
        id: 'this-id'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message_2: ['hello vue 2', 'hello1', 'hello']
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        link: 'https://www.google.com'
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        link: 'https://www.google.com',
        message: '',
    },
    methods: {
        newFunction(){
            this.message = 'hello I am Hammad'
        }
    }
})