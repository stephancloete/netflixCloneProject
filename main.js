const app = Vue.createApp({
    data() {
      return {
        dataOne: []
        }
    },
    methods: {
      newMethod() {
        return this.dataOne
      }
    }
  })