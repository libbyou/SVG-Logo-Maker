//imports the Triangle, Square, and Circle class from shapes.js
const { Triangle, Square, Circle } = require('../lib/shapes');

//function used to generate shapes depending on user input
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

//exports renderShapes to index.js
module.exports = renderShapes;