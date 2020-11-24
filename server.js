const express = require('express')
const path = require('path')
const app = express()
const urllib = require('urllib');




app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const sanitys = {
    "sanity" : "ok"
    [
        {
          ingredients: ['tomato', 'water'],
          title: 'Tomato Soup',
          thumbnail: 'sample.com/image.jpeg',
          href: 'youtube.com/movie'
        }
      ]
    
}

app.get('/recipes/:ingredient', function(request, response){
    urllib.request('https://recipes-goodness.herokuapp.com/recipes/cheese', function ( err, data, res) {
       
      const ingredients =  sanitys[request.results.ingredient]  
      
     
      
     
});

})





const port = 8080
app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)

})
