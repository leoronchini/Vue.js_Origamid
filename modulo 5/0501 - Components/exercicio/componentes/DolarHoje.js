export default{
    name: "DolarHoje",
    data(){
        return {
            valorDolar: 0,
        }
    },
    template: `<p>Valor Dolar/Real {{valorDolar}} </p>`,
    methods:{
        puxarDolar(){
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(r => r.json())
            .then(r => {
                this.valorDolar = r.rates.BRL;
            })
        }
    },
    created(){
        this.puxarDolar()
    }
}