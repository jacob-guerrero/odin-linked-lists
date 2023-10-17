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

  const prepend = (value) => {
    const newNode = Node(value);
    newNode.next = list.head;

    list.head = newNode;
  };

  const size = () => {
    let tempNode = list.head;
    let nodeCounter = 0;

    while (tempNode != null) 
    {
        nodeCounter += 1;
        tempNode = tempNode.next;
    }
    return nodeCounter;
  };

  return {
    head,
    append,
    prepend,
    size,
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

console.log(list.head.next.value);
list.append(12);
console.log(list.head.next.next.value);
list.prepend(11);
console.log(list);
console.log(list.size());
