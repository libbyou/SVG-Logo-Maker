const {Triangle, Circle, Square} = require ('../lib/shapes');

// test for triangle class
describe ('Shapes', () => {
    describe ('blue', () => {
        it ('should render a blue triangle with colored text when given the shape, colors, and text specifics', () => {
            const triangle = new Triangle("blue", "Hello!", "white");
            // triangle.setColor("blue");
            // triangle.setText("Hello!");
            // triangle.setTextColor("white");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"><text x="10" y="10" fill="white">Hello!</text></polygon>');
        });
    });
});

// test for circle class
describe ('Shapes', () => {
    describe ('green', () => {
        it ('should render a green circle with colored text when given the shape, color, and text specifics', () => {
            const circle = new Circle ("green", "I love coding!", "pink");
            // circle.setColor("green");
            // circle.setText("I love coding!");
            // circle.setTextColor("pink");
            expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green"><text x="10" y="10" fill="pink">I love coding!</text></circle>');
        });
    });
});

// test for square class
describe ('Shapes', () => {
    describe ('yellow', () => {
        it ('should render a yellow square with colored text when given the shape, color, and text specifics', () => {
            const square = new Square("yellow", "Have a great day!", "black");
            // square.setColor("yellow");
            // square.setText("Have a great day!");
            // square.setTextColor("black");
            expect(square.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="yellow"><text x="10" y="10" fill="black">Have a great day!</text></rect>');
        });
    });
});