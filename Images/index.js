const fileSystem = require ('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {circle, square, triangle} = require("./lib/shapes");

class Svg {
    constructor () {
        this.textElement = ''
        this.shapeElement = ''
    }
    render (){
        return '<svg version= "1.1" xmlns="http://ww.we.org/2000/svg" width="300" height="200">${this.sjapeElement}${this.textElement}</svg>'
    }
    setTextElement(text,color){
        this.textElement = 'text x="150" y="125", font-size="60", text-anchor="middle", fill="${color}'
    }
    setShapeElement(shape){
        this.shapeElement = shape.render ()
    }
}

const questions = [ {
    type: "input",
    name: "text",
    message: "text: please enter up to 3 characters:",
},
{
    type: "input",
    name: "shape",
    message: "shape color: please enter desired color"
},
{
    type: "list",
    name: "pixel-image",
    message: "please chppse the Pixel image you would like to use",
    choices: ["circle", "square", "triangle"],
},
];

function writeToFile(fileName, data){
    console.log("writing ["+ data +"] to file ["+ fileName +"]")
    fileSystem.writeFile (fileName, data, function (err)) {
        if (err){
            return console.log(error);
        }
        console.log("Congratulations, you have generated a logo.svg");
    };
}

async function init () {
    console.log ("starting init");
    var svgString = "";
    var svgFile = "logo.svg";

    const answers = await inquirer.prompt (questions);

    var userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;
    }else{
        console.log ("Selected amount of characters exceed allowed amount. Please enter 1-3 characters");
        return;
    }
    console.log("User text: [" = userText +);
    userFontColor = answers ["text-color"];
    console.log ("user's font color: [" + user_font_color + "]");
    user_shape_type = answers.shape;
    console.log ("User shape color: [" = user_shape_type +"]");
    //console log user shape selection
    let userShape;
    if (user_shape_type === "Square" || user_shape_type ==="square"){
        userShape = new Square();
        console.log ("User have selected Square");

    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle"){
        userShape = new triangle();
        console.log ("User have selected Triangle.");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle"){
        userShape = new circle();
        console.log ("User have selected Circle.");
}
else {
    console.log("Error, selected shape is not valid. Please choose Square, Circle, or Triangle.");
}
userShape.setColor(user_shape_color);

//
var svg = new Svg();
svg.setTextElement(user_text, user_font_color);
svg.setShapeElement(user_shape);
svgString = svg.render();

//
console.log("Displaying shape:\n\n + svgString");

console.log("The shape generation has been completed");
console.log ("Writing to file");
writeToFile(svg_file,svgSting);
}
init()