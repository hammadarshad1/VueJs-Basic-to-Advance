var app = new Vue({
    el: '#app',
    data: {
        title: 'Native Event object',
        name: ''
    },
    methods: {
        setName(event){
            this.name = event.path[0].value;
        }
    }
})