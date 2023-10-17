const LinkedList = (head = null) => {
  const append = (value) => {
    const newNode = Node(value);

    if (!list.head) {
      list.head = newNode;
      return;
    }

    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  };

  return {
    head,
    append,
  };
};

const Node = (value = null, next = null) => {
  return {
    value,
    next,
  };
};

let node1 = Node(1);
let node2 = Node(7);
node1.next = node2;

let list = LinkedList(node1);

console.log(!list.head);
console.log(list.head.next.value);
list.append(12);
console.log(list.head.next.next.value);
