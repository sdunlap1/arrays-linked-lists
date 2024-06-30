const CircularArray = require('./circular-array');

describe('CircularArray', function() {
  let circ;

  beforeEach(function() {
    circ = new CircularArray();
  });

  describe('addItem', function() {
    it('adds an item to the array', function() {
      circ.addItem('harry');
      circ.addItem('hermione');
      expect(circ.getByIndex(0)).toBe('harry');
      expect(circ.getByIndex(1)).toBe('hermione');
    });
  });

  describe('getByIndex', function() {
    it('gets an item by index', function() {
      circ.addItem('harry');
      circ.addItem('hermione');
      expect(circ.getByIndex(0)).toBe('harry');
      expect(circ.getByIndex(1)).toBe('hermione');
      expect(circ.getByIndex(2)).toBe(null); // out of bounds
    });
  });

  describe('rotate', function() {
    it('rotates the array to the right', function() {
      circ.addItem('harry');
      circ.addItem('hermione');
      circ.addItem('ginny');
      circ.addItem('ron');
      circ.rotate(1);
      expect(circ.getByIndex(0)).toBe('hermione');
      expect(circ.getByIndex(3)).toBe('harry');
    });

    it('rotates the array to the left', function() {
      circ.addItem('harry');
      circ.addItem('hermione');
      circ.addItem('ginny');
      circ.addItem('ron');
      circ.rotate(-1);
      expect(circ.getByIndex(0)).toBe('ron');
      expect(circ.getByIndex(3)).toBe('ginny');
    });

    it('handles multiple rotations', function() {
      circ.addItem('harry');
      circ.addItem('hermione');
      circ.addItem('ginny');
      circ.addItem('ron');
      circ.rotate(-5); // equivalent to rotating left by 1
      expect(circ.getByIndex(0)).toBe('ron');
      expect(circ.getByIndex(1)).toBe('harry');
    });
  });

  describe('printArray', function() {
    it('prints the array from the current start position', function() {
      circ.addItem('harry');
      circ.addItem('hermione');
      circ.addItem('ginny');
      circ.addItem('ron');
      console.log = jest.fn();
      circ.rotate(1);
      circ.printArray();
      expect(console.log.mock.calls[0][0]).toBe('hermione');
      expect(console.log.mock.calls[3][0]).toBe('harry');
    });
  });
});
