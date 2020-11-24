const renderer = new Renderer()

const getTeam= function () {
    let input = $("#recipe-input").val()

    $.get(`recipes/${input}`, function (Recipes) {

        renderer.render(players.FinderRecipes)
    })
}