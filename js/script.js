const app = new Vue({
    el: '#app',
    data: {

        emails: [],

    },

    mounted(){
       this.callAPI('https://flynn.boolean.careers/exercises/api/random/mail')
    },

    methods: {
        callAPI(url){
            axios.get(url)
            .then( resp => {
                //console.log(resp.data.response);
                this.emails.push(resp.data.response);
                //console.log(this.emails);
                if(this.emails.length < 10){
                    this.callAPI(url);
                }
                //console.log(this.emails);
            }).catch( err => {
                console.log(err);
            })
        }
    }

})