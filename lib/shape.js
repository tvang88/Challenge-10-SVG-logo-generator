class shape{
    constructor(){
        this.color=(color);
    }
    setColor(color){
        this.color=(color);
    }
}
//Defines a Circle,square, and triangle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class circle extends shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
class square extends shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}
class triangle extends shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};


module.exports = {circle, square, triangle}