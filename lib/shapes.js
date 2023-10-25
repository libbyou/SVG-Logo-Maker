//parent Shapes class
class Shapes  {
    constructor(color = "", text = "", textColor = "",) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

//Triangle class that inherits from Shape class
class Triangle extends Shapes {
    constructor (color, text, textColor) {
    super(color, text, textColor);
    };
    render() {
       return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="155" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
}

//Circle class that inherits from Shape class
class Circle extends Shapes {
    constructor (color, text, textColor) {
    super(color, text, textColor);
    };
    render() {
       return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.color}"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text></svg>`;
    };
}

//Square class that inherits from Shape class
class Square extends Shapes {
    constructor (color, text, textColor) {
    super(color, text, textColor);
    };
    render() {
       return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
}

//exports the Triangle, Circle, and Square class to renderShapes.js and shapes.test.js
module.exports = {Triangle, Circle, Square};