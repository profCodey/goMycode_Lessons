class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let values = "";
    while (current) {
      values += `${current.value} `;
      current = current.next;
    }
    return values;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head === node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insertNode(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const node = new Node(value);
    let current = this.head;
    let i = 0;
    while (i < index - 1) {
      current = current.next;
      i++;
    }
    node.next = current.next;
    current.next = node;
    this.size++;
  }

    removeNode(index) {
        if (index === 0) {
            let removedNode = this.head
            this.head = removedNode.next;
            return
        }
        let i = 0;
        let current = this.head;
          while (i < index - 1) {
            current = current.next;
            i++;
          }
        let removedN = current.next
          this.current.next = removedN.next;
    }
}

const list = new LinkedList()

console.log(list)
console.log(list.print());
list.prepend(10);
console.log(list.print());
list.prepend(20);
list.append(50);
list.insertNode(30, 1)
console.log(list.print());
list.removeNode(2);
console.log(list.print());
console.log(list.getSize())



const array = [9, 3, 4, 5, 3, 5, 2]; //8 seoncds
sortedArr =  [2, 3, 3, 4, 5, 5, 9];//1 seconds