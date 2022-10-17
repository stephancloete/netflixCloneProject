const app = Vue.createApp({
    data() {
      return {
        image: './images/21-200x300.jpeg',
        name: 'Prof. Ena Kulas Jr.',
        dataOne: []
        }
    },
    methods: {
      newMethod() {
        return this.dataOne
      }
    }
  })