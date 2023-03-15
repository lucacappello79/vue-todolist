
const { createApp } = Vue

  createApp({

    data() {

      return {

        destinations: [
        
            {
             text: 'Firenze',
             done: false,
             
         }, {
             text: 'Ravenna',
             done: true,
             
         }, {
             text: 'Vienna',
             done: false,
             
         }, {
             text: 'Innsbruck',
             done: true,
            
         }, {
             text: 'Salzburg',
             done: false,

         }, {
            text: 'Praga',
            done: true,

         },

        ],

        newPlace: "",

      }

    }, 

    methods: {

        deletePlace(placeIndex) {

            this.destinations.splice(placeIndex, 1);
      
        },

        addPlace() {

            if (this.newPlace !== '') {

                this.destinations.push({

                    text: this.newPlace,
                    done: false
                });

                this.newPlace = '';
            
            }

        },

        changeStatus(placeIndex) {

            this.destinations[placeIndex].done = !this.destinations[placeIndex].done;

          },

    }

  }).mount('#app')