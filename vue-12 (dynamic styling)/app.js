var app = new Vue({
    el: '#styling',
    data: {
        boxSelected: false
    },
    methods: {
        selectBox() {
            this.boxSelected = !this.boxSelected;
        }
    }
})