//importing the shapes from shape.js and testing to see if the shapes are rendering correctly.
const {circle, square, triangle} = require ("./shape.js")

describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
  });
  describe('Square', () => {
    test('renders correctly', () => {
      const shape = new square();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
  });
  describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new triangle();
      var color =('pink')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
  });