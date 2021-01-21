var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    methods: {
        increase() {
            this.counter++;
        },
        reset() {
            this.counter = 0;
        }
    }
})