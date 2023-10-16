const LinkedList = (head = null) => {
  return {
    head,
  };
};

const Node = (value) => {
  return {
    value: (value ? value : null),
    next: null,
  };
};

let node1 = Node(1);
let node2 = Node(7);
node1.next = node2;

let list = LinkedList(node1);

console.log(list.head.next.value);
