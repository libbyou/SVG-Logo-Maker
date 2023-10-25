const {Triangle, Circle, Square} = require ('../lib/shapes');

// test for triangle class
describe ('Shapes', () => {
    describe ('blue', () => {
        it ('should render a blue triangle with colored text when given the shape, colors, and text specifics', () => {
            const triangle = new Triangle("blue", "Hello!", "white");
            expect(triangle.render()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="155" y="170" font-size="60" text-anchor="middle" fill="white">Hello!</text></svg>');
        });
    });
});

// test for circle class
describe ('Shapes', () => {
    describe ('green', () => {
        it ('should render a green circle with colored text when given the shape, color, and text specifics', () => {
            const circle = new Circle ("green", "I love coding!", "pink");
            expect(circle.render()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="pink">I love coding!</text></svg>');
        });
    });
});

// test for square class
describe ('Shapes', () => {
    describe ('yellow', () => {
        it ('should render a yellow square with colored text when given the shape, color, and text specifics', () => {
            const square = new Square("yellow", "Have a great day!", "black");
            expect(square.render()).toEqual('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Have a great day!</text></svg>');
        });
    });
});