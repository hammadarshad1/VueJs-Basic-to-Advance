var app = new Vue({
    el: '#app',
    data: {
        title: 'Event Modifiers',
        head1: 'This will reload becuase this is simple',
        head2: 'This will not reload becuase of prevent modifier'
    },
    methods: {
        submit(event){
            event.preventDefault();
            alert('Page will not reload because of prevent modifier');
        }
    }
})