const app = Vue.createApp({
    data(){
        return{
            titulo: 'proyecto Operaciones y Componentes VUEJS',
            cantidad: 500,
            enlace: 'https://ugto.mx',
            estado: true,
            desactivar: false,
            servicios: ['transferencias', 'pagos', 'giros', 'retiros']
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 50
        },
        disminuirSaldo(){
            if(this.cantidad === 0){
                this.desactivar = true
                alert('Tu saldo es 0!!!')
                return
            }
            this.cantidad = this.cantidad - 50

        }
    },
    computed: {
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        textoMayuscula(){
            return this.titulo.toUpperCase()
        }
    }
})