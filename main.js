var template = require("./template.hbs");
global.window.update = function update(jsonData){

    document.body.replaceChildren(
        
        document.createRange().createContextualFragment(
            template(jsonData)
        )
    )
    console.log(document.body.querySelector("#Title"))
}
