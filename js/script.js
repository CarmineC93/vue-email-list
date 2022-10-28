/*
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const {createApp} = Vue;

createApp({
    data(){
        return{

            eMailsList : [],
            
        }
    },
    methods:{
    consolelogArray(){
            console.log(this.eMailsList)
        }
    },
    created(){
        for (let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                this.eMailsList.push(resp.data.response)
                console.log(resp.data.response)
            });
        };


    },
}).mount("#app")