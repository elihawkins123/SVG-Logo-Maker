const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
    describe('Circle', () => {
        it('should render circle with given color', () => {
            const circle = new Circle();
            circle.setcolor('red');
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red"/>');
        });
    });

    describe('Square', () => {
        it('should render square with given color', () => {
            const square = new Square();
            square.setcolor('blue');
            expect(square.render()).toBe('<rect x="50" y="50" fill="blue"/>');
        });
    });

    describe('Triangle', () => {
        it('should render triangle with given color', () => {
            const triangle = new Triangle();
            triangle.setcolor('green');
            expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
        });
    });

    describe('General tests for all shapes', () => {
        it('should set and get color correctly', () => {
            const circle = new Circle();
            const square = new Square();
            const triangle = new Triangle();

            circle.setcolor('pink');
            square.setcolor('orange');
            triangle.setcolor('purple');

            expect(circle.color).toBe('pink');
            expect(square.color).toBe('orange');
            expect(triangle.color).toBe('purple');
        });
    });
});
