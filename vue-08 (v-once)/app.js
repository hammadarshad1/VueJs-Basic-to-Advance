var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        title: 'This will only save the initial value of counter with v-once'
    },
    methods: {
        click(){
            this.counter++
        }
    }
})