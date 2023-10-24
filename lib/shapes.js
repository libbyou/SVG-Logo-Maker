class Shapes  {
    constructor(color = "") {
        this.color = color;
    }
}

class Triangle extends Shapes {
    constructor (color) {
    super(color);
    this.triangleColor = color;
    };
    render() {
       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.triangleColor}"/>`;
    };
}

class Circle extends Shapes {
    constructor (color) {
    super(color);
    this.circleColor = color
    };
    render() {
       return `<circle cx="25" cy="75" r="20" fill="${this.circleColor}"/>`;
    };
}

class Square extends Shapes {
    constructor (color) {
    super(color);
    this.squareColor = color
    };
    render() {
       return `<rect x="10" y="10" width="30" height="30" fill="${this.squareColor}"/>`;
    };
}

module.exports = {Triangle, Circle, Square};