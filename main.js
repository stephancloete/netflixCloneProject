const app = Vue.createApp({
    data() {
      return {
        vueTest: 'Vue Test',
        dataTwo: []
      }
    },
    methods: {
      newMethod() {
        return this.dataOne
      }
    }
  })