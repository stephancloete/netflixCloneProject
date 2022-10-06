const app = Vue.createApp({
    data() {
      return {
        dataOne: true,
        dataTwo: []
      }
    },
    methods: {
      newMethod() {
        return this.dataOne
      }
    }
  })