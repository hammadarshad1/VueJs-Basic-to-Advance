var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        value: 1,
        visibility: false,
        visibilityBtnText: 'Change Value'
    },
    methods: {
        add(num) {
            console.log(num);
            if(num != NaN && num != ''){
                this.counter = this.counter + parseFloat(num);
            }
        },
        subtract(num) {
            if(num != NaN && num != ''){
                this.counter = this.counter - parseFloat(num);
            }
        },
        reset(){
            this.counter = this.counter - this.counter;
        },
        hideOrShow(){
            this.visibility = !this.visibility;
            this.visibilityBtnText = this.visibilityBtnText == 'Change Value' ? 'Hide input' : 'Change Value';
        }
    }
})