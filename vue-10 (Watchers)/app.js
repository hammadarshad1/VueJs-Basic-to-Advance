var app = new Vue({
    el: '#app',
    data: {
        name: '',
        fullname: ''
    },
    watch: {
        // watchers is the function
        // that is dependent to any data
        // property its name will be similar to the data
        name(value) {
            if(value != ''){
                this.fullname = value + ' Arshad'
            } else{
                this.fullname = ''
            }
        }
    }
})