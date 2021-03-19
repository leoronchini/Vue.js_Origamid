export default {
  name: "TempoHoje",
  data() {
    return {
      temperaturaMaxima: 0,
    };
  },
  template: `<p>Rio de Janeiro, máxima de:{{temperaturaMaxima}}</p> `,
  methods: {
      puxarTempo(){
          fetch("https://www.metaweather.com/api/location/455825/")
        //   caso dê erro de CORS, baixar extensao allow-control-allow-origin no navegador
          .then(r => r.json())
          .then(r =>{
              this.temperaturaMaxima = r.consolidate_weather[0].max_temp.toFixed(2);
          })
      }
  },
  created(){
      this.puxarTempo();
  }
};
