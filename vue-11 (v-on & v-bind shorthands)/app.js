var app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        add() {
            this.count++;
        }
    }
})