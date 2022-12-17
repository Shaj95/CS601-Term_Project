let app = Vue.createApp ({
    data: function() {
        return{
            imageDefaultOne: 'images/FernandoAlonsoF12013.jpg',
            imageOne: 'images/FernandoAlonsoF12013.jpg',
            imageTwo: 'images/shaj_guitar.jpg',
        }
    },
    methods: {
        actionHoverOne (value) {
            this.imageDefaultOne = value
        },
        actionOutOne (value) {
            this.imageDefaultOne = value
        },
    }
});
app.mount('#app')
