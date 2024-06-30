class CircularArray {
  constructor() {
    this.array = [];
    this.start = 0;
  }

  addItem(item) {
    this.array.push(item);
  }

  getByIndex(index) {
    if (index < 0 || index >= this.array.length) {
      return null;
    }
    return this.array[(this.start + index) % this.array.length];
  }

  rotate(n) {
    this.start = (this.start + n) % this.array.length;
    if (this.start < 0) {
      this.start += this.array.length;
    }
  }

  printArray() {
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.getByIndex(i));
    }
  }
}

module.exports = CircularArray;
