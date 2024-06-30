/** Node: node for a doubly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
/** DoublyLinkedList: chained together nodes with both next and prev pointers. */
class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (!this.tail) {
      throw new Error("List is empty");
    }
    const val = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    return val;
  }

  /** shift(): return & remove first item. */
  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const val = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      return this.unshift(val);
    }

    if (idx === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i >= idx; i--) {
        current = current.prev;
      }
    }

    newNode.next = current.next;
    current.next.prev = newNode;
    newNode.prev = current;
    current.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }

    const val = current.val;
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length -= 1;

    return val;
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }

  //reverse in place
  reverseInPlace() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }
}

module.exports = DoublyLinkedList;
