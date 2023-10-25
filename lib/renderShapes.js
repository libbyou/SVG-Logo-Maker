const { Triangle, Square, Circle } = require('../lib/shapes');

function renderShapes(responses) {
    if (responses.shape === 'Triangle') {
        let logoShape = new Triangle (responses.color, responses.text, responses.textColor)
        return logoShape.render()
    }
    if (responses.shape === 'Circle') {
        let logoShape = new Circle (responses.color, responses.text, responses.textColor)
        return logoShape.render()
    }
    if (responses.shape === "Square") {
        let logoShape = new Square (responses.color, responses.text, responses.textColor)
        return logoShape.render()
    }
};

module.exports = renderShapes;