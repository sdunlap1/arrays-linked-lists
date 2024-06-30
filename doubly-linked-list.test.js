const DoublyLinkedList = require("./doubly-linked-list");

describe("DoublyLinkedList", function() {
  let lst;
  
  beforeEach(function() {
    lst = new DoublyLinkedList();
  });

  describe("push", function() {
    it("appends node and increments length", function() {
      lst.push(5);
      expect(lst.length).toBe(1);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);

      lst.push(10);
      expect(lst.length).toBe(2);
      expect(lst.head.val).toBe(5);
      expect(lst.head.next.val).toBe(10);
      expect(lst.tail.val).toBe(10);
      expect(lst.tail.prev.val).toBe(5);

      lst.push(15);
      expect(lst.length).toBe(3);
      expect(lst.head.val).toBe(5);
      expect(lst.head.next.next.val).toBe(15);
      expect(lst.tail.val).toBe(15);
      expect(lst.tail.prev.val).toBe(10);
    });
  });

  describe("unshift", function() {
    it("adds node at start and increments length", function() {
      lst.unshift(5);
      expect(lst.length).toBe(1);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);

      lst.unshift(10);
      expect(lst.length).toBe(2);
      expect(lst.head.val).toBe(10);
      expect(lst.head.next.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.tail.prev.val).toBe(10);

      lst.unshift(15);
      expect(lst.length).toBe(3);
      expect(lst.head.val).toBe(15);
      expect(lst.head.next.next.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.tail.prev.val).toBe(10);
    });
  });

  describe("pop", function() {
    it("removes node at end and decrements length", function() {
      lst.push(5);
      lst.push(10);
      expect(lst.pop()).toBe(10);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);
      expect(lst.length).toBe(1);

      expect(lst.pop()).toBe(5);
      expect(lst.tail).toBe(null);
      expect(lst.head).toBe(null);
      expect(lst.length).toBe(0);
    });
  });

  describe("shift", function() {
    it("removes node at start and decrements length", function() {
      lst.push(5);
      lst.push(10);
      expect(lst.shift()).toBe(5);
      expect(lst.tail.val).toBe(10);
      expect(lst.length).toBe(1);

      expect(lst.shift()).toBe(10);
      expect(lst.tail).toBe(null);
      expect(lst.head).toBe(null);
      expect(lst.length).toBe(0);
    });
  });

  describe("getAt", function() {
    it("gets val at index", function() {
      lst.push(5);
      lst.push(10);
      expect(lst.getAt(0)).toBe(5);
      expect(lst.getAt(1)).toBe(10);
    });
  });

  describe("setAt", function() {
    it("sets val at index", function() {
      lst.push(5);
      lst.push(10);
      lst.setAt(0, 1);
      lst.setAt(1, 2);
      expect(lst.head.val).toBe(1);
      expect(lst.head.next.val).toBe(2);
    });
  });

  describe("insertAt", function() {
    it("inserts node and adjusts nearby nodes", function() {
      lst.push(5);
      lst.push(10);
      lst.push(15);
      lst.insertAt(2, 12);
      expect(lst.length).toBe(4);
      expect(lst.head.val).toBe(5);
      expect(lst.head.next.val).toBe(10);
      expect(lst.head.next.next.val).toBe(12);
      expect(lst.head.next.next.next.val).toBe(15);

      lst.insertAt(4, 20);
      expect(lst.length).toBe(5);
      expect(lst.tail.val).toBe(20);
      expect(lst.tail.prev.val).toBe(15);
    });

    it("inserts into empty list", function() {
      lst.insertAt(0, 5);
      expect(lst.length).toBe(1);
      expect(lst.head.val).toBe(5);
      expect(lst.tail.val).toBe(5);
    });
  });

  describe("removeAt", function() {
    it("removes from 1-item list", function() {
      lst.push("a");
      lst.removeAt(0);
      expect(lst.length).toBe(0);
      expect(lst.head).toBe(null);
      expect(lst.tail).toBe(null);
    });

    it("removes from middle of list", function() {
      lst.push(5);
      lst.push(10);
      lst.push(15);
      lst.removeAt(1);
      expect(lst.length).toBe(2);
      expect(lst.head.val).toBe(5);
      expect(lst.head.next.val).toBe(15);
      expect(lst.head.next.prev.val).toBe(5);
      expect(lst.tail.val).toBe(15);
    });
  });

  describe("average", function() {
    it("calculates the average of items in a list", function() {
      lst.push(2);
      lst.push(3);
      lst.push(1);
      lst.push(1);
      lst.push(7);
      lst.push(6);
      lst.push(9);
      expect(lst.average()).toBeCloseTo(4.1429, 4);
    });

    it("returns 0 for empty lists", function() {
      expect(lst.average()).toBe(0);
    });
  });
});

describe("reverseInPlace", function() {
  it("reverses the list in place", function() {
    let lst = new DoublyLinkedList([1, 2, 3, 4, 5]);
    lst.reverseInPlace();
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(4);
    expect(lst.head.next.next.val).toBe(3);
    expect(lst.head.next.next.next.val).toBe(2);
    expect(lst.head.next.next.next.next.val).toBe(1);
    expect(lst.tail.val).toBe(1);
  });

  it("reverses a single-element list", function() {
    let lst = new DoublyLinkedList([1]);
    lst.reverseInPlace();
    expect(lst.head.val).toBe(1);
    expect(lst.tail.val).toBe(1);
  });

  it("handles an empty list", function() {
    let lst = new DoublyLinkedList();
    lst.reverseInPlace();
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });
});
