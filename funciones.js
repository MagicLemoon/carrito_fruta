const app1 = {
    data(){
        return{
            mensaje: '',
            frutas:[{nombre: 'Manzana', cantidad: 20, precioUnitario: 5, total:0}],
            nuevaFruta:"",
            nuevaCant:0,
            nuevaP:0.0,
            
        }
    },
    methods:{
        montoFruta(i){

            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precioUnitario;
            return this.frutas[i].total;
        },
        agregar(){
            if(this.nuevaCant == '')
                this.nuevaCant = 0;
            if(this.nuevaFruta)
            this.frutas.push({nombre:this.nuevaFruta, cantidad:this.nuevaCant, precioUnitario: this.nuevaP});
            nuevaFruta = "";
            nuevaCant =0;
            nuevaP=0;
        }

    },
    computed: {
        calculoSubtotal() {
            return this.frutas.reduce((acc, fruta) => acc + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        calculoIva() {
            return this.calculoSubtotal * 0.16; // Suponiendo un IVA del 16%
        },
        calculoTotal() {
            return this.calculoSubtotal + this.calculoIva;
        }
    }
    
};
const apli2 = Vue.createApp(app1).mount('#seccion');