const app = Vue.createApp({
    data() {
      return {
        dataOne: 'Vue Test',
        dataTwo: []
      }
    },
    methods: {
      newMethod() {
        return this.dataOne
      }
    }
  })