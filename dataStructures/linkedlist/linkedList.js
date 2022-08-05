class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }
  delete(value) {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    while (currentNode) {}
  }
  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const linkedList1 = new linkedList();

linkedList1.append(1);
linkedList1.append("hello");
linkedList1.append(1123);
// linkedList1.append(1543);
linkedList1.prepend(1234);
linkedList1.prepend(14);

console.log(linkedList1.toArray());
