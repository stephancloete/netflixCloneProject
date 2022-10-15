const app = Vue.createApp({
    data() {
      return {
        vueTest: 'Vue Test',
        billboard: 'BILLBOARD',
        dataTwo: []
      }
    },
    methods: {
      newMethod() {
        return this.dataOne
      }
    }
  })