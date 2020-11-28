var app = new Vue({
    el: '#assignment',
    data: {
        result: 0
    },
    computed: {
        computedResult: function(){
            if (this.result < 37){
                return 'Not there yet';
            } else if (this.result > 37) {
                return 'Too much!';
            } else {
                return this.result;
            }
        }
    },
    watch: {
        computedResult: function(){
            const that = this;
            setTimeout(function(){
                that.result = 0;
            }, 5000);
        }
    },
    methods: {
        addNumber: function(val){
            this.result += val;
        }
    }
})