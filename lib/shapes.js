class Shapes  {
    constructor(color = "", text = "", textColor = "",) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shapes {
    constructor (color, text, textColor) {
    super(color, text, textColor);
    };
    render() {
       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"><text x="10" y="10" fill="${this.textColor}">${this.text}</text></polygon>`;
    };
}

class Circle extends Shapes {
    constructor (color, text, textColor) {
    super(color, text, textColor);
    };
    render() {
       return `<circle cx="25" cy="75" r="20" fill="${this.color}"><text x="10" y="10" fill="${this.textColor}">${this.text}</text></circle>`;
    };
}

class Square extends Shapes {
    constructor (color, text, textColor) {
    super(color, text, textColor);
    };
    render() {
       return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"><text x="10" y="10" fill="${this.textColor}">${this.text}</text></rect>`;
    };
}

module.exports = {Triangle, Circle, Square};