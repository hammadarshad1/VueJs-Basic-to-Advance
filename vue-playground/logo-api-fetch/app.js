var app = new Vue({
    el: '#app',
    data: {
        domain: '',
        imgUrl: ''
    },
    methods: {
        async onClick() {
            url = `https://logo.clearbit.com/${this.domain}?size=200&format=png`
            try {
                let res = await fetch(url);
                this.imgUrl = res.url;
                return await res.json();
            } catch (error) {
                console.log(error);
            }
        }
    }
})