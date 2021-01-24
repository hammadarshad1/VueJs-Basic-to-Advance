var app = new Vue({
    el: '#assignment',
    data: {
        goals : [],
        text: '',
        goalsListVisible: true,
    },
    computed: {
        buttonText() {
            if (this.goalsListVisible){
                return "Hide List"
            }
            return "Show List"
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.text);
            this.text = '';
        },
        goalsListVisibility() {
            this.goalsListVisible = !this.goalsListVisible;
        }
    }
})