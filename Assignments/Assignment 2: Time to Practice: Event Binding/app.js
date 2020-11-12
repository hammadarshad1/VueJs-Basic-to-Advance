var app = new Vue({
    el: '#assignment',
    data: {
        output: '',
        output1: ''
    },
    methods: {
        showAlert(){
            alert('Hello you clicked on button')
        },
        keydownEvent(event){
            this.output = event.target.value;
        },
        keydownEvent1(event){
            this.output1 = event.target.value;
        }
    }
})