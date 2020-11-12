var app = new Vue({
    el: '#app',
    data: {
        name: '',
    },
    computed: {
        fullname() { 
            // computed property as like the methods 
            // but it will not call on every event
            // but method will call on every event
            // other than self event
            console.log(this.name);
            if(this.name === ''){
                return ''
            }
            return this.name + ' ' + 'Arshad'
        }
    }
})