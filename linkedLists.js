// Linked List Node class with a value and pointer.
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    let currentNode;

    // if the head is null (the linkedList has size 0) set the element as the head.
    if (this.head == null) {
      this.head = node;
    } else {
      // else set the current Node as the head.
      currentNode = this.head;

      // iterate to the end of the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      // add node
      currentNode.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    }
  }

  isEmpty() {
    return linkedList.size == 0;
  }

  size() {
    console.log(this.size);
  }

  printList() {
    let currentNode = this.head;
    let str = "";

    while (currentNode) {
      str += currentNode.element + " ";
      currentNode = currentNode.next;
    }
    console.log(str);
  }
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(2);

console.log(linkedList);
