class Shape {
    constructor (text,textColor,shapeColor) {
        this.text=text
        this.textColor=textColor
        this.shapeColor=shapeColor
    }
    setTextColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor
    }
    render(){
        return ""
    }
}
class Circle extends Shape {
    constructor (text,textColor,shapeColor) {
        super(text,textColor,shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
class Square extends Shape {
    constructor (text,textColor,shapeColor) {
        super(text,textColor,shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect x="10" y="10" width="300" height="200" fill="${this.shapeColor}" stroke-width="5"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
class Triangle extends Shape {
    constructor (text,textColor,shapeColor) {
        super(text,textColor,shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
module.exports={Circle,Square,Triangle}