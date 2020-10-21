var app = new Vue({
    el: '#app',
    data: {
        title: 'Keyup method with v-model',
        text: '',
        number: 0
    },
    methods: {
        onKeyup(){
            if(this.number > 0 & this.number != undefined){
                this.text = 'hurray! the number is ' + (this.number).toString();
            } else{
                this.text = '';
            }
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        title: 'Click method with v-if',
        text: 'This text will be hidden after clicking',
        btnText: 'click to hide text',
        seen: true,
    },
    methods: {
        onClick(){
            if(this.seen == true){
                this.seen = false
                this.btnText = 'click to show again'
            } else {
                this.seen = true
                this.btnText = 'click to hide text'
            }
        }
    }
})