app.component('poster-rows', {
    template:
    /*html*/
    ` <div v-if="films" class="contentRow">
        <h2>New & Noteworthy</h2>
        <div class="rowPosters">               
            <div class="rowPosterLarge">
              <img :src="image" alt="" />
              <p class="posterText">{{name}}</p>      
            </div>
            
            <div class="rowPosterLarge">
              <li v-for="film in films" :key="film.id">{{}}</li>
            </div>

        </div>
      </div>`,
 data() {
    return {
      films: null,
      image: './images/21-200x300.jpeg',
      name: 'Prof. Ena Kulas Jr.'
      }
      
  },
  /* how to fetch JSON data: https://www.youtube.com/watch?v=7iDGJolHFmU */

  mounted() {
    fetch('https://project-apis.codespace.co.za/api/movies')
        .then(res => res.json())
        .then(data => this.films = data)
        .catch(err => console.log(err.message))
        
  },
  methods: {

  }

  
})
