class Renderer { 
    constructor(){
      this.source = $('#Recipes-Finder').html();
      this.template = Handlebars.compile(this.source);
    }

    render(Recipes){
        $('#Recipes-container').empty()
        const newHTML = this.template({Recipes });
        $('#Recipes-container').append(newHTML);  
      }
    }