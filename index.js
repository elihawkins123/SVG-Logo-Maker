const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes.js")
inquirer.prompt ([{
    type: 'input',
    name: 'text', 
    message: 'What is your three letter text?'
}, 
{
    type:'input', 
    name:'textColor',
    message: 'What is the text color?', 
     
}, 
{
    type:'list', 
    message: 'What is the shape?',
    name: 'shape', 
    choices: ['circle', 'square', 'triangle'],
}, 
{
    type: 'input', 
    name: 'shapeColor', 
    message: 'What is your shape color?'
    }
])
.then((data) => {
    let output= ""
    const filename = `./example/logo.svg`;
    if(data.shape === "circle"){
        const text = new Circle (data.text, data.textColor, data.shapeColor)
        output= text.render()
    }
    if(data.shape === 'square'){
        const text = new Square (data.text, data.textColor, data.shapeColor)
        output= text.render()
    }
    if(data.shape === 'triangle'){
        const text = new Triangle (data.text, data.textColor, data.shapeColor)
        output= text.render()
    }
    fs.writeFile(filename, output, (err) =>
    err ? console.log(err) : console.log('Success!')
    ); 
}); 