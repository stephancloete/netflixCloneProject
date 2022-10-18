app.component('poster-rows', {
    template:
    /*html*/
    `<div class="contentRow">
        <h2>New & Noteworthy</h2>
        <div class="rowPosters">               
            <div class="rowPosterLarge">
                    <img :src="image" alt="" />
                    <p class="posterText">{{}}</p>
            </div>
        </div>
    </div>`,
 data() {
    return {
      films: []
      }
  },
  /* how to fetch JSON data: https://www.youtube.com/watch?v=7iDGJolHFmU */
  mounted() {
    fetch('https://project-apis.codespace.co.za/api/movies')
        .then(res => res.json())
        .then(data => this.films = data)
        .catch(err => console.log(err.message) )
  },
  methods: {
    
  }
})