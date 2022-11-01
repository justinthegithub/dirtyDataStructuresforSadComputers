 class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('Must be a node.');
    }
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}

