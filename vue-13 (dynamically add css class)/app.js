var app = new Vue({
    el: '.app',
    data: {
        select: false
    },
    methods: {
        selectDiv() {
            this.select = !this.select;
        },
    }
})