let app = Vue.createApp ({
    data: function() {
        return{
            imageDefaultOne: 'images/young_shaj.jpg',
            imageOne: 'images/young_shaj.jpg',
            imageTwo: 'images/Beacon_Hill_Profile_Pic.jpg',
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
