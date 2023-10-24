const {Triangle, Circle, Square} = require ('../lib/shapes');

// test for triangle class
describe ('Shapes', () => {
    describe ('blue', () => {
        it ('should render a blue triangle when given the shape and color', () => {
            const triangle = new Triangle("blue");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
});

// test for circle class
describe ('Shapes', () => {
    describe ('green', () => {
        it ('should render a green circle when given the shape and color', () => {
            const circle = new Circle ("green");
            expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green"/>');
        });
    });
});

// test for square class
describe ('Shapes', () => {
    describe ('yellow', () => {
        it ('should render a yellow square when given the shape and color', () => {
            const square = new Square("yellow");
            expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="yellow"/>');
        });
    });
});