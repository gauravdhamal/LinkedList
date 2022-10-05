class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 1;
  }

  //Add element to Linked List
  add(element) {
    // console.log("add:");
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
    // this.printList();
  }

  // Add multiple at End in single time
  addMultiple(...arr) {
    // console.log("addMultiple:");
    let i = 0;
    let temp = new Node(arr[i]);
    if (this.head === null) {
      this.head = temp;
      i++;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    for (; i < arr.length; i++) {
      let temp = new Node(arr[i]);
      current.next = temp;
      current = current.next;
      this.length++;
    }
    // this.printList();
  }

  //Print Linked-List
  printList() {
    console.log("printList:");
    let current = this.head;
    if (this.length === 0) {
      console.log("List is Empty");
    }
    let arr = [];
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(...arr);
    console.log("--------------------");
  }

  completeIT(list1) {
    console.log("list1:", list1);
    let cu = list1;
    console.log(cu.next);
  }
}

let list1 = new LinkedList();
let list2 = new LinkedList();

list1.add(0);
list1.addMultiple(1, 2, 3, 4, 5);
list1.printList();

list2.add(6);
list2.addMultiple(7, 8, 9, 10, 11);
list2.printList();

// console.log("list1:", list1);
// console.log("list2:", list2);

function completeIT(list1) {
  console.log("list1:", list1);
  let cu = list1;
  console.log(cu.next);
}

completeIT(list1);
